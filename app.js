// 11 hours in milliseconds
const ELEVEN_HOURS_IN_MS = 11 * 60 * 60 * 1000;
const STORAGE_KEY = "website_restoration_target";

// Check if a target time is already stored in localStorage
let targetTime = localStorage.getItem(STORAGE_KEY);

if (!targetTime) {
  // If not, set a new target time 11 hours from now and save it
  targetTime = new Date().getTime() + ELEVEN_HOURS_IN_MS;
  localStorage.setItem(STORAGE_KEY, targetTime);
} else {
  targetTime = parseInt(targetTime, 10);
}

const countdownElement = document.getElementById("countdown");

function updateTimer() {
  const now = new Date().getTime();
  const timeRemaining = targetTime - now;

  if (timeRemaining <= 0) {
    clearInterval(timerInterval);
    countdownElement.textContent = "Restoration Complete!";
    // Optional: Clear storage once expired so it resets if needed later
    localStorage.removeItem(STORAGE_KEY);
    return;
  }

  // Time calculations for hours, minutes, and seconds
  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Pad numbers with leading zeros
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  // Display the result
  countdownElement.textContent = `${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s`;
}

// Initial call to avoid a 1-second delay on load
updateTimer();

// Update the countdown every 1 second
const timerInterval = setInterval(updateTimer, 1000);