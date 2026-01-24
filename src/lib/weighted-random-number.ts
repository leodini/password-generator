export const weightedRandomNumber = <T>(arr: T[], weights: number[]): T => {
  const cumulativeWeights = [];
  let sum = 0;

  for (let weight of weights) {
    sum += weight;
    cumulativeWeights.push(sum);
  }

  const roll = Math.random() * cumulativeWeights[cumulativeWeights.length - 1];

  for (let i = 0; i < cumulativeWeights.length; i++) {
    const lowerBound = i === 0 ? 0 : cumulativeWeights[i - 1];
    const upperBound = cumulativeWeights[i];

    if (roll >= lowerBound && roll < upperBound) {
      return arr[i];
    }
  }

  return arr[arr.length - 1];
};
