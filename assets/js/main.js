var swiper = new Swiper(".mySwiper", {
watchSlidesProgress: true,
slidesPerView: 6,
loop: true,
});



var swiper = new Swiper(".cauSwiper", {
slidesPerView: 3,
spaceBetween: 30,
slidesPerGroup: 1,
loop: true,
loopFillGroupWithBlank: true,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
});