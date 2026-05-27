window.addEventListener('formsLoaded', () => {
  setTimeout(() => {
    const roomIdEl = document.getElementById('roomId');
    const setupBanner = document.getElementById('setupBanner');
    const statusDot = document.getElementById('statusDot');
    
    if (roomIdEl && roomIdEl.textContent === 'Room: —') {
      if (setupBanner) setupBanner.style.display = 'block';
      if (statusDot) statusDot.style.background = '#ef4444';
    } else {
      if (statusDot) statusDot.classList.add('online');
    }
  }, 2500);
});
