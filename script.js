// var swiper = new Swiper('.swiper-container', {
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

var x = document.getElementsByClassName("container__frame__item");

for(var i = 0; i < x.length; i++) {

    var el = x[i];

  var swiper = el.getElementsByClassName("swiper-container")[0];
  var nx = el.getElementsByClassName("swiper-next")[0];
  var pr = el.getElementsByClassName("swiper-prev")[0];

  new Swiper(swiper, {
        navigation: {
          nextEl: nx,
          prevEl: pr
        }
  });
}