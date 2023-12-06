import { useState } from 'react';

import ExperimentControlButton, {
  messageType,
} from '../../components/experiment-control-button';

import './style.scss';

const ExperimentDetailsPage = () => {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (message: messageType) => {
    setMessages((prevMessage) => [...prevMessage, message]);
  };

  return <ExperimentControlButton onNewMessage={handleNewMessage} />;
};

export default ExperimentDetailsPage;
