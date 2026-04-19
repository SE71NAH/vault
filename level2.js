
if (sessionStorage.getItem('access1') !== 'true' || sessionStorage.getItem('access2') !== 'true') {
  window.location.replace('index.html');
}
const PASSWORD_THREE = 'fractionsq';
const input3 = document.getElementById('passwordInput3');
const btn3 = document.getElementById('submitBtn3');
const msg3 = document.getElementById('statusMsg3');
const gate3 = document.getElementById('gateBox3');

function normalise(v) { return (v || '').trim().toLowerCase(); }
function tryPassword3() {
  if (!normalise(input3.value)) return;
  if (normalise(input3.value) === PASSWORD_THREE.toLowerCase()) {
    sessionStorage.setItem('access3', 'true');
    msg3.textContent = 'Final vault unlocked. Opening...';
    msg3.className = 'status good';
    setTimeout(() => window.location.href = 'level3.html', 650);
  } else {
    msg3.textContent = 'Wrong password. Final vault still locked.';
    msg3.className = 'status bad';
    gate3.classList.remove('shake');
    void gate3.offsetWidth;
    gate3.classList.add('shake');
  }
}
btn3?.addEventListener('click', tryPassword3);
input3?.addEventListener('keydown', (e) => { if (e.key === 'Enter') tryPassword3(); });
