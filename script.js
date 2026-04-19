
const PASSWORD_ONE = 'yardleysp';
const input = document.getElementById('passwordInput');
const btn = document.getElementById('submitBtn');
const msg = document.getElementById('statusMsg');
const gate = document.getElementById('gateBox');
const reset = document.getElementById('resetMission');

function normalise(v) { return (v || '').trim().toLowerCase(); }

function tryPassword() {
  if (!normalise(input.value)) return;
  if (normalise(input.value) === PASSWORD_ONE.toLowerCase()) {
    sessionStorage.setItem('access1', 'true');
    msg.textContent = 'Access granted. Opening level 1...';
    msg.className = 'status good';
    setTimeout(() => window.location.href = 'level1.html', 650);
  } else {
    msg.textContent = 'Wrong password. Try again.';
    msg.className = 'status bad';
    gate.classList.remove('shake');
    void gate.offsetWidth;
    gate.classList.add('shake');
  }
}

btn?.addEventListener('click', tryPassword);
input?.addEventListener('keydown', (e) => { if (e.key === 'Enter') tryPassword(); });
reset?.addEventListener('click', () => {
  sessionStorage.clear();
  msg.textContent = 'Mission reset.';
  msg.className = 'status good';
});
