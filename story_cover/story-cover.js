var jQ = document.createElement('script');
jQ.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
document.head.appendChild(jQ);

$(document).ready(function() {
  $('.tab-header').click(function(){
    $(this).next().slideToggle();
    $('.tab-header__name').toggleClass(open, add);
  })
});
