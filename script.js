const colorMode = document.getElementById('color-mode');
const body = document.getElementById('body');

colorMode.addEventListener('change', () => {
  if(body.className != 'dark-mode'){
    body.className = 'dark-mode';
  } else {
    body.className = 'white-mode';
  }
});