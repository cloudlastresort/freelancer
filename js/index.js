function delay(n){
    n = n || 2000;
    return new Promise(( done) => {
        setTimeout(() => {
            done();
        }, n)
    })
}

function pageTransition(){
    const tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration:1.2,
        width:'100%',
        left:"0%",
        ease:"Expo.easeInOut"
    });
    tl.to(".loading-screen",{
        duration:1,
        width: "100%",
        left:"100%",
        ease:"Expo.easeInOut",
        delay:0.3
    });
    tl.set(".loading-screen", { left:"-100%"})
}

// function contentAnimation(){
//     const tl = gsap.timeline();
//     tl.from('.animate-this', { 
//         duration:1, 
//         y:30, 
//         opacity:0, 
//         stagger:0.4,
//         delay:0.2,

//     });
// }

$(function(){
    barba.init({
        sync:true,
        transitions:[
            { 
                async leave(data){
                    const done = this.async();
                    pageTransition();
                    await delay(1000);
                    done();
                },
                // async enter(data){
                //     contentAnimation();
                // },
                // async once(data){
                //     contentAnimation();
                // }
                enter(){
                    $(document).ready(function(){
                        $('.counter').counterUp({
                            delay:10,
                            time:3000
                        });
                    });
                }
            }
        ],
        views: [{
            namespace: 'about',
            beforeEnter() {
                $(document).on('click', 'a[href^="./"]', function (event) {
                            event.preventDefault();
                            $('.navbar-toggler').addClass('collapsed');
                            $('#navbarResponsive').removeClass('show');
                        
                            setTimeout(function () {
                                $('nav.navbar').removeClass('solid-toggle');
                            }, 300);
                        
                            $('html, body').animate({
                                scrollTop: $($.attr(this, 'href')).offset().top
                            }, 0);
                        });
                        //-----------------NAVBAR TOGGLE-------------
                        $(document).ready(function(){
                            checkScroll();
                            $(window).scroll(checkScroll);
                            $('.navbar-toggler').click(function(){
                                if($(window).scrollTop() <= 300){
                                    $('nav.navbar').toggleClass('solid-toggle');
                                    
                                }
                            });
                            
                        });

                        /*========== WAYPOINTS ANIMATION DELAY ==========*/
//Original Resource: https://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css
    $(function () { // a self calling function
        function onScrollInit(items, trigger) { // a custom made function
            items.each(function () { //for every element in items run function
                var osElement = $(this), //set osElement to the current
                    osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
                    osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time
      
                osElement.css({ //change css of element
                    '-webkit-animation-delay': osAnimationDelay, //for safari browsers
                    '-moz-animation-delay': osAnimationDelay, //for mozilla browsers
                    'animation-delay': osAnimationDelay //normal
                });
      
                var osTrigger = (trigger) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger
      
                osTrigger.waypoint(function () { //scroll upwards and downwards
                    osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
                }, {
                        triggerOnce: true, //only once this animation should happen
                        offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
                    });
            });
        }
      
        onScrollInit($('.os-animation')); //function call with only items
        onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
      });

       //-----------------CLIENTS CAROUSEL-----------------
    $(document).ready(function(){ //when document(DOM) loads completely
        $('#clients-carousel').owlCarousel({ //owlCarousel settings
            autoplay:true, //set to false to turn off autoplay and only use nav
            autoplayHoverPause: true, //set to false to prevent pausing on hover
            loop: true, //set to false to stop carousel after all slides shown
            autoplayTimeout: 8000, //time between transitions
            smartSpeed: 1600, //transition speed
            dotsSpeed: 1000, //transition speed when using dots/buttons
            responsive : { //set number of items shown per screen width
                0 : {
                    items: 1 //0px width and up display 1 item
                },
                768 : {
                    items: 2 //768px width and up display 2 items
                },
               
            }
        });
       
        
        
     
    });  
            },
            afterEnter() {
              // refresh the parallax based on new page content
            //   parallax.refresh();
            
            
            }
          },           
          
          
        ]
    })
})
// hiding title when scroll

$(document).ready(function(){
    $(window).scroll(function(){
        $('.title').css('opacity', 1 - $(window).scrollTop() / 200);
    });
});
// -------------LIGHTBOX IMAGE GALLARY--------------

$(document).ready(function(){
    lightbox.option({
        'resizeDuration': 600,
        'wrapAround': true,
        'imageFadeDuration':600
    });
});



    /*========== TOP SCROLL BUTTON ==========*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.top-scroll').fadeIn();
        } else {
            $('.top-scroll').fadeOut();
        }
    });
});
/*========== CLOSE MOBILE MENU ON CLICK & SMOOTH SCROLL TO LINK a[href^="#"] ==========*/

// $(document).on('click', 'a[href^="./"]', function (event) {
//         event.preventDefault();
//         $('.navbar-toggler').addClass('collapsed');
//         $('#navbarResponsive').removeClass('show');
    
//         setTimeout(function () {
//             $('nav.navbar').removeClass('solid-toggle');
//         }, 300);
    
//         $('html, body').animate({
//             scrollTop: $($.attr(this, 'href')).offset().top
//         }, 0);
//     });
//     //-----------------NAVBAR TOGGLE-------------
//     $(document).ready(function(){
//         checkScroll();
//         $(window).scroll(checkScroll);
//         $('.navbar-toggler').click(function(){
//             if($(window).scrollTop() <= 300){
//                 $('nav.navbar').toggleClass('solid-toggle');
                
//             }
//         });
        
//     });




