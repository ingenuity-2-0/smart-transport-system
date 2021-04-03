// ...................SEARCHBAR CHANGING........................ 
function findDerections() {
    document.getElementById("findDerections").style.display = "block";
    document.getElementById("nearbyStations").style.display = "none";
    document.getElementById("specificBus").style.display = "none";
}

function nearbyStations() {
    document.getElementById("findDerections").style.display = "none";
    document.getElementById("nearbyStations").style.display = "block";
    document.getElementById("specificBus").style.display = "none";
}

function specificBus() {
    document.getElementById("findDerections").style.display = "none";
    document.getElementById("nearbyStations").style.display = "none";
    document.getElementById("specificBus").style.display = "block";
}
// ...................SEARCHBAR CHANGING........................ 


// ..............GOOGLE MAP.................. 
// get and passing location 
var lat = "";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    
  } else {
    lat = "Geolocation is not supported by this browser.";
    console.log(lat);
  }
}

function showPosition(position) {
  lat = position.coords.latitude + "," + position.coords.longitude;
  console.log(lat);
  document.getElementById("userLocation").value = lat;
  document.getElementById("passLat").click();
}
// ..............GOOGLE MAP.................. 

// ..............MOVING BUS.................. 
function initialiseAxisImages() {
  var axis = document.getElementById('axis');
  var axisImages = axis.getElementsByTagName('img');
  
  axisImages[0].classList.remove('move-right');
  axisImages[1].classList.remove('move-left');
  }
  
  window.addEventListener('load', initialiseAxisImages, false);
// ..............MOVING BUS.................. 