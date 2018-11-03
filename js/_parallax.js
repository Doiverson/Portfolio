
window.onload = function(){
    var wrapper = document.querySelector('.parallax-parent'),
        layerOne = document.querySelector('.l1');
        // layerTwo = document.querySelector('.l2');

    wrapper.addEventListener('mousemove', (e) => {
        var pageX = e.clientX,
            pageY = e.clientY;

        layerOne.style.transform = 'translateX('+ pageX/500 +'%) translateY('+ pageY/500 +'%)';
        // layerTwo.style.transform = 'translateX(' + pageX/150 + '%) translateY(' + pageY/250 + '%)';

        // wrapper.style = 'background-position:' + pageX/200 + 'px center';
    });
}