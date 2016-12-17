$ = jQuery;
Array.prototype.max = function() {
    return Math.max.apply(null, this);
};

Array.prototype.min = function() {
    return Math.min.apply(null, this);
};
function size() {
  var dims = [$(window).width(), $(window).height()].min()*.6;
  $(".image").css("width", dims);
  $(".image").css("height", dims);
  $(".image").css("margin-top", $(window).height()*.05);
  $(".image").css("border-radius", "%50");
  $(".content").css("width", $(window).width());
  $(".content").css("height", $(window).height());
  $(".content").css("min-height", 400);
  $("body").css("background", "#101020");
  $("body").css("min-height", 500);
  var pad = 15;
  var font = 40;
  $(".fa").css({
    "color": "white",
    "padding-left": pad,
    "padding-right": pad,
    "padding-bottom": pad,
  });
  var mtop = [$(window).height()*.15, 70].max();
  $(".icons").css({
    "width": dims*0.7,
    "margin": "auto",
    "margin": "auto",
    "border-radius": 3,
    "margin-top": mtop,
  });
  $(".text").css({
    "text-align": "center",
    "color": "white",
  });
  $(".text").css({
    "font-size": font,
    "margin": "auto",
    "margin-top": mtop/3,
    "margin-bottom": 75,
  });
}
$(window).on('load', size);
$(window).on('resize', size);
$(document).ready(function() {
  $('.content').fadeIn(750);
});
