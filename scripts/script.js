CssClass = "SlideOut";

function ShowNowPlaying() {
  var div = document.getElementById("NowPlayingList");
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

function ShowSideBar() {
  var div = document.getElementById("SideBarId");
  console.log('function called');

  if (div.style.display === "block")
  {
    div.style.display = "none";
    console.log('if');
  }
  else
  {
    div.style.display = "block";
    console.log('else');
  }
}

