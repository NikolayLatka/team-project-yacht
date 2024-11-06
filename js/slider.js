$(function () {
  $('.yachts-list').slick({
    arrows: true,
    dots: false,
    fade: false,
    autoplay: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 2660,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(function () {
  $('.rewiew-list').slick({
    arrows: false,
    dots: true,
    fade: false,
    autoplay: false,
    slidesToScroll: 3,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 2660,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
