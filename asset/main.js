var backgroundimgbox =document.getElementById("backgroundimgbox")
var backgroundimg =document.getElementById("backgroundimg")

function openfullimg(Pic){
     backgroundimgbox.style.display ="flex";
     backgroundimg.src=Pic
}
function closefullimg(){
    backgroundimgbox.style.display ="none";

}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }