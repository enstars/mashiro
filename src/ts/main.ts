import $ from "jquery";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "../scss/mashiro.scss";

let mashiroConfig;

function saveConfig() {
    localStorage.setItem("mashiroCookie", JSON.stringify(mashiroConfig));
}

function cardLightboxInitialize() {
    $("body").append(`<div class="lightbox__dim" style="display: none;">
        <div class="lightbox-content"></div>
    </div>`);
}

function minitalkInitialize() {
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
}

function storyCoverInitialize() {
    cardLightboxInitialize();
    $(".tab-header,.mt-header").click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass("tab-header__open");
    });
    $(".cards-item").click(function () {
        $("body").addClass("lightbox-visible");
        $(".lightbox-content").html($(this).html()).parent().fadeToggle(200);
    });
    $(".lightbox__dim")
        .click(function () {
            $("body").removeClass("lightbox-visible");
            $(".lightbox-content").parent().fadeOut(200);
        })
        .children()
        .click(function (e) {
            return false;
        });
    $(".card-pair-wrapper").click(function () {
        $(".card-pair-wrapper").toggleClass("bloomed");
    });
}

function toolbarInitialize() {
    let mashiroCookie = localStorage.getItem("mashiroCookie");
    const fontSizes = ["smallest", "smaller", "", "bigger", "biggest"];

    if (!mashiroCookie) {
        const defaultMashiroConfig = {
            darkColors: false,
            // Slider range is 1-5, but font size array indices are 0-4
            fontSize: fontSizes.indexOf("") + 1,
        };
        mashiroConfig = defaultMashiroConfig;
        saveConfig();
        mashiroCookie = JSON.stringify(defaultMashiroConfig);
    }

    mashiroConfig = JSON.parse(mashiroCookie);

    const handleSliderChange = (event) => {
        const fontSize = fontSizes[event.target.value - 1];
        $("[character]").removeClass(fontSizes.filter((size) => !!size));
        $("[character]").addClass(fontSize);
        mashiroConfig.fontSize = event.target.value;
        saveConfig();
    };
    $("input.slider").on("change", handleSliderChange);

    // Initialize fill mode based on config value
    $("[character]").toggleClass("fill", mashiroConfig.darkColors);
    $("#dark-toggle").toggle(mashiroConfig.darkColors);
    $("#light-toggle").toggle(!mashiroConfig.darkColors);

    if (mashiroConfig.fontSize) {
        $("input.slider").val(mashiroConfig.fontSize);
        // Need to manually invoke event listener
        $("input.slider").change();
    }
}

function footnoteInitialize() {
    tippy.setDefaultProps({
        theme: "translucent",
        allowHTML: true,
        animation: "shift-away",
        zIndex: 99,
        moveTransition: "transform 0.2s ease",
    });

    tippy("[data-tippy-content]");

    tippy($("body").find(".msr-fn-inline").toArray(), {
        interactive: true,
        appendTo: () => document.body,
    });

    tippy($("body").find(".msr-fn-toolbar").toArray(), {
        hideOnClick: false,
        trigger: "mouseenter",
    });
}

$(document).ready(function () {
    minitalkInitialize();
    storyCoverInitialize();
    toolbarInitialize();
    footnoteInitialize();

    $("#colorFill").click(function () {
        $("[character]").toggleClass("fill");
        $("#dark-toggle").toggle();
        $("#light-toggle").toggle();
        mashiroConfig.darkColors = !mashiroConfig.darkColors;
        saveConfig();
    });

    $("#sliderDrop").click(function () {
        $(".toolbar-wrapper").toggleClass("showSlider");
    });
});
