
var swiper = new Swiper(".doctorSwiper", {
   autoplay: {
     delay: 5800,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});

var swiper = new Swiper(".mySwiperTesti", {
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".lastSwiper", {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
    clickable: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});
