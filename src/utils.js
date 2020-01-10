// given a date as a string, return it with the format dd/mm/yyyy
function formatEuropeanDate(dateString) {
  const date = new Date(dateString);
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}

// given a historical date, return colloquially how long "ago"
function calcHowLongAgo(dateString) {
  const date = new Date(dateString);
  const now = Date.now();
  const hoursAgo = Math.floor(now - date) / 36e5;
  const daysAgo = Math.floor(hoursAgo / 24);
  const monthsAgo = Math.floor(daysAgo / 30);

  if (monthsAgo > 1) return `${monthsAgo} months ago`;
  if (monthsAgo === 1) return `1 month ago`;
  if (daysAgo > 1) return `${daysAgo} days ago`;
  if (daysAgo === 1) return `1 day ago`;
  if (hoursAgo > 1) return `${hoursAgo} hours ago`;
  if (hoursAgo === 1) return `1 hour ago`;
  return `Under an hour ago.`;
}

module.exports = {
  formatEuropeanDate,
  calcHowLongAgo,
};
