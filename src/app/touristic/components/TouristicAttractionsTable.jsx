import PropTypes from 'prop-types';
import { v4 as UUID } from 'uuid';

import { Chip } from '../../../components/Chip/Chip';
import { Table } from '../../../components/Table/Table';
import { CollapseText } from '../../../components/CollapseText/CollapseText';
import * as utils from '../../../utils';

const touristicAttractionsColumns = [
  'Nº',
  'Nombre',
  'Descripción',
  'Ciudad',
  'Imágenes',
];
const touristicAttractionsRows = (touristicAttractions) => {
  const colors = ['purple', 'red', 'green', 'yellow'];
  return touristicAttractions
    .sort((a, b) => a.id - b.id)
    .map((ta, i) => [
      i + 1,
      ta.name,
      <CollapseText key={UUID()} text={ta.description} />,
      <Chip
        key={UUID()}
        text={ta.city.name}
        color={colors[utils.getRandomInt(colors.length)]}
      />,
      <img
        key={UUID()}
        src={ta.images.at(0)}
        alt={ta.name}
        width='175px'
        style={{ display: 'block', borderRadius: '10px', margin: 'auto' }}
      />,
    ]);
};

export function TouristicAttractionsTable({ touristicAttractions }) {
  return (
    <Table
      columns={touristicAttractionsColumns}
      rows={touristicAttractionsRows(touristicAttractions)}
      title='Atracciones Turísticas'
    />
  );
}

TouristicAttractionsTable.propTypes = {
  touristicAttractions: PropTypes.array.isRequired,
};
