import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

export type MessageType = {
  sensorId: string;
  timestamp: number;
  value: number;
};

type ExperimentControlButtonProps = {
  onNewMessage: (message: MessageType) => void;
  onExperimentStarted: () => void;
};

const WEBSOCKET_URL = 'http://localhost:8900';

const ExperimentControlButton: React.FC<ExperimentControlButtonProps> = ({
  onNewMessage,
  onExperimentStarted,
}) => {
  const [isExperimentStarted, setIsExperimentStarted] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const socket = useRef(null);
  const startTime = useRef(0);

  useEffect(() => {
    socket.current = io(WEBSOCKET_URL);

    socket.current.on('connect', () => {
      setIsConnected(true);
    });

    socket.current.on('message', (message) => {
      const newMessage = {
        ...message.payload,
        timestamp: message.payload.timestamp - startTime.current,
      };
      onNewMessage(newMessage);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const handleExperimentStart = () => {
    setIsExperimentStarted(!isExperimentStarted);

    if (!isExperimentStarted) {
      socket.current.emit('message', { cmd: 'test:start', source: 'client' });
      startTime.current = Date.now();
      onExperimentStarted();
    } else {
      socket.current.emit('message', { cmd: 'test:stop', source: 'client' });
    }
  };

  return isConnected ? (
    <button
      type="button"
      className="btn btn-primary"
      onClick={handleExperimentStart}
    >
      {isExperimentStarted ? 'Стоп' : 'Начать эксперимент'}
    </button>
  ) : (
    ''
  );
};

export default ExperimentControlButton;
