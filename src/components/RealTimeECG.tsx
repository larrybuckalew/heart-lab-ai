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
  // ... [Previous state and hooks] ...

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