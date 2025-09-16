$(function() {
  $('.hamburger').click(function() {
    $('.menu').toggleClass('open');
    $(this).toggleClass('active');
  });
});

$(function() {
  $('.nav').click(function() {
    $('.menu').toggleClass('open');
    $('.active').toggleClass('active');
  });
});