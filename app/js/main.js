$(function () {
  $('.slider-top__items').slick({
    prevArrow: '<button type="button" class="slider-top__arrows slider-top__arrows--prev"><svg class="slider-top__arrows-img" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M0.384645 17.0149L16.3979 31.6079C16.9234 32.1307 17.7756 32.1307 18.3011 31.6079C18.8266 31.0851 18.8266 30.2369 18.3011 29.7141L3.25334 16L18.2998 2.2859C18.8252 1.76309 18.8252 0.914839 18.2998 0.392073C17.7743 -0.130695 16.9221 -0.130695 16.3966 0.392072L0.38331 14.9851C0.103241 15.2638 -0.0168347 15.6332 0.00187251 15.9986C-0.0155416 16.3654 0.104495 16.7348 0.384645 17.0149Z" fill="#505050"/>' +
      '</svg></button>',
    nextArrow: '<button type="button" class="slider-top__arrows slider-top__arrows--next"><svg class="slider-top__arrows-img" width="19" height="32" viewBox="0 0 19 32" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M18.3105 14.9851L2.29726 0.392105C1.77179 -0.130702 0.919579 -0.130702 0.394105 0.392105C-0.131368 0.914872 -0.131368 1.76312 0.394105 2.28593L15.4419 16L0.395438 29.7141C-0.130036 30.2369 -0.130036 31.0852 0.395438 31.6079C0.920912 32.1307 1.77312 32.1307 2.29855 31.6079L18.3119 17.0149C18.592 16.7362 18.712 16.3668 18.6933 16.0014C18.7107 15.6346 18.5907 15.2652 18.3105 14.9851Z" fill="#505050"/>' +
      '</svg></button>',
    infinite: false,

    responsive: [{
      breakpoint: 1201,
      settings: {
        dots: true,
        arrows: false,
        autoplay: true,
      }
    }, ]
  });

  $('.slider-brands').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,

    responsive: [{
        breakpoint: 993,
        settings: {
          slidesToShow: 4,
        }
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 577,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  //burger

  $('.header__burger-btn').on('click', function () {
    $('.burger').addClass('burger--active');
    $('body').addClass('lock');
  });

  $('body').on('click', function (e) {
    if (e.target.className == 'burger burger--active' || e.target.className == 'burger__close') {
      $('.burger').removeClass('burger--active');
      $('body').removeClass('lock');
    }
  });

  $('.header__user-search').on('click', function () {
    $('.header__form').toggleClass('header__form--active');
  });

  //form-placholder

  if ($(window).width() < 576) {
    $(".header__form-input").attr("placeholder", "Я ищу...");
  } else(
    $(".header__form-input").attr("placeholder", "Найти в магазине ...")
  );

  window.addEventListener("resize", function () {
    if ($(window).width() < 576) {
      $(".header__form-input").attr("placeholder", "Я ищу...");
    } else(
      $(".header__form-input").attr("placeholder", "Найти в магазине ...")
    );
  });

  //catalog-price

  var $range = $(".catalog__range-input"),
    $inputFrom = $(".catalog__from-input"),
    $inputTo = $(".catalog__to-input"),
    instance,
    min = $range.data.min,
    max = $range.data.max,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });

  //catalog-filter

  $('.catalog__filter-title').on('click', function () {
    $(this.parentNode).toggleClass('catalog__filter--active');
  })

  //catalog-filter-sort

  $('.catalog__btn').on('click', function () {
    $('.catalog__btn').removeClass('catalog__btn--active');
    $(this).addClass('catalog__btn--active');
  })

  $('.btn-horizontally').on('click', function () {
    $('.catalog__cards').addClass('cards-horizontally');
  })

  $('.btn-vertically').on('click', function () {
    $('.catalog__cards').removeClass('cards-horizontally');
  })

  //catalog-sort

  $('.catalog__select').styler({});
  let elem = document.getElementsByClassName('jq-selectbox__select-text');
  for (var i = 0; i < elem.length; i++) {
    elem[i].style.width = 'auto';
  }

  //filter-mix

  var products = document.querySelector('[data-ref="top-products"]');
  var stoks = document.querySelector('[data-ref="stoks"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer = mixitup(products, config);
  var mixer = mixitup(stoks, config);

})