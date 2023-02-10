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








function loading() {
  document.querySelectorAll(".bar").forEach(function(current) {
    let startWidth = 0;
    const endWidth = current.dataset.size;
    
    const interval = setInterval(frame, 20);

    function frame() {
      if (startWidth >= endWidth) {
        clearInterval(interval);
      } else {
          startWidth++;
          current.style.width = `${endWidth}%`;
          current.firstElementChild.innerText = `${startWidth}%`;
        }
     }
  });
}

setTimeout(loading, 1000);



function loading() {
  document.querySelectorAll(".single-bar").forEach(function(current) {
    let startWidth = 0;
    const endWidth = current.dataset.size;
    
    const interval = setInterval(frame, 20);

    function frame() {
      if (startWidth >= endWidth) {
        clearInterval(interval);
      } else {
          startWidth++;
          current.style.width = `${endWidth}%`;
          current.firstElementChild.innerText = `${startWidth}%`;
        }
     }
  });
}

setTimeout(loading, 1000);