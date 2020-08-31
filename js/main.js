$(document).ready(function() {
    $(".navbar li a, #showcase a, #footer .top a[href='#page']").on('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        let hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });

        // $('#footer #newsletter input').autofocus90;
    });
    

     // Sticky Nav Menu
     let nav_offset_top = $('.headerArea').height();

     function navbarfixed() {
         if ($('.headerArea').length){
             $(window).scroll(function() {
                 let scroll = $(window).scrollTop();

                 if (scroll >= nav_offset_top) {
                     $('.headerArea .main-menu').addClass('navbar__fixed');
                     $('.close-nav button').css('display', 'block');
                 } else {
                     $('.headerArea .main-menu').removeClass('navbar__fixed');
                     $('.close-nav button').css('display', 'none');
                     $('nav').show();
                 }

                 if (scroll >= 3300) {
                    $('#footer .top').css('display', 'block');
                 } else {
                    $('#footer .top').css('display', 'none');
                 }
             })
         }
     }
 
     navbarfixed();


    //  Handle navbar
    $('.close-nav button').on('click', function() {
        $('nav').toggle();
    });


    let $btns = $('#project-area .button-group button');

    $btns.click(function(e) {
        $('#project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('#project-area .grid').isotope({
            filter: selector
        });

        return false;
    });

    $('#project-area .button.group #btn1').trigger('click');

    $('#project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('[data-toggle="tooltip"').tooltip();
});