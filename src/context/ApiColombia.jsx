import { createContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as actions from '../actions';

export const ApiColombiaContext = createContext();

export const ApiColombiaProvider = ({ children }) => {
  const [presidents, setPresidents] = useState([]);
  const [airports, setAirports] = useState([]);
  const [touristicAttractions, setTouristicAttractions] = useState([]);

  const [regions, setRegions] = useState([]);
  const [departments, setDepartments] = useState([]);

  const [timePresidents, setTimePresidents] = useState(0);
  const [timeAirports, setTimeAirports] = useState(0);
  const [timeTouristicAttractions, setTimeTouristicAttractions] = useState(0);

  const groupPresidentsByPoliticalParty = useCallback(() => {
    const groups = {};
    presidents.forEach((president) => {
      const { politicalParty } = president;

      const group = politicalParty.toLowerCase();
      if (groups[group] === undefined) {
        groups[group] = [];
      }

      groups[group].push(president);
    });

    return Object.keys(groups)
      .map((group) => ({
        politicalParty: group,
        total: groups[group].length,
      }))
      .sort((a, b) => b.total - a.total);
  }, [presidents]);

  const groupTouristicAttractionsByDepartmentCity = useCallback(() => {
    const groups = {};
    touristicAttractions.forEach((touristicAttractions) => {
      const { city } = touristicAttractions;
      const { name: cityName, departmentId: department } = city;

      const group = `${department}-${cityName.toLowerCase()}`;
      if (groups[group] === undefined) {
        groups[group] = [];
      }

      groups[group].push(touristicAttractions);
    });

    return Object.keys(groups)
      .map((group) => {
        const values = group.split('-');
        const department = departments.find(
          (department) => department.id === parseInt(values[0])
        );

        return {
          department: department.name.toLowerCase(),
          city: values[1],
          total: groups[group].length,
        };
      })
      .sort((a, b) => b.total - a.total);
  }, [touristicAttractions, departments]);

  const groupAirportsByDepartmentCity = useCallback(() => {
    const groups = {};
    airports.forEach((airport) => {
      const { city, department } = airport;
      const { name: departmentName } = department;
      const { name: cityName } = city;

      const group = `${departmentName.toLowerCase()}-${cityName.toLowerCase()}`;
      if (groups[group] === undefined) {
        groups[group] = [];
      }

      groups[group].push(airport);
    });

    return Object.keys(groups)
      .map((group) => {
        const values = group.split('-');
        return {
          department: values[0],
          city: values[1],
          total: groups[group].length,
        };
      })
      .sort((a, b) => b.total - a.total);
  }, [airports]);

  const groupAirportsByRegionDepartmentCityType = useCallback(() => {
    const groups = {};
    airports.forEach((airport) => {
      const { city, department, type } = airport;
      const { regionId: region, name: departmentName } = department;
      const { name: cityName } = city;

      const group = `${region}-${departmentName.toLowerCase()}-${cityName.toLowerCase()}-${type.toLowerCase()}`;
      if (groups[group] === undefined) {
        groups[group] = [];
      }

      groups[group].push(airport);
    });

    return Object.keys(groups)
      .map((group) => {
        const values = group.split('-');
        const region = regions.find(
          (region) => region.id === parseInt(values[0])
        );
        return {
          region: region.name.toLowerCase(),
          department: values[1],
          city: values[2],
          type: values[3],
          total: groups[group].length,
        };
      })
      .sort((a, b) => b.total - a.total);
  }, [airports, regions]);

  const getFinalStructure = useCallback(() => {
    const finalStructure = { region: {} };
    const grouped = groupAirportsByRegionDepartmentCityType();

    grouped.forEach((airport) => {
      finalStructure.region[airport.region] = finalStructure.region[
        airport.region
      ] ?? { department: {} };

      finalStructure.region[airport.region].department[airport.department] =
        finalStructure.region[airport.region].department[
          airport.department
        ] ?? { city: {} };

      finalStructure.region[airport.region].department[airport.department].city[
        airport.city
      ] = finalStructure.region[airport.region].department[airport.department]
        .city[airport.city] ?? { type: {} };

      finalStructure.region[airport.region].department[airport.department].city[
        airport.city
      ].type[airport.type] =
        finalStructure.region[airport.region].department[airport.department]
          .city[airport.city].type[airport.type] ?? 0;

      finalStructure.region[airport.region].department[airport.department].city[
        airport.city
      ].type[airport.type]++;
    });

    return finalStructure;
  }, [groupAirportsByRegionDepartmentCityType]);

  useEffect(() => {
    actions.getPresidents().then((res) => {
      setPresidents(res.data);
      setTimePresidents(res.time);
    });
    actions.getAirports().then((res) => {
      setAirports(res.data);
      setTimeAirports(res.time);
    });

    actions.getTouristicAttractions().then((res) => {
      setTouristicAttractions(res.data);
      setTimeTouristicAttractions(res.time);
    });

    actions.getRegions().then((res) => {
      setRegions(res.data);
    });
    actions.getDepartments().then((res) => {
      setDepartments(res.data);
    });
  }, []);

  return (
    <ApiColombiaContext.Provider
      value={{
        presidents,
        airports,
        touristicAttractions,

        groupPresidentsByPoliticalParty,
        groupTouristicAttractionsByDepartmentCity,
        groupAirportsByDepartmentCity,
        groupAirportsByRegionDepartmentCityType,
        getFinalStructure,

        timePresidents,
        timeAirports,
        timeTouristicAttractions,
      }}
    >
      {children}
    </ApiColombiaContext.Provider>
  );
};

ApiColombiaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
