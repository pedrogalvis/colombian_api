import { useContext, useMemo } from 'react';

import { ApiColombiaContext } from '../../../context/ApiColombia';
import { CardStats } from '../../../components/CardStats/CardStats';
import { PresidentsTable } from '../components/PresidentsTable';
import { PoliticalPartiesTable } from '../components/PoliticalPartiesTable';
import { PoliticalPartiesChart } from '../components/PoliticalPartiesChart';

import '../css/index.css';

export function President() {
  const { presidents, groupPresidentsByPoliticalParty, timePresidents } =
    useContext(ApiColombiaContext);

  const parties = useMemo(
    () => groupPresidentsByPoliticalParty(),
    [groupPresidentsByPoliticalParty]
  );

  return (
    <>
      <div className='stats-container'>
        <CardStats title='Cantidad de presidentes' stats={presidents.length} />
        <CardStats title='Tiempo de respuesta' stats={`${timePresidents}ms`} />
      </div>
      <div className='table-data'>
        <PresidentsTable presidents={presidents} />
      </div>
      <div className='table-data'>
        <PoliticalPartiesTable parties={parties} />
        <PoliticalPartiesChart parties={parties} />
      </div>
    </>
  );
}
