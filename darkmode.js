const btnDarkMode = document.querySelector('#dark-mode')

let darkModeLS = localStorage.getItem('dark')
if (darkModeLS === 'true') {
  document.body.classList.add('dark')
}


function toggleDarkMode() {
  var body = document.body;
  var toggle = document.getElementById("dark-mode-toggle");
  if (toggle.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}
      