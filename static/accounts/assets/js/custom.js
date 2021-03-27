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

function allBuses() {
    alert('jibon ber hoitese!');
}