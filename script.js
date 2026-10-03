document.addEventListener("DOMContentLoaded", function () {

  /* ---------- MAPA CON RELIEVE ---------- */
  var coords = [1.3495, -77.1565];

  var relieve = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    attribution: 'Mapa: © <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA) | Datos © OpenStreetMap'
  });

  var satelite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 18,
    attribution: "Imágenes © Esri, Maxar, Earthstar Geographics"
  });

  var sombras = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 16,
    opacity: 0.45,
    attribution: "Relieve © Esri"
  });

  var map = L.map("map", {
    center: coords,
    zoom: 13,
    layers: [relieve],
    scrollWheelZoom: false // evita atascarse al bajar con la rueda; se activa al hacer clic
  });

  map.on("click", function () { map.scrollWheelZoom.enable(); });
  map.on("mouseout", function () { map.scrollWheelZoom.disable(); });

  L.control.layers(
    { "Relieve (topográfico)": relieve, "Satélite": satelite },
    { "Sombreado del terreno": sombras },
    { collapsed: false }
  ).addTo(map);

  L.control.scale({ metric: true, imperial: false }).addTo(map);

  L.marker(coords)
    .addTo(map)
    .bindPopup("<strong>Páramo / Volcán Bordoncillo</strong><br>Rosal del Monte, Buesaco, Nariño")
    .openPopup();

  /* ---------- BARRA SUPERIOR ---------- */
  var topbar = document.getElementById("topbar");
  var toTop = document.getElementById("toTop");

  function onScroll() {
    var y = window.scrollY;
    topbar.classList.toggle("solid", y > 60);
    toTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- PESTAÑA ACTIVA SEGÚN LA SECCIÓN VISIBLE ---------- */
  var links = document.querySelectorAll(".tabs a");
  var map_ids = {};
  links.forEach(function (a) { map_ids[a.getAttribute("href").slice(1)] = a; });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (a) { a.classList.remove("active"); });
        var link = map_ids[e.target.id];
        if (link) {
          link.classList.add("active");
          link.scrollIntoView({ inline: "center", block: "nearest" });
        }
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  Object.keys(map_ids).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});
