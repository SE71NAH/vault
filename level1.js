
if (sessionStorage.getItem('access1') !== 'true') {
  window.location.replace('index.html');
}
const PASSWORD_TWO = 'shakespearer';
const input2 = document.getElementById('passwordInput2');
const btn2 = document.getElementById('submitBtn2');
const msg2 = document.getElementById('statusMsg2');
const gate2 = document.getElementById('gateBox2');

function normalise(v) { return (v || '').trim().toLowerCase(); }
function tryPassword2() {
  if (!normalise(input2.value)) return;
  if (normalise(input2.value) === PASSWORD_TWO.toLowerCase()) {
    sessionStorage.setItem('access2', 'true');
    msg2.textContent = 'Archive unlocked. Opening...';
    msg2.className = 'status good';
    setTimeout(() => window.location.href = 'level2.html', 650);
  } else {
    msg2.textContent = 'Wrong password. Archive still locked.';
    msg2.className = 'status bad';
    gate2.classList.remove('shake');
    void gate2.offsetWidth;
    gate2.classList.add('shake');
  }
}
btn2?.addEventListener('click', tryPassword2);
input2?.addEventListener('keydown', (e) => { if (e.key === 'Enter') tryPassword2(); });
