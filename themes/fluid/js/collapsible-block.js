(function($){
  $(function(){
    $(".block--collapsible-image-content .collapse-content").on("click", collapseContent);
    $(".block--collapsible-image-content .expand-content").on("click", expandContent)
  });
  function collapseContent() {
    $(this).closest(".block").addClass("content-collapsed");
    return false;
  }
  function expandContent() {
    $(this).closest(".block").removeClass("content-collapsed");
    return false;
  }
})(jQuery);
