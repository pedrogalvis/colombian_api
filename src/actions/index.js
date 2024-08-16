const API_URL = 'https://api-colombia.com/api/v1';

export const getPresidents = async () => {
  const prev = new Date().getTime();
  const res = await fetch(`${API_URL}/President`);
  const next = new Date().getTime();
  const data = await res.json();

  return {
    data,
    time: new Date(next - prev).getMilliseconds(),
  };
};

export const getAirports = async () => {
  const prev = new Date().getTime();
  const res = await fetch(`${API_URL}/Airport`);
  const next = new Date().getTime();
  const data = await res.json();

  return {
    data,
    time: new Date(next - prev).getMilliseconds(),
  };
};

export const getTouristicAttractions = async () => {
  const prev = new Date().getTime();
  const res = await fetch(`${API_URL}/TouristicAttraction`);
  const next = new Date().getTime();
  const data = await res.json();

  return {
    data,
    time: new Date(next - prev).getMilliseconds(),
  };
};

export const getRegions = async () => {
  const prev = new Date().getTime();
  const res = await fetch(`${API_URL}/Region`);
  const next = new Date().getTime();
  const data = await res.json();

  return {
    data,
    time: new Date(next - prev).getMilliseconds(),
  };
};

export const getDepartments = async () => {
  const prev = new Date().getTime();
  const res = await fetch(`${API_URL}/Department`);
  const next = new Date().getTime();
  const data = await res.json();

  return {
    data,
    time: new Date(next - prev).getMilliseconds(),
  };
};
