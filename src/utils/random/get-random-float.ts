const getRandomFloat = (min: number, max: number) => {
  const randomNumber = Math.random() * (max - min) + min;

  return randomNumber;
};

export { getRandomFloat };
