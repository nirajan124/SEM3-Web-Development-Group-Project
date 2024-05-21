const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
    document.getElementById("rememberMe").style.display= 'none' ;
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
    setTimeout(() => {
    document.getElementById("rememberMe").style.display= 'block' ;
    }, 2330);
}