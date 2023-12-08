import { CSVLink } from 'react-csv';

export const DownloadCsvButton = ({ sensors, data }) => {
  const firstRow = ['Время', ...sensors.map((sensor) => `Сенсор ${sensor}`)];

  const csvData = [
    firstRow,
    ...Object.entries(data).map(([time, sensorData]) => {
      return [time, ...sensors.map((sensor) => sensorData[sensor] || '')];
    }),
  ];

  return <CSVLink data={csvData}>Скачать CSV</CSVLink>;
};
