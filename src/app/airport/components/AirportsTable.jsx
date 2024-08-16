import PropTypes from 'prop-types';
import { v4 as UUID } from 'uuid';

import { Chip } from '../../../components/Chip/Chip';
import { Table } from '../../../components/Table/Table';

const airportsColumns = [
  'Nº',
  'ID',
  'Nombre',
  'Ciudad',
  'Departamento',
  'Tipo',
];
const airportsRows = (airports) => {
  const typeColors = {
    internacional: 'green',
    nacional: 'yellow',
    militar: 'red',
  };

  return airports
    .sort((a, b) => a.id - b.id)
    .map((airport, i) => [
      i + 1,
      airport.iataCode,
      airport.name,
      airport.city.name,
      airport.department.name,
      <Chip
        key={UUID()}
        text={airport.type}
        color={typeColors[airport.type.toLowerCase()]}
      />,
    ]);
};

export function AirportsTable({ airports }) {
  return (
    <Table
      columns={airportsColumns}
      rows={airportsRows(airports)}
      title='Aeropuertos'
    />
  );
}

AirportsTable.propTypes = {
  airports: PropTypes.array.isRequired,
};
