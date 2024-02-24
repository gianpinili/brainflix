export const convertTimestamp = (props) => {
  const defaultDate = new Date(props); // Convert string date to Date object
  const dateNow = new Date(); // Current date and time
  const timeAgoMillis = dateNow - defaultDate; // Difference in milliseconds

  // Dynamic timestamp calculation for default comments as well as new comments
  let timeAgoString = "";
  //if the difference is less than 1 minute
  if (timeAgoMillis < 60000) {
    timeAgoString = "just now";
    //if the difference is less than 1 hour
  } else if (timeAgoMillis < 3600000) {
    timeAgoString = Math.floor(timeAgoMillis / 60000) + " minutes ago";
    //if the difference is less than 1 day
  } else if (timeAgoMillis < 86400000) {
    timeAgoString = Math.floor(timeAgoMillis / 3600000) + " hours ago";
    //if the difference is less than 1 month
  } else if (timeAgoMillis < 2592000000) {
    timeAgoString = Math.floor(timeAgoMillis / 86400000) + " days ago";
    //if the difference is less than 1 year
  } else if (timeAgoMillis < 31536000000) {
    timeAgoString = Math.floor(timeAgoMillis / 2592000000) + " months ago";
    //if the difference is greater than 1 year
  } else {
    timeAgoString = Math.floor(timeAgoMillis / 31536000000) + " years ago";
  }

  return timeAgoString;
};
