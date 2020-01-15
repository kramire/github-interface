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

// save the state in localStorage in order to persist the data
function saveStateLocally(state) {
  const stringifiedState = JSON.stringify(state);
  localStorage.setItem('state', stringifiedState);
}

// load the state from localStorage
function loadLocalState() {
  try {
    const previousState = localStorage.getItem('state') || undefined;
    return JSON.parse(previousState);
  } 
  catch (err) {
    return undefined;
  }
}

// capitalize a string
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1,);
}

module.exports = {
  formatEuropeanDate,
  calcHowLongAgo,
  saveStateLocally,
  loadLocalState,
  capitalize,
};
