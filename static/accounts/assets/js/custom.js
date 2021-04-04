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

var places = ["300 Feet", "Abdullahpur", "Adabor", "Adamjee College", "Agargaon", "Airport", "Ajimpur", "Amin Bazar", "Aminbazar", "Ansar Camp", "Arambagh", "Asad Gate", "Ashulia", "Ashulia Bazar", "Azampur", "Azimpur", "Babu Bazar", "Badda", "Baipayl", "Baitul Mukarram", "Bakshi Bazar", "Balughat", "Banani", "Banasree", "Bangla College", "Bangla Motor", "Baromi", "Basabo", "Bashtola", "Bashundhara", "Bashundhara Ra", "Bata Signal", "Beribadh Tin Rastar More", "Bhashantek", "Bhulta", "Bijoy Sarani", "Birulia", "Board Bazar", "Bogabari", "Borabo", "Borpa", "Bosila", "Bot Tola", "Chairma Bari", "Chairman Bari", "Chandra", "Chankar Pul", "Chankhar Pul", "Chasara", "Chashara", "Cherag Ali", "Chiriakhana", "Chiriankhana", "Chittagong Road", "City College", "CMH", "College Gate", "Darussalam", "Darusslam", "Daynik Bangla More", "Demra", "Demra Staff Quarter", "Dhaka Udyan", "Dhakeshwari", "Dhamnondi 27", "Dhamnondi 32", "Dhamrai", "Dhanmondi 15", "Dhanmondi 27", "Dhanmondi 32", "Dholairpar", "Dhour", "Dhour Beribadh", "Dhupkhola", "Diabari", "Dogachi", "Doyagonj", "Duaripara", "Eastern Housing", "ECB Chottor", "EPZ", "Fakirapool", "Fantasy Kingdom", "Farmgate", "Fulbaria", "Gabtoli", "Gandaria", "Garrison", "Gazipur", "Gazipur Bypass", "Gazipur Chowrasta", "Gendaria", "Ghatar Char", "Golap Shah Mazar", "Golapbag", "Golapbag Chowrasta", "GPO", "Gulistan", "Gulshan 1", "Gulshan 2", "Gulshan Bridge", "Hasnabad", "Hazaribag", "Hemayetpur", "High Court", "House Building", "HouseBuilding", "IDB", "Ittefaq", "Jahangir Gate", "Jakir Hossain Road", "Jalkuri", "Jamgara", "Jamgora", "Jamuna Future Park", "Japan Garden City", "Jarun", "Jasimuddin", "Jatra Bari", "Jatrabari", "Jigatola", "Jonopath", "Jonopath More", "Joydebpur", "Jurain", "Kakoli", "Kakrail", "Kalabagan", "Kalampur", "Kallayanpur", "Kallyanpur", "Kalshi", "Kamalapur", "Kamar Para", "Kamarpara", "Kamrangirchar", "Kanchan Bridge", "Kanchpur", "Kashimpur", "Katabon", "Kawlar", "Kawran Bazar", "Kazipara", "Kazla", "Keraniganj", "Khamarbari", "Khilgaon", "Khilgaon Flyover", "Khilkhet", "Kochukhet", "Kodomtoli", "Kolabagan", "Konabai", "Konabari", "Konapara", "Kuril", "Kuril Bishwa Road", "Link Road", "Madanpur", "Madhya Badda", "Malibagh", "Malibagh More", "Malibagh Railgate", "Manik Mia Avenue", "Manik Nagar", "Manikganj", "Matuail", "Mawa", "Mazar Road Konabari", "Merul", "MES", "Metro Hall", "Mill Gate", "Mirpur 1", "Mirpur 10", "Mirpur 11", "Mirpur 12", "Mirpur 13", "Mirpur 14", "Mirpur 2", "Mirpur Cantonment", "Mirpur DOHS", "Mirpur Diabari", "Mirpur 1", "Mitford Ghat", "Moghbazar", "Mohakhali", "Mohakhali Chairman Bari", "Mohammadpur", "Motijheel", "Motsho Bhaban", "Mouchak", "Mugdapara", "Nabisco", "Nadda", "Nandan Park", "Narshinghapur", "National University", "Natun Bazar", "Nawabganj", "Naya Bazar", "Naya Paltan", "New Market", "Nila Market", "Nilkhet", "Nishchintapur", "Nobaberbag", "Nobinagar", "Noyapara", "Old Airport", "Palashi Circle", "Pallabi", "Palli Bidyut", "Paltan", "Panchaboti", "Panthapath", "Paturia", "Police Plaza", "Postagola", "Press Club", "Proshika More", "Purobi", "Rainkhola", "Rajarbagh", "Rajdhani Super Market", "Rajendrapur", "Rajlakshm", "Rajlakshmi", "Rampura", "Rampura Bridge", "Ray Shaheb Bazar", "Rayer Bazar", "Rayerbag", "Ring Road", "Rupnagar", "Rupnagar Abashik More", "Rupshi", "Sadarghat", "Saddam Market", "Sagufta", "Salimullah Road", "Sanarpar", "Satrasta", "Saudi Colony", "Savar", "Savar Cantonment", "Sayedabad", "Science Lab", "Shabag", "Shahbag", "Shahjadpur", "Shainik Club", "Shamashpur", "Shankar", "Shantinagar", "Shewra", "Shewrapara", "Shia Masjid", "Shib Bari", "Shibo Market", "Shibu Market", "Shimultola", "Shishu ela", "Shishu Mela", "Shiyal Bari", "Shonir Akhra", "Showari Ghat", "Shukrabad", "Shyamoli", "Sign Board", "Sign Borad", "Signal", "Sikder Medical", "Sonir Akhra", "Sony Hall", "Sreepur", "Staff Quarter", "Staff Road", "Star Kabab", "Station Road", "Sura Bari", "Tajmahal Road", "Taltola", "Tamanna World Family Park", "Tarabo", "Technical", "Tikatuli", "Tolarbag", "Tongi", "Tongi Station Road", "Uttar Badda", "Uttar Badda Bazar", "Uttara", "Vashantek", "Vogra Bypass", "Wireless", "Wireless Gate", "Wireless More", "Workshop", "Zia Udyan", "Zirabo", "Zirani Bazar"];
var busName = ["13 No", "6 No", "7 No", "8 No", "Achim Paribahan", "Agradut-Boishakhi", "Airport Bangabandhu Avenue", "Akik Paribahan", "Al Madina Plus One", "Al Makka Transport", "Alif Enterprise", "Alif", "Alike", "Green Anabil", "Ashirbad Paribahan", "Ashulia Classic", "Asmani Paribahan", "Ayat", "Azmery Glory", "Bahon", "Balaka Paribahan", "Basumati Pvt Ltd", "Basumati Transport", "Best Transport", "Bhuiyan Paribahan", "Bihanga Paribahan", "Bihanga", "Bikalpa Auto Service", "Bikalpa City Super Service", "Bikash Paribahan", "Boishakhi Paribahan", "Bondhu Paribahan", "Bornomala Paribahan", "Brothers", "BRTC", "Cantonment Bus Service", "Cantonment Mini Service", "Champion", "D Link", "D One Transport", "Desh Bangla", "Dewan", "Dhaka Paribahan", "Dhaka Chaka AC", "Dipon", "Dishari Paribahan", "Druti Paribahan", "ETC Transport", "Everest Paribahan", "First Ten", "FTCL", "Galaxy Line", "Gazipur Paribahan", "Grameen", "Grameen Shubheccha", "Green Dhaka AC", "Haji Transport", "Himachol", "Intercity", "Itihas Paribahan", "Itihas Paribahan", "J M Super Paribahan", "Jabale Nur Paribahan", "Janjabil", "Kanak", "Khajababa Paribahan", "Kironmala Paribahan", "Labbaik", "Lams Paribahan", "Malancha Transport", "Manjil Express", "Meghla Transport", "Meshkat Transport", "Midline", "Mirpur Link", "Mirpur Metro Services", "Mirpur United Service", "Modhumoti Paribahan", "Mohona", "Moitri", "Moumita Transport", "MTCL 2", "Nilachol", "Nobokoli Paribahan", "Nur E Makka Paribahan", "Omama International", "One Transport", "Pallabi Super Service", "Poristhan Paribahan", "Prottoy Transport Co Ltd", "Pravati Banasree Paribahan", "Prochesta", "Projapoti Paribahan", "Rabrab Paribahan", "Raida", "Raja City", "Rajanigandha", "Rajdhani Super Service", "Shahriar Paribahan", "Roich", "Ramzan", "Runway Express", "Rupa Paribahan", "Rupkotha Paribahan", "Safety Druti", "Salsabil", "Savar Paribahan", "Shadhin", "Shadhin Express", "Shahria Enterprise", "Shotabdi Transport", "Shikhar Paribahan", "Shikor Paribahan", "Shubheccha", "Shuvojatra", "Skyline", "Somota Paribahan", "Somoy", "Somoy Niyantran", "Supravat Special Service", "Swajan Paribahan", "Talukdar", "Tanjil Paribahan", "Taranga Plus", "Tetuliya Paribahan", "The New Vision", "Thikana", "Thikana Express", "Trans Silva", "Trust Transport Services", "Great Turag", "Victor Classic", "Victor Paribahan", "VIP 27", "Welcome", "Smart Winner", "Zarif", "M M Lovely", "City Link", "Trust Transport Services AC", "Power Paribahan", "Dhaka Chaka", "Ark Transport", "Lal Sobuj AC", "Akash Enterprise", "Purbachal Logistics & Transport Ltd.", "Best Shatabdi AC", "Gulshan Chaka", "Anabil", "Siyam Transport", "Kamal Plus Paribahan", "Arnob", "Iqbal Enterprise AC", "T Three Paribahan", "Tur Paribahan Ltd.", "V.I.P", "Glory Express", "Uttara Paribahan", "Green Bangla", "Ashian Transport", "Central", "BRTC Chokrakar AC", "MTCL"];

autocomplete(document.getElementById("myInput"), busName);
autocomplete(document.getElementById("inputFrom"), places);
autocomplete(document.getElementById("inputTo"), places);

// .............................................SEARCH SUGGESTION.................................................... 
