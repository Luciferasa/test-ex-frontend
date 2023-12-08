import type { MessageType } from '../experiment-control-button';
import { DownloadCsvButton } from '../download-csv-button';

import './style.scss';

export type TableProps = {
  messages: MessageType[][];
  sensors: string[];
};

const Table: React.FC<TableProps> = ({ messages, sensors }) => {
  const processedData = {};

  for (const messageColumn of messages) {
    for (const message: MessageType of messageColumn) {
      const nearestTimestamp = Math.round(message.timestamp / 100) * 100;

      processedData[nearestTimestamp] = {
        ...processedData[nearestTimestamp],
        [message.sensorId]: message.value,
      };
    }
  }

  if (!Object.keys(processedData).length) {
    return <div>Здесь будут табличные данные...</div>;
  }

  return (
    <div>
      <DownloadCsvButton
        data={processedData}
        sensors={sensors}
      ></DownloadCsvButton>

      <div className="table-wrapper">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Время, мс</th>
              {sensors.map((sensor) => (
                <th>{sensor}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(processedData).map(([time, row]) => (
              <tr key={time}>
                <td>{time}</td>
                {sensors.map((sensor) => (
                  <td>{row[sensor]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
