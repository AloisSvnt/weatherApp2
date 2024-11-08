export const getCurrentData = (forecast: { time: string; data: any }[]) => {
  const currentTime = new Date();

  return forecast.reduce((closest, entry) => {
    const entryTime = new Date(entry.time);
    return Math.abs(entryTime.getTime() - currentTime.getTime()) <
      Math.abs(new Date(closest.time).getTime() - currentTime.getTime())
      ? entry
      : closest;
  });
};