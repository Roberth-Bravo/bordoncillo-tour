document.addEventListener("DOMContentLoaded", function () {

  var reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- MAPA CON RELIEVE ---------- */
  var coords = [1.2183686812904715, -77.11162817214993];

  var relieve = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    attribution: 'Mapa: © <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA) | Datos © OpenStreetMap'
  });
  var satelite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 18,
    attribution: "Imágenes © Esri, Maxar, Earthstar Geographics"
  });
  var sombras = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 16, opacity: 0.45, attribution: "Relieve © Esri"
  });

  var map = L.map("map", { center: coords, zoom: 40, layers: [relieve], scrollWheelZoom: false });
  map.on("click", function () { map.scrollWheelZoom.enable(); });
  map.on("mouseout", function () { map.scrollWheelZoom.disable(); });

  L.control.layers(
    { "Relieve (topográfico)": relieve, "Satélite": satelite },
    { "Sombreado del terreno": sombras },
    { collapsed: false }
  ).addTo(map);
  L.control.scale({ metric: true, imperial: false }).addTo(map);

  L.marker(coords).addTo(map)
    .bindPopup("<strong>Páramo / Volcán Bordoncillo</strong><br>Rosal del Monte, Buesaco, Nariño")
    .openPopup();

  /* ---------- BARRA SUPERIOR Y BOTÓN SUBIR ---------- */
  var topbar = document.getElementById("topbar");
  var toTop = document.getElementById("toTop");
  function onScroll() {
    var y = window.scrollY;
    topbar.classList.toggle("solid", y > 60);
    toTop.classList.toggle("show", y > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- PESTAÑA ACTIVA SEGÚN LA SECCIÓN VISIBLE ---------- */
  var links = document.querySelectorAll(".tabs a");
  var porId = {};
  links.forEach(function (a) { porId[a.getAttribute("href").slice(1)] = a; });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (a) { a.classList.remove("active"); });
        var l = porId[e.target.id];
        if (l) { l.classList.add("active"); l.scrollIntoView({ inline: "center", block: "nearest" }); }
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  Object.keys(porId).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  /* ---------- FOTOS ROTANDO EN EL ENCABEZADO ---------- */
  var heroSlides = document.querySelectorAll(".hero-slides .slide");
  var h = 0;
  if (heroSlides.length > 1 && !reducir) {
    setInterval(function () {
      heroSlides[h].classList.remove("active");
      h = (h + 1) % heroSlides.length;
      heroSlides[h].classList.add("active");
    }, 5000);
  }

  /* ---------- RELOJ DIGITAL (hora de Colombia) ---------- */
  var elHora = document.getElementById("clockTime");
  var elFecha = document.getElementById("clockDate");
  var fmtHora = new Intl.DateTimeFormat("es-CO", { timeZone: "America/Bogota", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  var fmtFecha = new Intl.DateTimeFormat("es-CO", { timeZone: "America/Bogota", weekday: "long", day: "numeric", month: "long" });
  function tick() {
    var ahora = new Date();
    elHora.textContent = fmtHora.format(ahora);
    elFecha.textContent = fmtFecha.format(ahora);
  }
  tick();
  setInterval(tick, 1000);

  /* ---------- INFORMACIÓN GENERAL INTERACTIVA ---------- */
  var chips = document.querySelectorAll(".chip");
  var paneles = document.querySelectorAll(".panel");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("active"); c.setAttribute("aria-selected", "false"); });
      paneles.forEach(function (p) { p.classList.remove("active"); p.hidden = true; });
      chip.classList.add("active");
      chip.setAttribute("aria-selected", "true");
      var p = document.getElementById(chip.dataset.panel);
      p.hidden = false;
      p.classList.add("active");
    });
  });

  /* ---------- CARRUSEL DE FOTOS ---------- */
  var carousel = document.getElementById("carousel");
  var track = document.getElementById("track");
  var total = track.children.length;
  var dotsBox = document.getElementById("dots");
  var i = 0, auto = null;

  for (var n = 0; n < total; n++) {
    var d = document.createElement("button");
    d.className = "dot";
    d.setAttribute("aria-label", "Ir a la foto " + (n + 1));
    d.dataset.i = n;
    dotsBox.appendChild(d);
  }
  var dots = dotsBox.querySelectorAll(".dot");

  function ir(k) {
    i = (k + total) % total;
    track.style.transform = "translateX(-" + (i * 100) + "%)";
    dots.forEach(function (x, j) { x.classList.toggle("active", j === i); });
  }
  function iniciar() { if (!reducir) { detener(); auto = setInterval(function () { ir(i + 1); }, 4500); } }
  function detener() { if (auto) { clearInterval(auto); auto = null; } }

  document.getElementById("prev").addEventListener("click", function () { ir(i - 1); iniciar(); });
  document.getElementById("next").addEventListener("click", function () { ir(i + 1); iniciar(); });
  dotsBox.addEventListener("click", function (e) {
    if (e.target.dataset.i !== undefined) { ir(parseInt(e.target.dataset.i, 10)); iniciar(); }
  });
  carousel.addEventListener("mouseenter", detener);
  carousel.addEventListener("mouseleave", iniciar);

  // Deslizar con el dedo en el celular
  var x0 = null;
  carousel.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; detener(); }, { passive: true });
  carousel.addEventListener("touchend", function (e) {
    if (x0 !== null) {
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) ir(dx < 0 ? i + 1 : i - 1);
      x0 = null;
    }
    iniciar();
  }, { passive: true });

  // Flechas del teclado cuando el carrusel tiene el foco
  carousel.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { ir(i - 1); }
    if (e.key === "ArrowRight") { ir(i + 1); }
  });

  ir(0);
  iniciar();
});
