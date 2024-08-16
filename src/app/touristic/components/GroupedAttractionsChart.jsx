import { useMemo } from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';

import * as utils from '../../../utils';

export function GroupedAttractionsChart({ attractions }) {
  const series = useMemo(
    () => attractions.map((att) => att.total),
    [attractions]
  );
  const labels = useMemo(
    () => attractions.map((att) => utils.capitalize(att.city)),
    [attractions]
  );

  return (
    <div className='card'>
      <h1 className='title'>Atracciones por Ciudad</h1>
      <div className='parties-chart'>
        <Chart
          options={{
            dataLabels: {
              enabled: false,
            },
            plotOptions: {
              bar: {
                distributed: true,
                horizontal: true,
                barHeight: '100%',
                borderRadius: 5,
                borderRadiusApplication: 'end',
                dataLabels: {
                  total: {
                    style: {
                      fontFamily: 'Poppins',
                    },
                  },
                },
              },
            },
            legend: {
              show: false,
            },
            labels: labels,
            series: [{ name: 'Atracciones', data: series }],
          }}
          series={[{ name: 'Atracciones', data: series }]}
          type='bar'
          width='500'
          height='350'
        />
      </div>
    </div>
  );
}

GroupedAttractionsChart.propTypes = {
  attractions: PropTypes.array.isRequired,
};
