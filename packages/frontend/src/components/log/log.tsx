import { MessageType } from '../experiment-control-button';
import './style.scss';

export type LogProps = {
  log: MessageType[];
};

export const Log: React.FC<LogProps> = ({ log }) => {
  return (
    <div className="log">
      <h6>Лог сообщений</h6>
      {(log || []).map((logItem) => {
        return <div className="log__item">{JSON.stringify(logItem)}</div>;
      })}
    </div>
  );
};
