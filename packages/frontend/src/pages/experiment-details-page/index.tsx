import { useState } from 'react';

import ExperimentControlButton, {
  MessageType,
} from '../../components/experiment-control-button';
import Chart from '../../components/chart';
import Table from '../../components/table';
import { Log } from '../../components/log/log';

import './style.scss';

const ExperimentDetailsPage = () => {
  const [messages, setMessages] = useState<{ [sensor: string]: MessageType[] }>(
    {},
  );
  const [log, setLog] = useState<MessageType[]>([]);

  const clearMessages = () => {
    setMessages({});
    setLog([]);
  };

  const handleNewMessage = (message: MessageType) => {
    setMessages((prevMessage) => ({
      ...prevMessage,
      [message.sensorId]: [...(prevMessage[message.sensorId] || []), message],
    }));
    setLog((prevLog) => [...prevLog, message]);
  };

  return (
    <div className="experiment-details">
      <div className="experiment-details__start">
        <ExperimentControlButton
          onNewMessage={handleNewMessage}
          onExperimentStarted={clearMessages}
        />
      </div>
      <div className="experiment-details__data">
        <div className="experiment-details__chart">
          <Chart messages={Object.values(messages)} />
        </div>
        <div className="experiment-details__table">
          <Table
            messages={Object.values(messages)}
            sensors={Object.keys(messages)}
          />
        </div>
      </div>
      <div>
        <Log log={log}></Log>
      </div>
    </div>
  );
};

export default ExperimentDetailsPage;
