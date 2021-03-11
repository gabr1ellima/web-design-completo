let btnContact = document.querySelector('.df-btn-contact');

btnContact.addEventListener('click', function () {
  let boxContact = document.querySelector('.df-contact-info');
  boxContact.classList.toggle('df-is-open');
  this.classList.toggle('df-change-icon');
});