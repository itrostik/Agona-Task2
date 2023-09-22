new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: true,
});

new Swiper(".swiper-brands", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".brands-button-next",
    prevEl: ".brands-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 6,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    475: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 4,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 6,
    },
  },
});
