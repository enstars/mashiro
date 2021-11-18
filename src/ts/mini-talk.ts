$(document).ready(function () {
    $(".minitalk-option_header").click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass("tab-header__open");
    });
    $(".tabber a").click(function () {
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        $(this).parents(".minitalk-option_content").children("div").hide();
        $(this)
            .parents(".minitalk-option_content")
            .children(`div[data-tab="${$(this).attr("data-tab")}"]`)
            .show();
    });
});
