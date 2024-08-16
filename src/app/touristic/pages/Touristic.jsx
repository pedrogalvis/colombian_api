import { useContext, useMemo } from 'react';

import { ApiColombiaContext } from '../../../context/ApiColombia';
import { CardStats } from '../../../components/CardStats/CardStats';
import { TouristicAttractionsTable } from '../components/TouristicAttractionsTable';
import { GroupedAttractionsTable } from '../components/GroupedAttractionsTable';
import { GroupedAttractionsChart } from '../components/GroupedAttractionsChart';

export function Touristic() {
  const { touristicAttractions, groupTouristicAttractionsByDepartmentCity, timeTouristicAttractions } =
    useContext(ApiColombiaContext);

  const groupedAttractions = useMemo(
    () => groupTouristicAttractionsByDepartmentCity(),
    [groupTouristicAttractionsByDepartmentCity]
  );

  return (
    <>
      <div className='stats-container'>
        <CardStats
          title='Cantidad de atracciones'
          stats={touristicAttractions.length}
        />
        <CardStats title='Tiempo de respuesta' stats={`${timeTouristicAttractions}ms`} />
      </div>
      <div className='table-data'>
        <TouristicAttractionsTable
          touristicAttractions={touristicAttractions}
        />
      </div>
      <div className='table-data'>
        <GroupedAttractionsChart attractions={groupedAttractions} />
        <GroupedAttractionsTable attractions={groupedAttractions} />
      </div>
    </>
  );
}
