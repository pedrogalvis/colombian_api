import { useContext, useMemo } from 'react';

import { ApiColombiaContext } from '../../../context/ApiColombia';
import { CardStats } from '../../../components/CardStats/CardStats';
import { AirportsTable } from '../components/AirportsTable';
import { GroupedAirportsTable1 } from '../components/GroupedAirportsTable1';
import { GroupedAirportsTable2 } from '../components/GroupedAirportsTable2';
import { AirportsTypeChart } from '../components/AirportsTypeChart';

export function Airport() {
  const {
    airports,
    groupAirportsByDepartmentCity,
    groupAirportsByRegionDepartmentCityType,
    getFinalStructure,
    timeAirports
  } = useContext(ApiColombiaContext);

  const groupedAirports1 = useMemo(
    () => groupAirportsByDepartmentCity(),
    [groupAirportsByDepartmentCity]
  );

  const groupedAirports2 = useMemo(
    () => groupAirportsByRegionDepartmentCityType(),
    [groupAirportsByRegionDepartmentCityType]
  );

  const finalStructure = useMemo(
    () => getFinalStructure(),
    [getFinalStructure]
  );

  return (
    <>
      <div className='stats-container'>
        <CardStats title='Cantidad de aeropuertos' stats={airports.length} />
        <CardStats title='Tiempo de respuesta' stats={`${timeAirports}ms`} />
      </div>
      <div className='table-data'>
        <AirportsTypeChart airports={groupedAirports2} />
        <AirportsTable airports={airports} />
      </div>
      <div className='table-data'>
        <GroupedAirportsTable1 airports={groupedAirports1} />
        <GroupedAirportsTable2 airports={finalStructure} />
      </div>
    </>
  );
}
