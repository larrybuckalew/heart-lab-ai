import React, { useEffect, useRef, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useWebSocket } from '@/hooks/use-websocket'
import { PlayIcon, PauseIcon, StopIcon } from 'lucide-react'

interface RealTimeECGProps {
  deviceId: string
  patientId: string
  sampleRate?: number
  displayDuration?: number
  className?: string
}

interface ECGDataPoint {
  timestamp: number
  values: number[]
}

interface AnalysisResult {
  heartRate: number
  qrsInterval: number
  prInterval: number
  qtInterval: number
  anomalyDetected: boolean
  confidence: number
}

const RealTimeECG: React.FC<RealTimeECGProps> = ({
  deviceId,
  patientId,
  sampleRate = 250,
  displayDuration = 10,
  className = ''
}) => {
  const [data, setData] = useState<ECGDataPoint[]>([])
  const [isRecording, setIsRecording] = useState(false)
  const [latency, setLatency] = useState<number>(0)
  const [error, setError] = useState<string | null>(null)
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null)
  const [selectedLead, setSelectedLead] = useState<number>(0)
  
  const maxPoints = displayDuration * sampleRate
  const wsUrl = `ws://localhost:3000/ws/ecg?deviceId=${deviceId}&patientId=${patientId}`

  const { 
    connect,
    disconnect,
    sendMessage,
    connectionStatus
  } = useWebSocket(wsUrl, {
    onMessage: (message) => handleWebSocketMessage(JSON.parse(message)),
    onError: (error) => setError(error.message || 'Connection error occurred'),
    onClose: () => handleDisconnect()
  })

  useEffect(() => {
    return () => {
      disconnect()
    }
  }, [disconnect])

  const handleWebSocketMessage = (message: any) => {
    try {
      switch (message.type) {
        case 'data':
          handleECGData(message.payload)
          break
        case 'analysis':
          handleAnalysisResult(message.payload)
          break
        case 'error':
          setError(message.payload)
          break
        default:
          console.warn('Unknown message type:', message.type)
      }
    } catch (error) {
      console.error('Error handling WebSocket message:', error)
      setError('Failed to process incoming data')
    }
  }

  const handleECGData = (newData: ECGDataPoint) => {
    setData(currentData => {
      const updatedData = [...currentData, newData]
      return updatedData.slice(-maxPoints)
    })
    setLatency(Date.now() - newData.timestamp)
  }

  const handleAnalysisResult = (result: AnalysisResult) => {
    setAnalysis(result)
  }

  const handleDisconnect = () => {
    setIsRecording(false)
    setError('Connection closed')
  }

  const startRecording = async () => {
    try {
      await connect()
      sendMessage({
        type: 'control',
        payload: { command: 'start' },
        timestamp: Date.now()
      })
      setIsRecording(true)
      setError(null)
    } catch (error) {
      setError('Failed to start recording')
    }
  }

  const stopRecording = () => {
    sendMessage({
      type: 'control',
      payload: { command: 'stop' },
      timestamp: Date.now()
    })
    disconnect()
    setIsRecording(false)
  }

  const getLatencyColor = (latency: number): string => {
    if (latency < 100) return 'bg-green-100 text-green-800'
    if (latency < 300) return 'bg-yellow-100 text-yellow-800'
    return 'bg-red-100 text-red-800'
  }

  const getHeartRateColor = (hr: number): string => {
    if (hr < 60) return 'bg-blue-100 text-blue-800'
    if (hr > 100) return 'bg-red-100 text-red-800'
    return 'bg-green-100 text-green-800'
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Real-Time ECG Monitor</CardTitle>
            <div className="space-x-2">
              <Badge className={getLatencyColor(latency)}>
                Latency: {latency}ms
              </Badge>
              {analysis?.heartRate && (
                <Badge className={getHeartRateColor(analysis.heartRate)}>
                  {analysis.heartRate} BPM
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="space-x-2">
                <Button
                  onClick={isRecording ? stopRecording : startRecording}
                  variant={isRecording ? "destructive" : "default"}
                >
                  {isRecording ? (
                    <><StopIcon className="w-4 h-4 mr-2" /> Stop</>
                  ) : (
                    <><PlayIcon className="w-4 h-4 mr-2" /> Start</>
                  )}
                </Button>
              </div>
              <select
                value={selectedLead}
                onChange={(e) => setSelectedLead(Number(e.target.value))}
                className="border rounded p-1"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={i}>Lead {i + 1}</option>
                ))}
              </select>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer>
                <LineChart data={data}>
                  <XAxis 
                    dataKey="timestamp"
                    domain={['dataMin', 'dataMax']}
                    type="number"
                    tickFormatter={(value) => (value % 1000).toString()}
                  />
                  <YAxis
                    domain={[-2, 2]}
                    ticks={[-2, -1, 0, 1, 2]}
                  />
                  <Tooltip
                    formatter={(value: number) => value.toFixed(3)}
                    labelFormatter={(label) => `Time: ${label}ms`}
                  />
                  <Line
                    type="monotone"
                    dataKey={`values[${selectedLead}]`}
                    stroke="#2196F3"
                    dot={false}
                    strokeWidth={1.5}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {analysis && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-2 bg-gray-50 rounded">
                  <span className="font-medium">QRS Interval:</span>{' '}
                  {analysis.qrsInterval.toFixed(2)} ms
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <span className="font-medium">PR Interval:</span>{' '}
                  {analysis.prInterval.toFixed(2)} ms
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <span className="font-medium">QT Interval:</span>{' '}
                  {analysis.qtInterval.toFixed(2)} ms
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <span className="font-medium">Confidence:</span>{' '}
                  {(analysis.confidence * 100).toFixed(1)}%
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default RealTimeECG