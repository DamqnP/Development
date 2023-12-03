function updateCurrentTime() {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const currentTimeString = `${hours}:${minutes}:${seconds}.`;
    const currentTimeDisplay = document.getElementById('currentTimeDisplay');
    currentTimeDisplay.textContent = currentTimeString;
  }
  setInterval(updateCurrentTime, 1000);
  updateCurrentTime();