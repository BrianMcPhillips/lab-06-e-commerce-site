const myForm = document.getElementById('form');

myForm.addEventListener('submit', (event) => {

    event.preventDefault();
    
    const formData = new FormData(myForm);
});
