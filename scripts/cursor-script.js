// const $bigBall = document.querySelector('.cursor__ball--big');
// const $smallBall = document.querySelector('.cursor__ball--small');
// const $hoverables = document.querySelectorAll('.hoverable');

// // Listeners

function openProject(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
window.addEventListener("DOMContentLoaded", (event) => {

  openProject(event, "all")
  // document.body.addEventListener('mousemove', onMouseMove);
  // for (let i = 0; i < $hoverables.length; i++) {
  //   $hoverables[i].addEventListener('mouseenter', onMouseHover);
  //   $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  // }




});




