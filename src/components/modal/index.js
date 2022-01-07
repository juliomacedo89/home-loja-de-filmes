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
                  slidesToScroll: 3,
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
            nextArrow: false
            
      })

      function moving() {
            var body = document.querySelector('body');
            var currentTop = 0;
            var oldTop = 0;
            var headerTop = document.querySelector('#header').offsetHeight;
        
            body.setAttribute('data-scrolling', false);
            body.setAttribute('data-scrolling-mode', 'none');
        
            window.addEventListener('scroll', () => { 
                currentTop = window.pageYOffset;
                
                if(currentTop == 0) 
                  body.setAttribute('data-scrolling', false);    
                else   
                body.setAttribute('data-scrolling', true);                 
        
                if(currentTop > headerTop) {
                    if(oldTop > currentTop) {
                        body.setAttribute('data-scrolling-mode', 'up');
                    } else if (oldTop < currentTop) {   
                        body.setAttribute('data-scrolling-mode', 'down');
                    } else {
                        body.setAttribute('data-scrolling-mode', 'none'); 
                    }
                    oldTop = currentTop;
                } else body.setAttribute('data-scrolling-mode', 'none');
            });
        }
        
        moving()
})
