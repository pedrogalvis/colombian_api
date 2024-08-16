export const colorsChart = [
  '#012A4A',
  '#013A63',
  '#01497C',
  '#014F86',
  '#2A6F97',
  '#2C7DA0',
  '#468FAF',
  '#61A5C2',
  '#89C2D9',
  '#A9D6E5',
];

export const colorsChartGreen = [
  '#081C15',
  '#1B4332',
  '#2D6A4F',
  '#40916C',
  '#52B788',
  '#74C69D',
  '#95D5B2',
  '#B7E4C7',
  '#D8F3DC',
];

export function capitalize(text) {
  return text.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  );
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
