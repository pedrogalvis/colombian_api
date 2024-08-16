import PropTypes from 'prop-types';
import { v4 as UUID } from 'uuid';

import { Chip } from '../../../components/Chip/Chip';
import { Table } from '../../../components/Table/Table';
import * as utils from '../../../utils';

const airportsColumns = [
  'Nº',
  'Region',
  'Departamento',
  'Ciudad',
  'Tipo',
  'Cantidad',
];
const airportsRows = (airports) => {
  const typeColors = {
    internacional: 'green',
    nacional: 'yellow',
    militar: 'red',
  };

  let i = 1;
  const rows = [];
  Object.keys(airports.region).forEach((region) => {
    Object.keys(airports.region[region].department).forEach((department) => {
      Object.keys(airports.region[region].department[department].city).forEach(
        (city) => {
          Object.keys(
            airports.region[region].department[department].city[city].type
          ).forEach((type) => {
            rows.push([
              i,
              utils.capitalize(region),
              utils.capitalize(department),
              utils.capitalize(city),
              <Chip
                key={UUID()}
                text={type}
                color={typeColors[type.toLowerCase()]}
              />,
              airports.region[region].department[department].city[city].type[
                type
              ],
            ]);

            i++;
          });
        }
      );
    });
  });

  return rows;
};

export function GroupedAirportsTable2({ airports }) {
  return <Table columns={airportsColumns} rows={airportsRows(airports)} />;
}

GroupedAirportsTable2.propTypes = {
  airports: PropTypes.object.isRequired,
};
