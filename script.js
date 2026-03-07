document.addEventListener("DOMContentLoaded", function(){

var map = L.map('map').setView([1.3495, -77.1565], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([1.3495, -77.1565])
.addTo(map)
.bindPopup("Páramo / Volcán Bordoncillo - Buesaco, Nariño")
.openPopup();

});