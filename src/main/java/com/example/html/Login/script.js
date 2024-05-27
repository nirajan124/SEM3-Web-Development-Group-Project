const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
<<<<<<< HEAD
=======
    document.getElementById("rememberMe").style.display= 'none' ;
>>>>>>> 684a55f6d7b11b401e91c9c8adf64f5d0cb02ccf
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
<<<<<<< HEAD
=======
    setTimeout(() => {
    document.getElementById("rememberMe").style.display= 'block' ;
    }, 2330);
>>>>>>> 684a55f6d7b11b401e91c9c8adf64f5d0cb02ccf
}