var jQ = document.createElement('script');
jQ.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
document.head.appendChild(jQ);

function cardLightboxInitialize(){
    $('body').append(`<div class="lightbox__dim" style="display: none;">
        <div class="lightbox-content"></div>
    </div>`);
}

$(document).ready(function() {
    cardLightboxInitialize();
    $('.tab-header').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('tab-header__open');
    })
    $('.cards-item').click(function() {
        $('body').addClass('lightbox-visible');
        $('.lightbox-content').html( $(this).html() ).parent().fadeToggle(200);
    });
    $('.lightbox__dim').click(function() {
        $('body').removeClass('lightbox-visible');
        $('.lightbox-content').parent().fadeOut(200);
    }).children().click(function(e) {
        return false;
    });
});
