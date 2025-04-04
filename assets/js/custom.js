jQuery( document ).ready(function( $ ) {


	"use strict";


    
        $(function() {
            $( "#tabs" ).tabs();
        });


        // Page loading animation

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });       

        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();

          if (scroll >= box - header) {
            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
        });
		if ($('.owl-testimonials').length) {
            $('.owl-testimonials').owlCarousel({
                loop: true,
                nav:false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 2,
                        margin: 30
                    }
                }
            });

    
        }
        if ($('.owl-partners').length) {
            $('.owl-partners').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 4,
                        margin: 30
                    }
                }
            });
        }

        $(".Modern-Slider").slick({
            autoplay:true,
            autoplaySpeed:10000,
            speed:600,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            pauseOnDotsHover:true,
            cssEase:'linear',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
        });

        function visible(partial) {
            var $t = partial,
                $w = jQuery(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

        }

        $(window).scroll(function(){

          if(visible($('.count-digit')))
            {
              if($('.count-digit').hasClass('counter-loaded')) return;
              $('.count-digit').addClass('counter-loaded');
              
        $('.count-digit').each(function () {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        }
    })
 
});


// javascript section

let hidden_section = document.querySelector('.button-hide-1');
let arrow_1 = document.querySelector('.arrow-up-1');
let arrow_down_1 = document.querySelector(".arrow-down-1");
let view_hidden_content_1 = document.querySelector('.view-1');
let statement = false;

arrow_1.classList.add("hide");
view_hidden_content_1.classList.add("hide")


hidden_section.addEventListener('click', () => {
    if (!statement) {
        arrow_1.classList.remove("hide");
        view_hidden_content_1.classList.remove("hide");
        arrow_down_1.classList.add("hide");
        statement = true;
    } else {
        arrow_1.classList.add("hide");
        view_hidden_content_1.classList.add("hide");
        arrow_down_1.classList.remove("hide");
        statement = false;

    }
})


// item two
let hidden_section_2 = document.querySelector('.button-hide-2');
let arrow_2 = document.querySelector('.arrow-up-2');
let arrow_down_2 = document.querySelector(".arrow-down-2");
let view_hidden_content_2 = document.querySelector('.view-2');
let text_2 = document.querySelector('.show-text-2')
let statement_2 = false;

arrow_2.classList.add("hide");
view_hidden_content_2.classList.add("hide")


hidden_section_2.addEventListener('click', () => {
    if (!statement_2) {
        arrow_2.classList.remove("hide");
        view_hidden_content_2.classList.remove("hide");
        arrow_down_2.classList.add("hide");
        text_2.innerHTML = "Show Less";
        statement_2 = true;
    } else {
        arrow_2.classList.add("hide");
        view_hidden_content_2.classList.add("hide");
        arrow_down_2.classList.remove("hide");
        text_2.innerHTML = "Show More"
        statement_2 = false;

    }
})


// show date 
document.querySelector('.display-date').innerHTML = new Date().getFullYear();

