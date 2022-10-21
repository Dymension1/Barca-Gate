function toogle() {
  // const header = document.querySelector("#header");
  // header.classList.toogle("active1");

  setTimeout(() => location.href = "https://www.fcbarcelona.es/es/", 1000);
}

document.getElementById('chatbot').removeAttribute('left');


$(document).ready(function () { 
  $('.ir-arriba').click(function () { $('body,html').animate({ scrollTop: '0px' }, 1000); });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) { $('.ir-arriba').slideDown(600); } else { $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function () { $('body,html').animate({ scrollTop: '1000px' }, 1000); });


}); //Hacia arriba

function irArriba() {
  $('.ir-arriba').click(function () { $('body,html').animate({ scrollTop: '0px' }, 1000); });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) { $('.ir-arriba').slideDown(600); } else { $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function () { $('body,html').animate({ scrollTop: '1000px' }, 1000); });
}