:root{
  --verde:#1f4d3a;
  --verde-osc:#123226;
  --musgo:#5d7f4f;
  --frailejon:#b9b48a;
  --niebla:#eef2ee;
  --papel:#f8faf7;
  --tinta:#1d2420;
  --agua:#2f7f8f;
  --h:64px;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:calc(var(--h) + 8px)}
body{font-family:'Public Sans',system-ui,sans-serif;background:var(--papel);color:var(--tinta);line-height:1.7}
h1,h2,h3,.brand{font-family:'Fraunces',Georgia,serif}
a:focus-visible,button:focus-visible{outline:3px solid var(--frailejon);outline-offset:3px}

/* Barra de pestañas */
.topbar{position:fixed;inset:0 0 auto 0;height:var(--h);z-index:1000;display:flex;align-items:center;gap:24px;padding:0 28px;color:#fff;transition:background .3s,box-shadow .3s}
.topbar.solid{background:var(--verde-osc);box-shadow:0 2px 14px rgba(0,0,0,.25)}
.brand{color:#fff;text-decoration:none;font-weight:700;font-size:1.15rem;white-space:nowrap}
.tabs{display:flex;gap:4px;margin-left:auto;overflow-x:auto;scrollbar-width:none}
.tabs::-webkit-scrollbar{display:none}
.tabs a{color:rgba(255,255,255,.85);text-decoration:none;font-size:.92rem;font-weight:500;padding:8px 14px;border-radius:999px;white-space:nowrap;transition:background .2s,color .2s}
.tabs a:hover{background:rgba(255,255,255,.14);color:#fff}
.tabs a.active{background:#fff;color:var(--verde-osc)}

/* Hero */
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;color:#fff;
  background:linear-gradient(180deg,rgba(10,25,18,.55) 0%,rgba(10,25,18,.35) 45%,rgba(10,25,18,.85) 100%),url("./img/bordoncillo.jpg") center/cover;
  background-attachment:fixed}
.hero-content{max-width:1200px;width:100%;margin:0 auto;padding:120px 28px 48px}
.hero-place{font-size:1.05rem;color:var(--frailejon);font-weight:600;margin-bottom:10px}
.hero-title{font-size:clamp(2.8rem,8vw,6rem);line-height:1.02;font-weight:700;letter-spacing:-.02em;margin-bottom:18px}
.hero-subtitle{font-size:1.25rem;max-width:560px;margin-bottom:30px;color:rgba(255,255,255,.92)}
.hero-actions{display:flex;flex-wrap:wrap;gap:14px}
.btn-primary,.btn-ghost,.btn-light{display:inline-block;padding:14px 28px;border-radius:999px;font-weight:600;text-decoration:none;transition:.25s}
.btn-primary{background:#25a064;color:#fff}
.btn-primary:hover{background:#1c8050;transform:translateY(-2px)}
.btn-ghost{border:2px solid rgba(255,255,255,.7);color:#fff}
.btn-ghost:hover{background:rgba(255,255,255,.15)}
.btn-light{background:#fff;color:var(--verde-osc)}
.btn-light:hover{background:var(--frailejon)}

.facts{list-style:none;display:grid;grid-template-columns:repeat(4,1fr);background:rgba(10,25,18,.72);backdrop-filter:blur(8px);border-top:1px solid rgba(255,255,255,.18)}
.facts li{padding:20px 28px;border-right:1px solid rgba(255,255,255,.14);display:flex;flex-direction:column}
.facts li:last-child{border-right:0}
.facts strong{font-family:'Fraunces',serif;font-size:1.6rem}
.facts span{font-size:.9rem;color:rgba(255,255,255,.75)}

/* Secciones */
.section{padding:96px 24px}
.alt{background:var(--niebla)}
.container{max-width:1200px;margin:0 auto}
.narrow{max-width:820px}
h2{font-size:clamp(2rem,4vw,2.8rem);color:var(--verde);margin-bottom:12px;line-height:1.15}
h2::after{content:"";display:block;width:56px;height:4px;border-radius:2px;background:var(--frailejon);margin:16px 0 36px}
h3{color:var(--verde);margin-bottom:10px;font-size:1.35rem}
.lead{margin:-16px 0 24px;color:#4b5a52}
.prose p{margin-bottom:1.1em;max-width:68ch}
.grid-2{display:grid;grid-template-columns:1.15fr 1fr;gap:56px;align-items:start}
.image-real{position:sticky;top:90px}
.image-real img{width:100%;border-radius:14px;box-shadow:0 18px 40px rgba(18,50,38,.25);display:block}

.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:28px}
.card{background:#fff;padding:32px;border-radius:14px;border-top:5px solid var(--musgo);box-shadow:0 6px 24px rgba(18,50,38,.08)}
.card p+p{margin-top:.8em}
.card.price:nth-child(2){border-top-color:var(--agua)}
.amount{font-family:'Fraunces',serif;font-size:2.4rem;color:var(--verde);line-height:1.1;margin-bottom:12px}
.amount small{font-family:'Public Sans',sans-serif;font-size:.9rem;color:#5b6a62}
.cta-row{margin-top:36px}

.list-box{background:#fff;padding:32px;border-radius:14px;box-shadow:0 6px 24px rgba(18,50,38,.08)}
.list-box ul{list-style:none}
.list-box li{padding:10px 0 10px 34px;position:relative;border-bottom:1px solid #e6ece7}
.list-box li:last-child{border-bottom:0}
.list-box li::before{position:absolute;left:0;top:9px;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-size:.8rem;font-weight:700;color:#fff}
.yes li::before{content:"✓";background:#25a064}
.no li::before{content:"✕";background:#b84a3a}
.no h3{color:#8f3a2d}

#map{height:520px;border-radius:14px;box-shadow:0 12px 34px rgba(18,50,38,.2);z-index:1}

/* Pie y creador */
footer{background:var(--verde-osc);color:#fff}
.creator{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:28px;padding:56px 24px}
.creator-label{color:var(--frailejon);font-weight:600;font-size:.95rem}
.creator h3{color:#fff;font-size:1.8rem;margin:4px 0 6px}
.creator p{color:rgba(255,255,255,.8)}
.creator-links{display:flex;flex-direction:column;align-items:flex-start;gap:14px}
.creator-links>a:not(.btn-light){color:#fff;text-decoration:underline;text-underline-offset:4px}
.copy{text-align:center;padding:18px;font-size:.85rem;color:rgba(255,255,255,.6);border-top:1px solid rgba(255,255,255,.12)}

/* Botones flotantes */
.fab{position:fixed;right:20px;bottom:20px;z-index:900;background:#25a064;color:#fff;text-decoration:none;font-weight:600;padding:12px 20px;border-radius:999px;box-shadow:0 6px 18px rgba(0,0,0,.3)}
.fab:hover{background:#1c8050}
.to-top{position:fixed;right:20px;bottom:76px;z-index:900;width:44px;height:44px;border:0;border-radius:50%;background:var(--verde);color:#fff;font-size:1.2rem;cursor:pointer;opacity:0;pointer-events:none;transition:opacity .3s}
.to-top.show{opacity:1;pointer-events:auto}

@media(max-width:900px){
  .topbar{flex-direction:column;align-items:stretch;gap:0;height:auto;padding:10px 12px 8px}
  .brand{font-size:1rem;padding:0 6px 6px}
  .tabs{margin:0}
  :root{--h:96px}
  .hero{background-attachment:scroll}
  .grid-2{grid-template-columns:1fr;gap:32px}
  .image-real{position:static}
  .facts{grid-template-columns:1fr 1fr}
  .facts li{padding:14px 18px;border-bottom:1px solid rgba(255,255,255,.14)}
  .section{padding:72px 18px}
  #map{height:400px}
}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
