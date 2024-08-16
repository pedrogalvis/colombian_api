import PropTypes from 'prop-types';

import { Table } from '../../../components/Table/Table';

const partysColumns = ['Nº', 'Partido', 'Presidentes Electos'];
const partysRows = (partys) => {
  return partys.map((party, i) => [i + 1, party.politicalParty, party.total]);
};

export function PoliticalPartiesTable({ parties }) {
  return <Table columns={partysColumns} rows={partysRows(parties)} />;
}

PoliticalPartiesTable.propTypes = {
  parties: PropTypes.array.isRequired,
};
