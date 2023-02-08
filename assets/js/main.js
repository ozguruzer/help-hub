var swiper = new Swiper(".mySwiper", {
watchSlidesProgress: true,
slidesPerView: 6,
loop: true,
});



var swiper = new Swiper(".cauSwiper .swiper-container", {
slidesPerView: 1,
slidesPerGroup: 1,
spaceBetween: 10,
loop: false,
navigation: {
  nextEl: ".cauSwiper .swiper-button-next",
  prevEl: ".cauSwiper .swiper-button-prev",
},
breakpoints: {
  767: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20
  },
  993: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30
  }
},
pagination: {
  el: ".cauSwiper .swiper-pagination",
  clickable: true,
},
});