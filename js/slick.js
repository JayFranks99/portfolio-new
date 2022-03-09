$(window).on("load", function () {
    $('.slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      touchThreshold: 50,
      // swipeToSlide: true,
      // swipe: true,
      centerMode: false,
      prevArrow:"<button type='button' class='jay-prev j-btn2'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='jay-next j-btn'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
     //  customPaging: function(slick,index) {
     //   return '<a>' + (index + 1) + '</a>';
     // },
      accessibility: false, // remove border on click for items
      responsive: [{
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
            centerPadding: '40px'
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            speed: 500,
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 376,
          settings: {
            centerMode: true,
            centerPadding: '50px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 321,
          settings: {
            centerMode: false,
            slidesToScroll: 1,
            slidesToShow: 1
          }
        },
      ]
    });
  })
