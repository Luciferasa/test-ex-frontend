import { CSVLink } from 'react-csv';

export type DownloadCsvButtonProps = {
  data: {
    [timestamp: string]: {
      [sensorId: string]: number;
    }
  };
  sensors: string[];
};

export const DownloadCsvButton: React.FC<DownloadCsvButtonProps> = ({ sensors, data }) => {
  const firstRow = ['Время', ...sensors.map((sensor) => `Сенсор ${sensor}`)];

  const csvData = [
    firstRow,
    ...Object.entries(data).map(([time, sensorData]) => {
      return [time, ...sensors.map((sensor) => sensorData[sensor] || '')];
    }),
  ];

  return <CSVLink data={csvData}>Скачать CSV</CSVLink>;
};
