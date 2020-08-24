/* Theme Name: Responsive Landing Page Template
   Author: Mehedi002
   Version: 1.0.0
   File Description: Main jquery file of the template
*/

! function ($) {
    "use strict";

    var WebSite = function () {};

    //scroll
    WebSite.prototype.initNavbarStickey = function () {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 50) {
                    $(".sticky").addClass("darkheader");
                } else {
                    $(".sticky").removeClass("darkheader");
                }
            });
        },

        WebSite.prototype.initMagnificPopup = function () {
            $('.video-play-icon-trigger').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        },

        WebSite.prototype.initNavbarToggler = function () {
            var scroll = $(window).scrollTop();

            $('.navbar-toggle').on('click', function (event) {
                $(this).toggleClass('open');
                $('#navigation').slideToggle(400);
            });

            $('.navigation-menu>li').slice(-2).addClass('last-elements');

            $('.menu-arrow,.submenu-arrow').on('click', function (e) {
                if ($(window).width() < 992) {
                    e.preventDefault();
                    $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
                }
            });
        },

        WebSite.prototype.initTestimonialSlider = function () {
            $('#owl-demo').owlCarousel({
                autoplay: true,
                lazyLoad: true,
                loop: true,
                margin: 20,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                responsiveClass: true,
                autoHeight: true,
                autoplayTimeout: 7000,
                smartSpeed: 800,
                nav: false,
                dots: true,
                items: 1,
            });
        },

        WebSite.prototype.initSmoothLink = function () {
            $('.navigation-menu a').on('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 0
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        },

        WebSite.prototype.initScrollspy = function () {
            $("#navigation").scrollspy({
                offset: 50
            });
        },

        WebSite.prototype.initContactForm = function(){
            $('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function() {
                $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('contact-error');
            });
            $('.contact-form form').submit(function(e) {
                e.preventDefault();
                $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('contact-error');
                var postdata = $('.contact-form form').serialize();
                $.ajax({
                    type: 'POST',
                    url: 'contact.php',
                    data: postdata,
                    dataType: 'json',                    
                    success: function(json) {
                        if(json.emailMessage != '') {
                            $('.contact-form form .contact-email').addClass('contact-error');
                        }
                        if(json.messageMessage != '') {
                            $('.contact-form form textarea').addClass('contact-error');
                        }
                        if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {

                            var frm  = $('.contact-form form');
                            // var contactSuccess = $('contact-success');
                            // createPopper(frm, contactSuccess), {
                            //     placement: 'top',
                            //   };
                        }
                    }
                });
            });
        },
    

        WebSite.prototype.init = function () {
            this.initNavbarStickey();
            this.initMagnificPopup();
            this.initNavbarToggler();
            this.initTestimonialSlider();
            this.initSmoothLink();
            this.initScrollspy();
            this.initContactForm();
        },
        //init
        $.WebSite = new WebSite, $.WebSite.Constructor = WebSite
}(window.jQuery),

//initializing
function ($) {
    "use strict";
    $.WebSite.init();
}(window.jQuery);
