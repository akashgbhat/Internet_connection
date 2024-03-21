function updateStatus() {
  var statusElement = document.getElementById('status');
  if (navigator.onLine) {
    statusElement.textContent = "You are online!";
    statusElement.classList.remove('offline');
    statusElement.classList.add('online');
  } else {
    statusElement.textContent = "You are offline!";
    statusElement.classList.remove('online');
    statusElement.classList.add('offline');
  }
}

window.addEventListener('load', function() {
  updateStatus(); // Initial check
  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);
});