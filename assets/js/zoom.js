// Initialize medium zoom.
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });

  // Publication preview full-screen lightbox.
  var $overlay = $('<div class="pub-preview-overlay"><button class="pub-preview-close" aria-label="Close">&times;</button><img></div>').appendTo("body");
  var $overlayImg = $overlay.find("img");

  function closeOverlay() {
    $overlay.removeClass("active");
    $overlayImg.attr("src", "");
  }

  $(document).on("click", ".pub-preview-link", function (e) {
    e.preventDefault();
    $overlayImg.attr("src", $(this).attr("href"));
    $overlay.addClass("active");
  });

  $overlay.on("click", function (e) {
    if (!$(e.target).is("img")) closeOverlay();
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape") closeOverlay();
  });
});
