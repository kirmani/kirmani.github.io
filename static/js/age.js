/*
 * age.js
 * Copyright (C) 2019 Sean Kirmani <sean@kirmani.io>
 *
 * Distributed under terms of the MIT license.
 */
$(function(){
  var oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  var firstDate = new Date(1995,03,01);
  var secondDate = new Date();

  var diffDays = Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
  $('#days').innerHTML = diffDays;
  $('#age').innerHTML = Math.floor(diffDays / 365);
});
