CssClass = "SlideOut";

function ShowNowPlaying() {
  var div = document.getElementById("NowPlayingDiv");
  div.style.display = "block"
  if (CssClass === "SlideOut") {
    div.classList.remove("SlideOut");
    div.classList.toggle("SlideIn");
    CssClass = "SlideIn";
  } 
  else {
    div.classList.remove("SlideIn");
    div.classList.toggle("SlideOut");
    CssClass = "SlideOut";
  }

}