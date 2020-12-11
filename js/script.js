const link = document.getElementById('link');
const collapse = document.getElementById('menu');
const equis = document.getElementById('equis');

link.addEventListener('click', (event) => {
  event.preventDefault();
  collapse.classList.add('visible');
  console.log('hi')
});

equis.addEventListener('click', (event) => {
  event.preventDefault();
  collapse.classList.add('hidden');
  console.log('hi')
});
