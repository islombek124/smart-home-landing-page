$(".toggleBtn").click(() => {
  $("#mobile-menu").slideToggle();
  $("#mobile-menu .navbar a").click(() => {
    $("#mobile-menu").slideUp();
  });
});

$(() => {
  $("#accordion").accordion();
});