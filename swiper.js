const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
   slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 93
    },
    // when window width is >= 640px
    640: {
        slidesPerView: 2,
        spaceBetween: 93
    },
    1024: {
        slidesPerView: 2,
        spaceBetween: 93
        
    },
    1100: {
        slidesPerView: 3,
        spaceBetween: 90
        
    }
  }
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
   slidesPerView: 1,
    spaceBetween: 55,
//    slidesPerView: 3,
//     spaceBetween: 30,
//     breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 1,
//       spaceBetween: 93
//     },
//     // when window width is >= 640px
//     640: {
//         slidesPerView: 1,
//         spaceBetween: 93
//     },
//     1024: {
//         slidesPerView: 1,
//         spaceBetween: 93
        
//     },
//     1100: {
//         slidesPerView: 1,
//         spaceBetween: 90
        
//     }
//   }
});