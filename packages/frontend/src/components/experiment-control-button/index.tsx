import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

export type messageType = {
  sensorId: string;
  timestamp: number;
  value: number;
};

type ExperimentControlButtonProps = {
  onNewMessage: (message: messageType) => void;
};

const WEBSOCKET_URL = 'http://localhost:8900';

const ExperimentControlButton: React.FC<ExperimentControlButtonProps> = ({
  onNewMessage,
}) => {
  const [isExperimentStarted, setIsExperimentStarted] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io(WEBSOCKET_URL);

    socket.current.on('connect', () => {
      setIsConnected(true);
    });

    socket.current.on('message', (message) => {
      onNewMessage(message.payload);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const handleExperimentStart = () => {
    setIsExperimentStarted(!isExperimentStarted);

    if (!isExperimentStarted) {
      socket.current.emit('message', { cmd: 'test:start', source: 'client' });
    } else {
      socket.current.emit('message', { cmd: 'test:stop', source: 'client' });
    }
  };

  return isConnected ? (
    <button className="button" onClick={handleExperimentStart}>
      {isExperimentStarted ? 'Стоп' : 'Старт'}
    </button>
  ) : (
    ''
  );
};

export default ExperimentControlButton;
