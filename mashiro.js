let mashiroConfig;

function cardLightboxInitialize() {
    $("body").append(`<div class="lightbox__dim" style="display: none;">
        <div class="lightbox-content"></div>
    </div>`);
}

function saveConfig() {
    localStorage.setItem("mashiroCookie", JSON.stringify(mashiroConfig));
}

function colorFill() {
    $("[character]").toggleClass("fill");
    $("#dark-toggle").toggle();
    $("#light-toggle").toggle();
    mashiroConfig.darkColors = !mashiroConfig.darkColors;
    saveConfig();
}

function sliderDrop() {
    $(".toolbar-wrapper").toggleClass("showSlider");
}

$(document).ready(function() {
    cardLightboxInitialize();
    $(".tab-header,.mt-header,.minitalk-option_header").click(function() {
        $(this)
            .next()
            .slideToggle();
        $(this).toggleClass("tab-header__open");
    });
    $(".cards-item").click(function() {
        $("body").addClass("lightbox-visible");
        $(".lightbox-content")
            .html($(this).html())
            .parent()
            .fadeToggle(200);
    });
    $(".lightbox__dim")
        .click(function() {
            $("body").removeClass("lightbox-visible");
            $(".lightbox-content")
                .parent()
                .fadeOut(200);
        })
        .children()
        .click(function(e) {
            return false;
        });
    $(".card-pair-wrapper").click(function() {
        $(".card-pair-wrapper").toggleClass("bloomed");
    });
    $(".tabber a").click(function() {
        $(this)
            .parent()
            .siblings()
            .removeClass("active");
        $(this)
            .parent()
            .addClass("active");
        $(this)
            .parents(".minitalk-option_content")
            .children("div")
            .hide();
        $(this)
            .parents(".minitalk-option_content")
            .children(`div[data-tab="${$(this).attr("data-tab")}"]`)
            .show();
    });
});

$(document).ready(() => {
    let mashiroCookie = localStorage.getItem("mashiroCookie");

    if (!mashiroCookie) {
        const defaultMashiroConfig = {
            darkColors: false,
            fontSize: ""
        };
        mashiroConfig = defaultMashiroConfig;
        saveConfig();
        mashiroCookie = JSON.stringify(defaultMashiroConfig);
    }

    mashiroConfig = JSON.parse(mashiroCookie);
    const fontSizes = ["smallest", "smaller", "", "bigger", "biggest"];

    if (mashiroConfig.darkColors) {
        colorFill();
    }
    if (mashiroConfig.fontSize) {
        $("[character]").removeClass(fontSizes.filter(size => !!size));
        $("[character]").addClass(mashiroConfig.fontSize);
    }

    const handleSliderChange = event => {
        const fontSize = fontSizes[event.target.value - 1];
        $("[character]").removeClass(fontSizes.filter(size => !!size));
        $("[character]").addClass(fontSize);
        mashiroConfig.fontSize = fontSize;
        saveConfig();
    };
    $("input.slider").on("change", handleSliderChange);
});
