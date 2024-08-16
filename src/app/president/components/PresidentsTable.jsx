import PropTypes from 'prop-types';
import { v4 as UUID } from 'uuid';

import { Chip } from '../../../components/Chip/Chip';
import { Avatar } from '../../../components/Avatar/Avatar';
import { Table } from '../../../components/Table/Table';
import { CollapseText } from '../../../components/CollapseText/CollapseText';

const presidentsColumns = [
  'Nº',
  'Nombre',
  'Descripción',
  'Inicio de Periodo',
  'Fin de Periodo',
  'Partido',
];
const presidentsRows = (presidents) => {
  const partyColors = {
    'partido conservador': 'purple',
    'partido liberal': 'red',
    'partido nacional': 'purple',
    militar: 'green',
    'unión republicana (conservador)': 'purple',
    'partido primero colombia': 'yellow',
    'partido de la u': 'green',
    'partido centro democratico': 'purple',
    'colombia humana': 'yellow',
  };

  return presidents
    .sort((a, b) => a.id - b.id)
    .map((president, i) => [
      i + 1,
      <Avatar
        key={UUID()}
        image={president.image}
        name={president.name}
        desc={president.lastName}
      />,
      <CollapseText key={UUID()} text={president.description} />,
      president.startPeriodDate,
      president.endPeriodDate ?? 'Actualidad',
      <Chip
        key={UUID()}
        text={president.politicalParty}
        color={partyColors[president.politicalParty.toLowerCase()]}
      />,
    ]);
};

export function PresidentsTable({ presidents }) {
  return (
    <Table
      columns={presidentsColumns}
      rows={presidentsRows(presidents)}
      title='Presidentes'
    />
  );
}

PresidentsTable.propTypes = {
  presidents: PropTypes.array.isRequired,
};
