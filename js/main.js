$(document).ready(function ($){
    "use strict";
    //////////////////////Gallery////////////
    var team_slider = new Swiper(".team-slider",{
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
    ////////////////////////////////////Team//////////
    var book_table = new Swiper(".book-table-img-slider",{
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
    //////////////Menu/////////////
    jQuery(".filters").on("click", function () {
        jQuery("#menu-dish").removeClass("bydefault_show");
    });
    $(function () {
        var filterList = {
            init: function () {
                $("#menu-dish").mixItUp({
                    selectors: {
                        target: ".dish-box-wp",
                        filter: ".filter",
                    },
                    animation: {
                        effects: "fade",
                        easing: "ease-in-out",
                    },
                    load: {
                        filter: ".all, .breakfast, .lunch, .dinner",
                    },
                });
            },
        };
        filterList.init();
    });

////////////////////////////////////////////////////////
    jQuery(".menu-toggle").click(function (){
        jQuery(".main-nav").toggleClass("toggled")
    });
    jQuery(".header-menu ul li a").click(function () {
        jQuery(".main-nav").removeClass("toggled")
    })

    // $(".menu-toggle").click(function () {
    //     $(this).toggleClass("toggled"); // إضافة الكلاس toggled للزر
    //     $(".main-nav").toggleClass("toggled"); // إضافة الكلاس toggled للقائمة
    // });

    // // إغلاق القائمة عند الضغط على رابط
    // $(".header-menu ul li a").click(function () {
    //     $(".main-nav").removeClass("toggled"); // إزالة الكلاس toggled
    //     $(".menu-toggle").removeClass("toggled"); // إعادة الزر لحالته الأصلية
    // });
    gsap.registerPlugin(ScrollTrigger);
    var eleFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        trigger : "body",
        start :   "30px top",
        end : "bottom bottom",
        onEnter : ()=> myFunction(),
        onLeaveBack : ()=> myFunction(),

    });
    function myFunction(){
        eleFirst.classList.toggle('sticky-head');
    }
    ///////////////Home///////////////////
    var scene = $(".js-parallax-scene").get(0);
    var parallaxInstance = new Parallax(scene);
});
////////////////////////Menu////////////////
// jQuery(window).on('load', function () {
//     $('body').removeClass('body-fixed');

//     //activating tab of filter
//     let targets = document.querySelectorAll(".filter");
//     let activeTab = 0;
//     let old = 0;
//     let dur = 0.4;
//     let animation;

//     for (let i = 0; i < targets.length; i++) {
//         targets[i].index = i;
//         targets[i].addEventListener("click", moveBar);
//     }

//     // initial position on first === All 
//     gsap.set(".filter-active", {
//         x: targets[0].offsetLeft,
//         width: targets[0].offsetWidth
//     });

//  function moveBar() {
//         if (this.index != activeTab) {
//             if (animation && animation.isActive()) {
//                 animation.progress(1);
//             }
//             animation = gsap.timeline({
//                 defaults: {
//                     duration: 0.4
//                 }
//             });
//             old = activeTab;
//             activeTab = this.index;
//             animation.to(".filter-active", {
//                 x: targets[activeTab].offsetLeft,
//                 width: targets[activeTab].offsetWidth
//             });

//             animation.to(targets[old], {
//                 color: "#0d0d25",
//                 ease: "none"
//             }, 0);
//             animation.to(targets[activeTab], {
//                 color: "#fff",
//                 ease: "none"
//             }, 0);

//         }

//     }
// });