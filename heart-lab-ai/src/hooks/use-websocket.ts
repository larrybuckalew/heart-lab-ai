import { useEffect, useRef, useCallback, useState } from 'react'

interface WebSocketHookOptions {
  onMessage?: (message: string) => void
  onError?: (error: Event) => void
  onClose?: () => void
  reconnectAttempts?: number
  reconnectInterval?: number
  autoConnect?: boolean
}

type ConnectionStatus = 'connecting' | 'connected' | 'disconnected' | 'error'

export const useWebSocket = (
  url: string,
  options: WebSocketHookOptions = {}
) => {
  const {
    onMessage,
    onError,
    onClose,
    reconnectAttempts = 3,
    reconnectInterval = 5000,
    autoConnect = false
  } = options

  const ws = useRef<WebSocket | null>(null)
  const reconnectCount = useRef(0)
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('disconnected')

  const connect = useCallback(async () => {
    try {
      if (ws.current?.readyState === WebSocket.OPEN) {
        return
      }

      setConnectionStatus('connecting')
      ws.current = new WebSocket(url)

      ws.current.onopen = () => {
        setConnectionStatus('connected')
        reconnectCount.current = 0
      }

      ws.current.onmessage = (event) => {
        onMessage?.(event.data)
      }

      ws.current.onerror = (error) => {
        setConnectionStatus('error')
        onError?.(error)
      }

      ws.current.onclose = () => {
        setConnectionStatus('disconnected')
        onClose?.()

        if (reconnectCount.current < reconnectAttempts) {
          reconnectCount.current++
          setTimeout(() => {
            connect()
          }, reconnectInterval)
        }
      }
    } catch (error) {
      setConnectionStatus('error')
      console.error('WebSocket connection error:', error)
    }
  }, [url, onMessage, onError, onClose, reconnectAttempts, reconnectInterval])

  const disconnect = useCallback(() => {
    if (ws.current) {
      ws.current.close()
      ws.current = null
      setConnectionStatus('disconnected')
    }
  }, [])

  const sendMessage = useCallback((message: any) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(message))
    } else {
      console.warn('WebSocket is not connected')
    }
  }, [])

  useEffect(() => {
    if (autoConnect) {
      connect()
    }

    return () => {
      disconnect()
    }
  }, [autoConnect, connect, disconnect])

  return {
    connectionStatus,
    connect,
    disconnect,
    sendMessage
  }
}

export const isWebSocketOpen = (ws: WebSocket | null): ws is WebSocket => {
  return ws !== null && ws.readyState === WebSocket.OPEN
}