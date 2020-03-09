// calculate seconds elapsed
const calculateTimeElapsed = (currentTime: any, startTime: any) => {
  const millisecondsElapsed = currentTime - startTime; // difference in milliseconds
  const secondsElapsed = Math.floor(millisecondsElapsed / 1000); // convert milliseconds to seconds
  return secondsElapsed; // return time elapsed in seconds
};

const displayTimeElapsed = (from: Date) => {
  const currentDate = new Date(); // get current date

  const secondsInYear = 31557600; // declare seconds in a year
  const secondsInDay = 86400; // declare seconds in a day
  const secondsInHour = 3600; // declare seconds in an hour
  const secondsInMinute = 60; // declare seconds in a minute

  const secondsElapsed = calculateTimeElapsed(currentDate, from); // return difference in the unit of seconds

  const modFromYear = secondsElapsed % secondsInYear; // leftover years
  const modFromDay = modFromYear % secondsInDay; // leftover days
  const modFromHour = modFromDay % secondsInHour; // leftover minute
  const modFromMinute = modFromHour % secondsInMinute; // leftover seconds

  const years = Math.floor(secondsElapsed / secondsInYear); // years
  const days = Math.floor(modFromYear / secondsInDay); // days
  const hours = Math.floor(modFromDay / secondsInHour); // hours
  const minutes = Math.floor(modFromHour / secondsInMinute); // minutes
  const seconds = modFromMinute; // seconds

  const age = `${years}yr ${days}d ${hours}hr ${minutes}m ${seconds}s`;
  return age;
};

const getAge = (from: Date) => {
  return displayTimeElapsed(from);
};

export { getAge };
