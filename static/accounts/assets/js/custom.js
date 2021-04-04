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

// ..............TABLE SEARCHING.................. 
$(document).ready(function(){
$("#myInput").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $("#myTable tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});
});
// ..............TABLE SEARCHING.................. 



// ....................................SEARCH SUGGESTION ....................................... 
function autocomplete(inp, arr) {

var currentFocus;

inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
  
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
  
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
 
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function(e) {
            inp.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
        });
        a.appendChild(b);
      }
    }
});
inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
    
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) { 
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
});
function addActive(x) {
  if (!x) return false;
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = (x.length - 1);
  x[currentFocus].classList.add("autocomplete-active");
}
function removeActive(x) {
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("autocomplete-active");
  }
}
function closeAllLists(elmnt) {
  var x = document.getElementsByClassName("autocomplete-items");
  for (var i = 0; i < x.length; i++) {
    if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

var places = ["Mohammadpur", "Kamalapur", "Kamalapur", "Gabtoli", "Jatrabari", "Gabtoli", "Savar", "Fulbaria", "Ansar Camp", "Nandan Park", "Motijheel", "Mirpur - 1", "Shia Masjid", "Mirpur 14", "Balughat", "Chasara", "Duaripara", "Nobinagar", "Dhour", "Chiriakhana", "Sadarghat", "Mirpur 14", "Sadarghat", "Gabtoli", "Gabtoli", "Mirpur 10", "Japan Garden City", "Duaripara", "Azimpur", "Mirpur 12", "Mirpur 12", "Mirpur 12", "Sign Board", "Savar", "Gulistan", "Azimpur", "Gabtoli", "Madanpur", "Motijheel", "Motijheel", "Mohammadpur", "Kamalapur", "Bhulta", "Mirpur 14", "Mirpur 14", "Bhashantek", "Fulbaria", "Motijheel", "Postagola", "Azimpur", "Motijheel", "Police Plaza", "Tajmahal Road", "Chiriakhana", "Pallabi", "Golap Shah Mazar", "Keraniganj", "Vashantek", "Mohammadpur", "Ansar Camp", "Motijheel", "Mirpur 14", "Fulbaria", "Motijheel", "Mirpur 12", "Metro Hall", "Chandra", "Savar", "Mirpur 14", "Jatrabari", "Ansar Camp", "Agargaon", "Gabtoli", "Mirpur - 1", "Mirpur 12", "Chiriakhana", "Savar", "Mirpur 12", "Mohammadpur", "Chittagong Road", "Kalabagan", "Chittagong Road", "Mohammadpur", "ECB Chottor", "Azimpur", "Mirpur 12", "Baipayl", "Mirpur 14", "Mohammadpur", "Chasara", "Mohammadpur", "Chittagong Road", "Chiriakhana", "Chiriakhana", "Motijheel", "Nandan Park", "Gabtoli", "Bosila", "Gabtoli", "Fulbaria", "Mawa", "Bosila", "Gabtoli", "Postagola", "Mohammadpur", "Chittagong Road", "Mirpur 12", "Japan Garden City", "Gabtoli", "Gabtoli", "Keraniganj", "Gabtoli", "Chiriakhana", "Mirpur 12", "Postagola", "Sadarghat", "Bosila", "Mirpur 12", "Gabtoli", "Motijheel", "Mirpur 12", "Jatrabari", "Chittagong Road", "Fulbaria", "Sadarghat", "Chittagong Road", "Sign Board", "Mirpur 12", "Sadarghat", "Savar", "Chiriakhana", "Chiriakhana", "Mohammadpur", "Shia Masjid", "Chiriakhana", "Sign Board", "Mawa", "Mirpur - 1", "Mirpur D.O.H.S", "Mirpur 10", "Jatrabari", "Sadarghat", "Sadarghat", "Azimpur", "Nandan Park", "Azimpur", "Mirpur 14", "Chiriankhana", "Hemayetpur", "Savar", "Chittagong Road", "Postagola", "Mirpur 10", "Mirpur D.O.H.S", "Mirpur 14", "Banani", "Ghatar Char", "Nandan Park", "Motijheel", "Kodomtoli", "Vashantek", "Mohammadpur", "Gabtoli", "Azimpur", "Japan Garden City", "Banani", "Sign Board", "Banasree", "Ghatar Char", "Hemayetpur", "Abdullahpur", "Mohammadpur", "Ansar Camp", "Azimpur", "Gulistan", "Jigatola", "Gulistan", "Gulistan", "Gabtoli", "Gabtoli", "Babu Bazar", "Palashi Circle", "Mirpur 12", "Mohammadpur"];
var busName = ["13 No", "6 No", "6 No", "7 No", "8 No", "Achim Paribahan", "Agradut-Boishakhi", "Airport Bangabandhu Avenue", "Akik Paribahan", "Al Madina Plus One", "Al Makka Transport", "Alif Enterprise", "Alif Enterprise", "Alif", "Alike", "Green Anabil", "Ashirbad Paribahan", "Ashulia Classic", "Asmani Paribahan", "Ayat", "Azmery Glory", "Bahon", "Balaka Paribahan", "Basumati Pvt. Ltd.", "Basumati Transport", "Best Transport", "Bhuiyan Paribahan", "Bihanga Paribahan", "Bihanga Paribahan", "Bihanga", "Bikalpa Auto Service", "Bikalpa City Super Service", "Bikash Paribahan", "Boishakhi Paribahan", "Bondhu Paribahan", "Bornomala Paribahan", "Brothers", "BRTC", "BRTC", "BRTC", "BRTC", "BRTC", "BRTC", "Cantonment Bus Service", "Cantonment Mini Service", "Champion", "D Link", "D One Transport", "Desh Bangla", "Dewan", "Dhaka Paribahan", "Dhaka Chaka ", "Dipon", "Dishari Paribahan", "Druti Paribahan", "ETC Transport", "Everest Paribahan", "First Ten", "FTCL", "Galaxy Line", "Gazipur Paribahan", "Grameen", "Grameen Shubheccha", "Green Dhaka", "Haji Transport", "Himachol", "Intercity", "Itihas Paribahan ", "Itihas Paribahan", "J M Super Paribahan", "Jabale Nur Paribahan", "Jabale Nur Paribahan", "Janjabil", "Kanak", "Khajababa Paribahan", "Kironmala Paribahan", "Labbaik", "Lams Paribahan", "Malancha Transport", "Manjil Express", "Meghla Transport", "Meshkat Transport", "Midline", "Mirpur Link", "Mirpur Metro Services", "Mirpur United Service", "Modhumoti Paribahan", "Mohona", "Moitri", "Moumita Transport", "MTCL 2", "Nilachol", "Nobokoli Paribahan", "Nur E Makka Paribahan", "Omama International", "One Transport", "Pallabi Super Service", "Poristhan Paribahan", "Prottoy Transport Co. Ltd.", "Pravati Banasree Paribahan", "Prochesta", "Projapoti Paribahan", "Rabrab Paribahan", "Raida", "Raja City", "Rajanigandha", "Rajdhani Super Service", "Shahriar Paribahan", "Roich", "Ramzan", "Runway Express", "Rupa Paribahan", "Rupkotha Paribahan", "Safety Druti", "Salsabil", "Savar Paribahan", "Shadhin", "Shadhin Express", "Shahria Enterprise", "Shotabdi Transport", "Shikhar Paribahan", "Shikor Paribahan", "Shubheccha", "Shuvojatra", "Skyline", "Somota Paribahan", "Somoy", "Somoy Niyantran", "Supravat Special Service", "Swajan Paribahan", "Talukdar", "Tanjil Paribahan", "Taranga Plus", "Tetuliya Paribahan", "The New Vision", "Thikana", "Thikana Express", "Trans Silva", "Trust Transport Services", "Trust Transport Services", "Great Turag", "Victor Classic", "Victor Paribahan", "VIP 27", "Welcome", "Smart Winner", "Zarif", "Modhumoti Paribahan", "Rajdhani Super Service", "M M Lovely", "City Link", "Raja City", "Trust Transport Services", "Trust Transport Services AC", "Power Paribahan", "Dhaka Chaka", "Ark Transport", "Lal Sobuj AC", "BRTC", "Akash Enterprise", "Purbachal Logistics & Transport Ltd.", "BRTC", "BRTC", "Best Shatabdi AC", "Alif Enterprise", "Gulshan Chaka", "Anabil", "Siyam Transport", "Kamal Plus Paribahan", "Arnob", "Iqbal Enterprise AC", "T Three Paribahan", "Tur Paribahan Ltd.", "V.I.P", "Glory Express", "Uttara Paribahan", "Green Bangla", "Ashian Transport", "Central", "Trust Transport Services ", "BRTC", "BRTC Chokrakar AC", "Ayat", "MTCL"];

autocomplete(document.getElementById("myInput"), busName);
autocomplete(document.getElementById("inputFrom"), places);
autocomplete(document.getElementById("inputTo"), places);

// .............................................SEARCH SUGGESTION.................................................... 
