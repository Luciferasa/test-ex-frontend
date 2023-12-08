import { MessageType } from '../experiment-control-button';
import { useEffect, useRef } from 'react';

import * as echarts from 'echarts';

import './style.scss';

export type ChartProps = {
  messages: MessageType[][];
};

function initChart(chartDom) {
  const myChart = echarts.init(chartDom);

  const option = {
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        params = params[0];
        return params.name + ' : ' + Math.floor(params.value[1] * 100) / 100;
      },
      axisPointer: {
        animation: false,
      },
    },
    xAxis: {
      type: 'value',
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '0.1'],
      splitLine: {
        show: true,
      },
    },
    series: [
      {
        type: 'line',
        showSymbol: true,
        data: [],
      },
      {
        type: 'line',
        showSymbol: true,
        data: [],
      },
    ],
  };
  myChart.setOption(option);

  return myChart;
}

export const Chart: React.FC<ChartProps> = ({ messages }) => {
  const chart = useRef(null);
  const myChart = useRef(null);

  useEffect(() => {
    if (!chart.current) {
      return;
    }

    myChart.current = initChart(chart.current);
  }, [chart.current]);

  useEffect(() => {
    if (!myChart.current) {
      return;
    }

    myChart.current.setOption({
      series: [
        {
          data: (messages[0] || []).map(({ value, timestamp, sensorId }) => {
            return {
              name: sensorId,
              value: [timestamp, value],
            };
          }),
        },
        {
          data: (messages[1] || []).map(({ value, timestamp, sensorId }) => {
            return {
              name: sensorId,
              value: [timestamp, value],
            };
          }),
        },
      ],
    });
  }, [messages]);

  return <div ref={chart} className="chart"></div>;
};

export default Chart;
