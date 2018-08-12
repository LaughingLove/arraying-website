$(document).ready(function () {
    // Smooth scrolling
    var scrollLink = $('.scroll');
    scrollLink.click(function (e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000)
  });
});