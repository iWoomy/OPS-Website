/*// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
*/
// Javascript
slidr.create('slidr-img', {
    after: function(e) { console.log('in: ' + e.in.slidr); },
    before: function(e) { console.log('out: ' + e.out.slidr); },
    breadcrumbs: true,
    controls: 'none',
    direction: 'horizontal',
    fade: true,
    keyboard: true,
    overflow: true,
    pause: false,
    theme: '#e2e2e2',
    timing: { 'fade': '0.5s ease-in' },
    touch: true,
    transition: 'fade'
}).start();


// jQuery v3.3.1
$(document).ready(function() {

    /* Scroll to navigation */
    $('.js--scroll-to-home').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-home').offset().top},700)
    })

    $('.js--scroll-to-about').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top},700)
    })

    $('.js--scroll-to-projects').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-projects').offset().top},700)
    })

    $('.js--scroll-to-clients').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-clients').offset().top},700)
    })

    $('.js--scroll-to-contact').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top},700)
    })

    $('.js--back-to-top').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-home').offset().top},700)
    })

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    // Animation on reaching waypoints
    $(".js--wp-1").waypoint(function(direction) {
        $(".js--wp-1").addClass("animated fadeIn");
    }, {
        offset: "75%"
    });

    // Mobile Navigation Bar
    $(".js--mobile-nav-icon").click(function() {
        var nav = $(".js--main-nav");
        var menu_close = $(".js--mobile-nav-icon");
        var menu_open = $(".js--mobile-nav-icon-bar");

        nav.slideToggle(200);

        if (menu_close.css("display","inline-block")) {
            menu_close.css("display","none");
            menu_open.css("display","inline-block");
        };
    });

    $(".js--mobile-nav-icon-bar").click(function() {
        var nav = $(".js--main-nav");
        var menu_close = $(".js--mobile-nav-icon");
        var menu_open = $(".js--mobile-nav-icon-bar");

        nav.slideToggle(200);

        if (menu_close.css("display","none")) {
            menu_close.css("display","inline-block");
            menu_open.css("display","none");
        };
    });


})
