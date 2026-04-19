
if (
  sessionStorage.getItem('access1') !== 'true' ||
  sessionStorage.getItem('access2') !== 'true' ||
  sessionStorage.getItem('access3') !== 'true'
) {
  window.location.replace('index.html');
}
const confetti = document.getElementById('confetti');
const colors = ['#57efff', '#65ff9b', '#ffbc58', '#b685ff', '#ffffff'];
for (let i = 0; i < 56; i++) {
  const bit = document.createElement('span');
  bit.style.left = `${Math.random() * 100}%`;
  bit.style.background = colors[Math.floor(Math.random() * colors.length)];
  bit.style.animationDuration = `${4 + Math.random() * 3}s`;
  bit.style.animationDelay = `${Math.random() * 2}s`;
  bit.style.transform = `rotate(${Math.random() * 360}deg)`;
  confetti.appendChild(bit);
}
