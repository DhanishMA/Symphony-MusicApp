NowPlyingAnim = "SlideOutRight";
SideBarAnim = "SlideOutLeft";

function ShowNowPlaying() {
  var div = document.getElementById("NowPlayingList");
  div.style.display = "block"
  if (NowPlyingAnim === "SlideOutRight") {
    div.classList.remove("SlideOutRight");
    div.classList.toggle("SlideInRight");
    NowPlyingAnim = "SlideInRight";
  } 
  else {
    div.classList.remove("SlideInRight");
    div.classList.toggle("SlideOutRight");
    NowPlyingAnim = "SlideOutRight";
  }

}

function ShowSideBar() {
  var div = document.getElementById("SideBarId");
  div.style.display = "block"
  if (SideBarAnim === "SlideOutLeft") {
    div.classList.remove("SlideOutLeft");
    div.classList.toggle("SlideInLeft");
    SideBarAnim = "SlideInLeft";
  } 
  else {
    div.classList.remove("SlideInLeft");
    div.classList.toggle("SlideOutLeft");
    SideBarAnim = "SlideOutLeft";
  }


  // var div = document.getElementById("SideBarId");
  // console.log('function called');

  // if (div.style.display === "block")
  // {
  //   div.style.display = "none";
  //   console.log('if');
  // }
  // else
  // {
  //   div.style.display = "block";
  //   console.log('else');
  // }
}

