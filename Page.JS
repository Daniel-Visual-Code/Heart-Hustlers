let lastScrollY = window.scrollY;
const backround = document.getElementById('backround');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    backround.style.transform = 'translateY(-30px)';
  } else {
    backround.style.transform = 'translateY(-30px)';
  }
  lastScrollY = window.scrollY;
});
}













