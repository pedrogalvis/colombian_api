import PropTypes from 'prop-types';

import { Table } from '../../../components/Table/Table';

const airportsColumns = ['Nº', 'Departamento', 'Ciudad', 'Total'];
const airportsRows = (airports) => {
  return airports.map((airport, i) => [
    i + 1,
    airport.department,
    airport.city,
    airport.total,
  ]);
};

export function GroupedAirportsTable1({ airports }) {
  return <Table columns={airportsColumns} rows={airportsRows(airports)} />;
}

GroupedAirportsTable1.propTypes = {
  airports: PropTypes.array.isRequired,
};
