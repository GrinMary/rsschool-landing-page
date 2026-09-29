document.addEventListener('DOMContentLoaded', () => {
  //burger-menu
  const burgerBtn = document.querySelector('.burger-menu');
  const menu = document.querySelector('.nav-list');

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('open-menu');
  });

  menu.addEventListener('click', (e) => {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('open-menu');
  });
});