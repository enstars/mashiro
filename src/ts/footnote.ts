tippy.setDefaultProps({
    maxWidth: 350,
    allowHTML: true,
    animation: "shift-away",
    delay: [50, 200],
    zIndex: 99,
    moveTransition: "transform 0.2s ease",
    interactive: true,
});
tippy("[data-tippy-content]");
