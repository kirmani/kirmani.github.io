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
  var index = Math.floor(Math.random() * intro.length);
  $('#header .title').text(intro[index].text);
});
