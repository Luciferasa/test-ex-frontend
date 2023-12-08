import { useState } from 'react';

import ExperimentControlButton, {
  MessageType,
} from '../../components/experiment-control-button';
import Chart from '../../components/chart';
import Table from '../../components/table';

import './style.scss';

const ExperimentDetailsPage = () => {
  const [messages, setMessages] = useState<MessageType>({});

  const clearMessages = () => {
    setMessages({});
  };

  const handleNewMessage = (message: MessageType) => {
    setMessages((prevMessage) => ({
      ...prevMessage,
      [message.sensorId]: [...(prevMessage[message.sensorId] || []), message],
    }));
  };

  return (
    <div className="experiment-details">
      <ExperimentControlButton
        onNewMessage={handleNewMessage}
        onExperimentStarted={clearMessages}
      />
      <Chart messages={Object.values(messages)} />
      <Table
        messages={Object.values(messages)}
        sensors={Object.keys(messages)}
      />
    </div>
  );
};

export default ExperimentDetailsPage;
