function colorMode(){
    $('[character]').toggleClass('dark');
    $('#modechange').on('click', function() {
        $('#modechange').text('light_mode');
    });
    $('#modechange').on('click', function() {
        $('#modechange').text('dark_mode');
    });
}
$(document).ready(function() {
    colorMode();
});
