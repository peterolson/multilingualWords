const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

export const updateScore = (points: number, previousScore: number = 0, previousTimestamp: Date = new Date()) => {
  if (!(points >= 0 && points <= 1)) {
    throw new Error(`'points' must be in the interval [0,1].`);
  }
  const timeStampDelta = +new Date() - +previousTimestamp;
  const days = timeStampDelta / MILLISECONDS_PER_DAY;
  const multiplier = (points - 0.5) * 2;
  if (multiplier >= 0) {
    const frequencyBonus = Math.max(4 - 2 * days, 1);
    const staticBonus = 0.01;
    const maxIncrease = Math.max(1, previousScore);
    return previousScore + Math.min(staticBonus + days * multiplier * frequencyBonus, maxIncrease);
  }
  if (previousScore <= 0) return 0;
  return Math.floor(previousScore / 4);
};
