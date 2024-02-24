export const convertTimestamp = (timestamp) => {
  const currentTimestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
  const elapsedSeconds = currentTimestamp - Math.floor(timestamp / 1000); // Time difference in seconds

  // Convert elapsed seconds to a human-readable format
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
  };

  // Create an array of interval names
  const intervalKeys = Object.keys(intervals); // ['year', 'month', 'week', 'day']

  // Loop through the intervals
  for (let i = 0; i < intervalKeys.length; i++) {
    const intervalName = intervalKeys[i];
    const intervalSeconds = intervals[intervalName];

    const count = Math.floor(elapsedSeconds / intervalSeconds);
    if (count >= 1) {
      return `${count} ${intervalName}${count !== 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
};
