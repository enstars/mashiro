$(document).ready(function() {
    $('.minitalk-option_header').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('tab-header__open');
    })
});
