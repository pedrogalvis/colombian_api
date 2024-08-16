import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { v4 as UUID } from 'uuid';
import Chart from 'react-apexcharts';

import * as utils from '../../../utils';

export function PoliticalPartiesChart({ parties }) {
  const series = useMemo(() => parties.map((party) => party.total), [parties]);
  const labels = useMemo(
    () => parties.map((party) => utils.capitalize(party.politicalParty)),
    [parties]
  );

  return (
    <div className='card'>
      <h1 className='title'>Presidentes por Partido</h1>
      <div className='parties-chart'>
        <div className='chart'>
          <Chart
            options={{
              colors: utils.colorsChart,
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
            width='350'
          />
        </div>
        <div className='parties-legend'>
          {labels.map((label, i) => (
            <div key={UUID()} className='legend'>
              <span
                className='circle-color'
                style={{ backgroundColor: utils.colorsChart[i] }}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

PoliticalPartiesChart.propTypes = {
  parties: PropTypes.array.isRequired,
};
