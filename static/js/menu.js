/*
 * menu.js
 * Copyright (C) 2019 Sean Kirmani <sean@kirmani.io>
 *
 * Distributed under terms of the MIT license.
 */
$(function(){
  $( "#logo2" ).click(function() {
      $(".speech-bubble" ).toggleClass("active");
      $('.menu-icon .top').toggleClass('active');
      $('.menu-icon .middle').toggleClass('active');
      $('.menu-icon .bottom').toggleClass('active');
  });
})();
