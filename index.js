// Adaptive menu
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');

function switchMenu() {
  toggleBtn.classList.toggle('collapsed');
  nav.classList.toggle('collapsed');
  navList.classList.toggle('collapsed');
}
toggleBtn.addEventListener('click', switchMenu);

function closeMenu() {
  setTimeout(() => {
    toggleBtn.classList.remove('collapsed');
    nav.classList.remove('collapsed');
    navList.classList.remove('collapsed');
  }, 1000);  
}
navItems.forEach(el => el.addEventListener('click', closeMenu));


const btn = document.querySelector(".btn-toggle");

// btn.addEventListener("click", function () {

//   document.body.classList.toggle("dark-theme");
// });

const ToggleTheme = () => {
  const btn = document.getElementById('theme-toggle');
  let themeState = 1
  
  const themeChange = () => {
    if(themeState == 'dark') {
      document.body.classList.remove(themeState)
      themeState = 'light'
      document.body.classList.add(themeState)
    }
    else {
      document.body.classList.remove(themeState)
      themeState = 'dark'
      document.body.classList.add(themeState)
    }
  }

  btn.addEventListener('click', ()=>themeChange())
}

const stickyHeader = () => {
  const header = document.getElementsByTagName('header')[0];

  console.log(window.scrollY)
  if(window.scrollY > 100) {
    header.classList.add('sticky')
  }
  else {
    header.classList.remove('sticky')
  }
}


document.addEventListener('scroll', stickyHeader)
document.addEventListener('DOMContentLoaded', ToggleTheme)