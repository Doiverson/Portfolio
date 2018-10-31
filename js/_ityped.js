// Type Writer
const iTyped = document.querySelector('.ityped');

window.ityped.init(iTyped, {
    strings: ['Dead simple animated typing.', 'No dependencies'],
    typeSpeed: 55,
    backSpeed: 30,
    startDelay: 500,
    backDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
    onFinished: function(){}
});