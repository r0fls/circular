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
  $("body").css("background", "#101020");
  $("body").css("min-height", 500);
  var pad = 30;
  if ($(window).width() < 800) {
    var pad = 15;
  }
  if ($(window).width() < 550) {
    var pad = 6;
  }
  $(".fa").css({
    "color": "white",
    "padding-left": pad,
    "padding-right": pad,
  });
  var mtop = [dims*.2, 70].max();
  $(".icons").css({
    "width": dims*0.7,
    "margin": "auto",
    "border-radius": 3,
    "margin-top": mtop,
  });
  var pad = 30;
  var font = 40;
  if ($(window).width() < 800) {
    var pad = 15;
    var font = 32;
  }
  if ($(window).width() < 550) {
    var pad = 6;
    var font = 22;
  }
  $(".text").css({
    "text-align": "center",
    "color": "white",
    "padding-left": pad,
    "padding-right": pad,
  });
  var mtop = [dims*.01, 22].max();
  $(".text").css({
    "font-size": font,
    "width": dims*0.7,
    "margin": "auto",
    "margin-top": mtop,
  });
}
$('body').css('overflow-x', 'hidden');
$('body').css('overflow-y', 'hidden');
$(window).on('load', size);
$(window).on('ready', size);
$(window).on('resize', size);
