var loading_screen = pleaseWait({
  logo: "css/images/accuracy-logo.png",
  backgroundColor: 'lightgrey',
  loadingHtml: "<div class='spinner'><div class='double-bounce1'></div><div class='double-bounce2'></div></div>"
});

$(window).on("load", function() {
    loading_screen.finish();
});
