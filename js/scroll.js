$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 600;
        var href = $(this).attr("href");
        var target = $(href === "#" || href === "" ? 'html' : href);
        console.log(target);
        var position = target.offset().top;
        console.log(position);
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
