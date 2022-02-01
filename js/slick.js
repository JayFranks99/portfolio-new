$(document).ready(function() {
    $('.slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerMode: false,
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
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 1
          }
        },
      ]
    });
  })
