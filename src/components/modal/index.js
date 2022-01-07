import './style';

$(document).ready(function() {
      
      $('.banner__container-carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: $("#arrow-prev"),
            nextArrow: $("#arrow-next"),
            responsive: [
            {
                  breakpoint: 640,
                  settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2,
                  infinite: true,
                  prevArrow: $("#arrow-prev"),
                  nextArrow: $("#arrow-next")
                  
                  }
            }]
            });   


      $('.brands__container-carousel').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 1000,
            arrow: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
            {
                  breakpoint: 640,
                  settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  prevArrow: $("#arrow-prev"),
                  nextArrow: $("#arrow-next")
                  
                  }
            },
            {
                  breakpoint: 600,
                  settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  prevArrow: $("#arrow-prev"),
                  nextArrow: $("#arrow-next")
                  
                  }
            }]
            
      })

      
})
