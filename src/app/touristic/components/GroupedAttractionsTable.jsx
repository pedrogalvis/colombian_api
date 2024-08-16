import PropTypes from 'prop-types';

import { Table } from '../../../components/Table/Table';
import * as utils from '../../../utils';

const attractionsColumns = ['Nº', 'Departamento', 'Ciudad', 'Atracciones'];
const attractionsRows = (attractions) => {
  return attractions.map((att, i) => [
    i + 1,
    utils.capitalize(att.department),
    utils.capitalize(att.city),
    att.total,
  ]);
};

export function GroupedAttractionsTable({ attractions }) {
  return (
    <Table columns={attractionsColumns} rows={attractionsRows(attractions)} />
  );
}

GroupedAttractionsTable.propTypes = {
  attractions: PropTypes.array.isRequired,
};
