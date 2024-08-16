import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { v4 as UUID } from 'uuid';
import Chart from 'react-apexcharts';

import * as utils from '../../../utils';

export function AirportsTypeChart({ airports }) {
  const labels = useMemo(
    () =>
      Array.from(
        new Set(airports.map((airport) => utils.capitalize(airport.type)))
      ),
    [airports]
  );
  const series = useMemo(
    () =>
      labels.map(
        (label) =>
          airports.filter((airport) => utils.capitalize(airport.type) === label)
            .length
      ),
    [labels, airports]
  );

  return (
    <div className='card'>
      <h1 className='title'>Tipos de Aeropuertos</h1>
      <div className='parties-chart'>
        <Chart
          options={{
            colors: utils.colorsChartGreen,
            dataLabels: {
              enabled: false,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      show: true,
                      fontFamily: 'Poppins',
                      offsetY: -15,
                    },
                    value: {
                      show: true,
                      fontWeight: 700,
                      fontSize: '2.3rem',
                      fontFamily: 'Poppins',
                      offsetY: 15,
                    },
                    total: {
                      show: true,
                      color: '#637381',
                      fontWeight: 500,
                      fontFamily: 'Poppins',
                      fontSize: '1rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: false,
            },
            labels: labels,
            series: series,
          }}
          series={series}
          type='donut'
          width='400'
        />
        <div className='parties-legend'>
          {labels.map((label, i) => (
            <div key={UUID()} className='legend'>
              <span
                className='circle-color'
                style={{ backgroundColor: utils.colorsChartGreen[i] }}
              />
              <span>{utils.capitalize(label)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

AirportsTypeChart.propTypes = {
  airports: PropTypes.array.isRequired,
};
