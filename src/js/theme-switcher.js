const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector("body");

const checkbox = document.querySelector(".theme-switch__toggle");

if (!localStorage.getItem('class')) {
  body.classList.add(Theme.LIGHT);
  localStorage.setItem('class', theme.LIGHT)
} else {
  body.classList.add(localStorage.getItem('class'))
  if (localStorage.getItem('class') === Theme.LIGHT) {
    checkbox.checked = false;
  } else {
    checkbox.checked = true;
  }
}

checkbox.addEventListener('change', (e) => {
    
    if (body.classList.contains(Theme.LIGHT)) {
        body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem("class", Theme.DARK);
        checkbox.checked = true;
    } else {
        body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem("class", Theme.LIGHT);
        checkbox.checked = false;
    }
});