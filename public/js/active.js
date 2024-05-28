
 $('#counter-block').ready(function () {
     $('.trending-slider').owlCarousel({
         loop: true,
         margin: 10,
         nav: false,
         items: 3,
         autoplayTimeout: 6000,
         autoplay: false,
         dots:false,
         navText: [
        "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
     });
    /* $('.footer_carosal_icon').owlCarousel({
         loop: true,
         margin: 10,
         nav: true,
         items: 5,
         autoplayTimeout: 6000,
         autoplay: true,
         navText: [
        "<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
         responsive: {
             1400: {
                 items: 5,
                 nav: true,
                 loop: true
             },
             991: {
                 items: 4,
                 nav: true,
                 loop: true
             },
             768: {
                 items: 4,
                 nav: true,
                 loop: true
             },
             500: {
                 items: 3,
                 nav: true,
                 loop: true
             },
             0: {
                 items: 2,
                 nav: true,
                 loop: true
             }
         },
     });*/
 });