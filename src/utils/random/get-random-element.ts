const getRandomElement = <T>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];

  return randomElement;
};

export { getRandomElement };
