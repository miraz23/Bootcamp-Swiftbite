window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    
    if (window.scrollY > 0) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});

const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('subscribe-input');
const message = document.getElementById('message');

form.addEventListener('submit', function(event){
    
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    
    if(emailValue == '')
    {
        message.textContent = 'Email field cannot be empty.';
    }
    else 
    {
        message.textContent = 'Subscription successful!';
        emailInput.value = '';
    }
});

