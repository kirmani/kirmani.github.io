/*
 * home.js
 * Copyright (C) 2019 Sean Kirmani <sean@kirmani.io>
 *
 * Distributed under terms of the MIT license.
 */
var intro = [
  {
    'text': 'Like I\'m There',
  },
  {
    'text': 'Daydreaming',
  },
  {
    'text': 'Built for Imagination',
  },
  {
    'text': 'So, where\'s my robot?',
  },
];

$(document).ready(function() {
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
    /* Check the location of each desired element */
    $('.hide-me').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + window.innerHeight;
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},500);
      }
    });
  });
  var index = Math.floor(Math.random() * intro.length);
  $('#header .title').text(intro[index].text);
});
