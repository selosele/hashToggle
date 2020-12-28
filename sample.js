$(function() {
    $("[href='#foo']").hashToggle({
        event: "mouseover mouseout",
        action: "fadeToggle",
        duration: 600,
        toggleClass: "active",
        afterEvent: function(event) {
            $("body").toggleClass("test");
        }
    });

    $("[href='#bar']").hashToggle({
        action: "slideDown",
        duration: 300,
        animateStop: false,
        addClass: "on"
    });

    $("[href='#baz']").hashToggle({
        event: "mouseenter mouseleave focusin focusout",
        action: "slideToggle",
        duration: 400,
        animateStop: false,
        afterEvent: function(event) {
            if (event.type === "focusin") {
              $(this).attr("title", "선택됨");
            }

            if (event.type === "focusout") {
                $(this).attr("title", "");
            }
        }
    });
});