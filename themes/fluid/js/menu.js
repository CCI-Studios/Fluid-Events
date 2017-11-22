(function($){
  $(function(){
    $(".show-menu").on("click", showMenu);
    $(".hide-menu").on("click", hideMenu);
    $(window).on("scroll", scroll);
    scroll();
  });
  function scroll() {
    if ($(window).scrollTop() >= 120) {
      $("body").addClass("show-logo");
    } else {
      $("body").removeClass("show-logo");
    }
  }
  function showMenu() {
    $("body").addClass("menu-open");
    return false;
  }
  function hideMenu() {
    $("body").removeClass("menu-open");
    return false;
  }
})(jQuery);
