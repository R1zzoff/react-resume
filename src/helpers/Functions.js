export const getRandomFloat = (min, max) =>
{
  return (Math.random() * (2 - 1) + 1).toFixed(1);
}

export const getRandomInteger = (min, max) =>
{
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export const getRandomBool = () =>
{
  return Math.random() < 0.5;
}