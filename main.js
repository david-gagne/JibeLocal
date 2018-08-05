let button = document.querySelector('body > section > div.hero-body.has-thin-border > div > button');
let modal = document.querySelector('body > div');
let modalCloseButton = document.querySelector('body > div > button');

button.addEventListener('click', function() {
    modal.classList.add('is-active');
});

modalCloseButton.addEventListener('click', function() {
    modal.classList.remove('is-active');
    window.location.reload(true)
});