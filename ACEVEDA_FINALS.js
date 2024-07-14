function displayMessage() {
    document.getElementById('message').innerHTML ='<a href="https://www.youtube.com/watch?v=HMTKMWHLbdQ" target="_blank">Click here to visit my future business plans.</a>';
}

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
   