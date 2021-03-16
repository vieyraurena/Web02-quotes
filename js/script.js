const link = document.getElementById('link');
const collapse = document.getElementById('menu');
const equis = document.getElementById('equis');

link.addEventListener('click', (event) => {
  event.preventDefault();
  collapse.classList.add('visible');
});

equis.addEventListener('click', (event) => {
  event.preventDefault();
  collapse.classList.remove('visible');
});
