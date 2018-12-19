
const fadeinDown = document.querySelector('.two-col');

function scrollCheck() {
    const slideInAt = (window.scrollY + window.innerHeight) - fadeinDown.clientHeight / 3;
    const isHalfShown = slideInAt > fadeinDown.offsetTop;
    if(isHalfShown){
        fadeinDown.classList.add('fadeinDown');
    }
}

window.addEventListener('scroll', scrollCheck);
