
//Mobile nav bar toggle
$('#nav-toggle').click(function(){
    $('body').toggleClass('open');
});


//Close nav bar after link is clicked
const open = document.body;
const btn = document.getElementById('global-nav').getElementsByTagName('a');
console.log(open);

for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
       open.classList.remove('open');
    },false);
}
