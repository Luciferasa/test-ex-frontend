import type { MessageType } from '../experiment-control-button';
import { DownloadCsvButton } from '../download-csv-button';

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

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Время эксперимента</th>
            {sensors.map((sensor) => (
              <th>Сенсор {sensor}</th>
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

      <DownloadCsvButton
        data={processedData}
        sensors={sensors}
      ></DownloadCsvButton>
    </div>
  );
};

export default Table;
