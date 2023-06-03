const swiper = new Swiper('.swiper', {
  // Optional parameters
  //   direction: 'vertical',
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 18,
  slidesPerGroup: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // что-бы сделать пагинацию кликабельной
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
