
const slideImgs = document.querySelector('.ss-wrapper').children;
const slideImgsArr = [...slideImgs];

function scrollCheck() {

    slideImgsArr.forEach( slideImg => {

        const slideInAt = (window.scrollY + window.innerHeight) - slideImg.clientHeight / 3;
        const isHalfShown = slideInAt > slideImg.offsetTop;
        if (isHalfShown) {
            slideImg.classList.add('fadeinDown');
        }
    });

}

window.addEventListener('scroll', scrollCheck);

