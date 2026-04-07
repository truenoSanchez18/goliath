
// CATALOGO cargado desde productos.js
const NEGOCIO={"pvn_caja":2200,"pvn_compra_min":2800,"pvn_premium":4400,"pvn_vip":8800,"descuento":0.5,"retencion_dinero":0.16,"niveles":[{"nivel":1,"pct":25},{"nivel":2,"pct":17},{"nivel":3,"pct":10},{"nivel":4,"pct":5},{"nivel":5,"pct":3},{"nivel":6,"pct":1}],"rangos":[{"rango":"Bronce","activos":10,"frontales":6,"volumen":22000},{"rango":"Plata","activos":30,"frontales":6,"volumen":66000},{"rango":"Oro","activos":90,"frontales":6,"volumen":198000},{"rango":"Diamante","activos":180,"frontales":6,"volumen":396000},{"rango":"Doble Diamante","activos":360,"frontales":7,"volumen":792000},{"rango":"Triple Diamante","activos":540,"frontales":8,"volumen":1188000},{"rango":"Corona","activos":1620,"frontales":9,"volumen":3564000},{"rango":"Doble Corona","activos":3240,"frontales":10,"volumen":7128000},{"rango":"Triple Corona","activos":4860,"frontales":10,"volumen":10692000},{"rango":"Senior Chairman","frontales":13,"volumen":21069200}]};
const OPENAI_KEY=""  // clave gestionada por el servidor;
const GEMINI_KEY=""  // clave gestionada por el servidor;
const SHEETS_URL="https://script.google.com/macros/s/AKfycbyPMb-d_9fdmqKKCLL6r2g44rRsO1FzbJgJAg0WVLqRgYAVTZbnutyPHgujJl5U4ewA/exec";
const CALLCENTER="524621958440";
const SKOOL_URL="";
const FICHAS_URL="fichas_tecnicas_ismerely.html";
const GPT_ISMERELY_URL="https://chatgpt.com/g/g-67d515686a208191ae12feca535163da-recomendaciones-ismerely-2-2";
const PRES_TEMPLATE="<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n<title>{{NOMBRE}} — ISMERELY</title>\n<link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap\" rel=\"stylesheet\">\n<style>\n:root{--c:{{COLOR}};--cd:{{COLOR_DARK}}}\n*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:'Inter',sans-serif;background:#0a0a0a;overflow:hidden;height:100vh}\n.wrap{height:100vh;transition:transform .65s cubic-bezier(.77,0,.175,1)}\n.slide{width:100vw;height:100vh;position:relative;overflow:hidden;display:flex;align-items:center}\n/* PORTADA */\n.s-portada{background:var(--cd)}\n.s-portada .bg-img{position:absolute;inset:0;background-image:url('{{IMG_URL}}');background-size:cover;background-position:center;opacity:.32}\n.s-portada .bg-g{position:absolute;inset:0;background:linear-gradient(135deg,var(--cd) 45%,transparent)}\n.s-portada .ct{position:relative;z-index:2;padding:60px 80px;max-width:680px}\n.s-portada .logo-tag{font-size:10px;font-weight:900;letter-spacing:4px;color:rgba(255,255,255,.55);text-transform:uppercase;margin-bottom:20px}\n.s-portada h1{font-size:clamp(34px,5vw,62px);font-weight:900;color:#fff;line-height:1.1;margin-bottom:14px;text-transform:uppercase}\n.s-portada h2{font-size:clamp(15px,2vw,21px);font-weight:400;color:rgba(255,255,255,.8);line-height:1.5;margin-bottom:36px;max-width:480px}\n.s-portada .pill{display:inline-block;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);border-radius:100px;padding:9px 22px;font-size:13px;font-weight:700;color:#fff;cursor:pointer;backdrop-filter:blur(10px)}\n.s-portada .pill:hover{background:rgba(255,255,255,.28)}\n/* PROBLEMA */\n.s-problema{background:#f7f8fa}\n.s-problema .ct{padding:60px 80px;width:100%}\n.s-problema .pre{font-size:11px;font-weight:700;letter-spacing:3px;color:var(--c);text-transform:uppercase;margin-bottom:12px}\n.s-problema h2{font-size:clamp(26px,4vw,50px);font-weight:900;color:#0a0a0a;line-height:1.1;margin-bottom:44px;max-width:780px}\n.s-problema .pts{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}\n.s-problema .pt{background:#fff;border-radius:16px;padding:28px;box-shadow:0 4px 24px rgba(0,0,0,.07);border-top:4px solid var(--c)}\n.s-problema .pt .ico{font-size:30px;margin-bottom:12px}\n.s-problema .pt h3{font-size:15px;font-weight:800;color:#0a0a0a;margin-bottom:7px}\n.s-problema .pt p{font-size:12.5px;color:#666;line-height:1.65}\n/* SOLUCIÓN */\n.s-solucion{background:var(--cd)}\n.s-solucion .img-s{position:absolute;right:0;top:0;bottom:0;width:46%;background-image:url('{{IMG_URL}}');background-size:cover;background-position:center}\n.s-solucion .img-f{position:absolute;left:0;top:0;bottom:0;right:30%;background:linear-gradient(90deg,var(--cd) 62%,transparent)}\n.s-solucion .ct{position:relative;z-index:2;padding:60px 80px;max-width:580px}\n.s-solucion .pre{font-size:11px;font-weight:700;letter-spacing:3px;color:rgba(255,255,255,.55);text-transform:uppercase;margin-bottom:14px}\n.s-solucion h2{font-size:clamp(26px,3.5vw,48px);font-weight:900;color:#fff;line-height:1.1;margin-bottom:16px}\n.s-solucion p{font-size:15.5px;color:rgba(255,255,255,.82);line-height:1.7;margin-bottom:30px;max-width:460px}\n.s-solucion .ings{display:flex;flex-wrap:wrap;gap:10px}\n.s-solucion .ing{background:rgba(255,255,255,.13);border:1px solid rgba(255,255,255,.25);border-radius:100px;padding:7px 17px;font-size:12.5px;font-weight:700;color:#fff;backdrop-filter:blur(8px)}\n/* BENEFICIOS */\n.s-bens{background:linear-gradient(135deg,#0d1a2e 0%,var(--cd) 100%)}\n.s-bens .img-s{position:absolute;right:0;top:0;bottom:0;width:42%;background-image:url('{{IMG_URL}}');background-size:cover;background-position:center top}\n.s-bens .img-m{position:absolute;right:37%;top:0;bottom:0;width:110px;background:linear-gradient(90deg,#0d1a2e,transparent)}\n.s-bens .ct{position:relative;z-index:2;padding:60px 80px;max-width:58%}\n.s-bens .pre{font-size:11px;font-weight:700;letter-spacing:3px;color:rgba(255,255,255,.5);text-transform:uppercase;margin-bottom:10px}\n.s-bens h2{font-size:clamp(22px,3vw,40px);font-weight:900;color:#fff;line-height:1.1;margin-bottom:32px}\n.s-bens .grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}\n.s-bens .ben{background:rgba(255,255,255,.07);border-radius:12px;padding:20px;border-left:3px solid rgba(255,255,255,.28)}\n.s-bens .ben h3{font-size:14px;font-weight:800;color:#fff;margin-bottom:6px}\n.s-bens .ben p{font-size:12px;color:rgba(255,255,255,.7);line-height:1.6}\n/* TESTIMONIOS */\n.s-test{background:#0a0a0a}\n.s-test .ct{padding:60px 80px;width:100%}\n.s-test .pre{font-size:11px;font-weight:700;letter-spacing:3px;color:var(--c);text-transform:uppercase;margin-bottom:12px;text-align:center}\n.s-test h2{font-size:clamp(22px,3vw,40px);font-weight:900;color:#fff;text-align:center;margin-bottom:44px}\n.s-test .tgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}\n.s-test .tc{background:#111;border:1px solid #222;border-radius:16px;padding:28px 24px;display:flex;flex-direction:column;gap:14px}\n.s-test .tc .stars{color:#ffd600;font-size:16px;letter-spacing:2px}\n.s-test .tc .ttext{font-size:13.5px;color:#ccc;line-height:1.7;flex:1}\n.s-test .tc .tauthor{display:flex;flex-direction:column;gap:2px;margin-top:4px}\n.s-test .tc .tname{font-size:13px;font-weight:800;color:#fff}\n.s-test .tc .tcity{font-size:11px;color:#555}\n/* PRECIO */\n.s-precio{background:#080808}\n.s-precio .ct{padding:60px 80px;width:100%}\n.s-precio .pre{font-size:11px;font-weight:700;letter-spacing:3px;color:var(--c);text-transform:uppercase;margin-bottom:12px;text-align:center}\n.s-precio h2{font-size:clamp(22px,3vw,40px);font-weight:900;color:#fff;text-align:center;margin-bottom:44px}\n.s-precio .cards{display:flex;gap:22px;justify-content:center;margin-bottom:22px}\n.s-precio .card{background:#111;border:1px solid #222;border-radius:20px;padding:36px 40px;text-align:center;min-width:230px}\n.s-precio .card.hl{background:var(--c);border-color:var(--c);position:relative;transform:scale(1.06);box-shadow:0 20px 60px rgba(0,0,0,.5)}\n.s-precio .card .badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:#ffd600;color:#000;font-size:9px;font-weight:900;letter-spacing:2px;padding:4px 14px;border-radius:100px;white-space:nowrap}\n.s-precio .card .lbl{font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.55);margin-bottom:10px}\n.s-precio .card .price{font-size:46px;font-weight:900;color:#fff;line-height:1;margin-bottom:6px}\n.s-precio .card .sub{font-size:11.5px;color:rgba(255,255,255,.6)}\n.s-precio .prod-info{text-align:center;font-size:11px;color:#444;letter-spacing:1px;margin-bottom:24px}\n.s-precio .cta{text-align:center;display:flex;flex-direction:column;align-items:center;gap:8px}\n.s-precio .cta-sub{font-size:11px;color:#555}\n.wa-btn{display:inline-flex;align-items:center;gap:10px;background:#25d366;color:#fff;border:none;border-radius:100px;padding:15px 34px;font-size:15px;font-weight:800;cursor:pointer;font-family:'Inter',sans-serif;text-decoration:none;box-shadow:0 6px 24px rgba(37,211,102,.4);transition:transform .2s,box-shadow .2s}\n.wa-btn:hover{transform:translateY(-2px);box-shadow:0 12px 36px rgba(37,211,102,.5)}\n/* NAV */\n.nav-dots{position:fixed;right:28px;top:50%;transform:translateY(-50%);z-index:100;display:flex;flex-direction:column;gap:8px}\n.nd{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.28);cursor:pointer;transition:all .3s}\n.nd.on{background:#fff;transform:scale(1.5)}\n.nav-arrows{position:fixed;bottom:28px;right:28px;z-index:100;display:flex;gap:8px}\n.na{width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);color:#fff;font-size:17px;cursor:pointer;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(10px);transition:background .2s}\n.na:hover{background:rgba(255,255,255,.22)}\n.sn{position:absolute;bottom:28px;left:50%;transform:translateX(-50%);font-size:10px;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,.35);text-transform:uppercase;z-index:10}\n/* EDIT TOOLBAR */\n.etb{position:fixed;bottom:28px;left:28px;z-index:200;display:flex;gap:6px;align-items:center;background:rgba(0,0,0,.75);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.14);border-radius:100px;padding:8px 16px}\n.etb span{font-size:11px;color:rgba(255,255,255,.65);font-weight:600}\n.color-picker-wrap{position:relative;display:inline-flex;align-items:center}\n.color-dot{width:18px;height:18px;border-radius:50%;cursor:pointer;border:2px solid rgba(255,255,255,.4);transition:transform .2s}\n.color-dot:hover{transform:scale(1.2)}\n.color-panel{position:absolute;bottom:40px;left:0;background:#1a2533;border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:12px;display:none;flex-direction:column;gap:8px;min-width:200px;box-shadow:0 8px 32px rgba(0,0,0,.5)}\n.color-panel.open{display:flex}\n.color-panel label{font-size:10px;color:rgba(255,255,255,.5);font-weight:600;letter-spacing:1px;text-transform:uppercase}\n.color-panel input[type=color]{width:100%;height:32px;border:none;border-radius:6px;cursor:pointer;background:none}\n.color-presets{display:flex;flex-wrap:wrap;gap:6px}\n.cp{width:22px;height:22px;border-radius:50%;cursor:pointer;border:2px solid transparent;transition:transform .2s,border-color .2s}\n.cp:hover{transform:scale(1.2);border-color:#fff}\n.url-img-wrap{position:absolute;bottom:40px;right:0;background:#1a2533;border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:12px;display:none;flex-direction:column;gap:8px;min-width:260px;box-shadow:0 8px 32px rgba(0,0,0,.5);z-index:10}\n.url-img-wrap.open{display:flex}\n.url-img-wrap label{font-size:10px;color:rgba(255,255,255,.5);font-weight:600;text-transform:uppercase;letter-spacing:1px}\n.url-img-wrap input{background:#0d1a2e;border:1px solid rgba(255,255,255,.2);border-radius:6px;color:#fff;padding:7px 10px;font-size:12px;font-family:inherit;width:100%}\n.url-img-wrap input:focus{outline:none;border-color:#42a5f5}\n.url-img-wrap button{background:#1565c0;color:#fff;border:none;border-radius:6px;padding:7px 12px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit}\n.eb{background:transparent;border:none;color:#fff;cursor:pointer;font-size:17px;padding:4px 8px;border-radius:7px;transition:background .2s;font-family:'Inter',sans-serif}\n.eb:hover{background:rgba(255,255,255,.12)}\n/* EDIT MODE */\n.edit-on [contenteditable=true]{outline:2px dashed rgba(255,255,255,.45)!important;border-radius:3px;cursor:text;min-width:20px}\n.edit-on .clickimg{cursor:pointer;position:relative}\n.edit-on .clickimg::after{content:'\\uD83D\\uDDBC Cambiar imagen';position:absolute;inset:0;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:700;font-family:'Inter',sans-serif;opacity:0;transition:opacity .2s}\n.edit-on .clickimg:hover::after{opacity:1}\n@media print{\n  body{overflow:auto!important}\n  .wrap{transform:none!important;height:auto!important}\n  .slide{page-break-after:always;break-after:page;height:100vh}\n  .nav-dots,.nav-arrows,.etb{display:none!important}\n}\n</style>\n</head>\n<body>\n<nav class=\"nav-dots\">\n  <div class=\"nd on\" onclick=\"goTo(0)\"></div>\n  <div class=\"nd\" onclick=\"goTo(1)\"></div>\n  <div class=\"nd\" onclick=\"goTo(2)\"></div>\n  <div class=\"nd\" onclick=\"goTo(3)\"></div>\n  <div class=\"nd\" onclick=\"goTo(4)\"></div>\n  <div class=\"nd\" onclick=\"goTo(5)\"></div>\n</nav>\n<div class=\"nav-arrows\">\n  <button class=\"na\" onclick=\"prev()\">\u2191</button>\n  <button class=\"na\" onclick=\"next()\">\u2193</button>\n</div>\n<div class=\"etb\">\n  <span>\u270F\uFE0F</span>\n  <button class=\"eb\" id=\"etog\" onclick=\"toggleEdit()\">Editar</button>\n  <div class=\"color-picker-wrap\" id=\"cpwrap\">\n    <div class=\"color-dot\" id=\"cdot\" style=\"background:var(--c)\" onclick=\"toggleColorPanel()\" title=\"Cambiar color\"></div>\n    <div class=\"color-panel\" id=\"cpanel\">\n      <label>Color del tema</label>\n      <input type=\"color\" id=\"theme-color-input\" oninput=\"applyThemeColor(this.value)\">\n      <label>Presets</label>\n      <div class=\"color-presets\">\n        <div class=\"cp\" style=\"background:#0d47a1\" onclick=\"applyThemeColor('#0d47a1')\" title=\"ISMERELY Azul\"></div>\n        <div class=\"cp\" style=\"background:#1b5e20\" onclick=\"applyThemeColor('#1b5e20')\" title=\"FitElym Verde\"></div>\n        <div class=\"cp\" style=\"background:#6a1b9a\" onclick=\"applyThemeColor('#6a1b9a')\" title=\"Vybes Morado\"></div>\n        <div class=\"cp\" style=\"background:#b71c1c\" onclick=\"applyThemeColor('#b71c1c')\" title=\"Rojo\"></div>\n        <div class=\"cp\" style=\"background:#e65100\" onclick=\"applyThemeColor('#e65100')\" title=\"Naranja\"></div>\n        <div class=\"cp\" style=\"background:#004d40\" onclick=\"applyThemeColor('#004d40')\" title=\"Teal\"></div>\n        <div class=\"cp\" style=\"background:#1a237e\" onclick=\"applyThemeColor('#1a237e')\" title=\"\\u00cdndigo\"></div>\n        <div class=\"cp\" style=\"background:#37474f\" onclick=\"applyThemeColor('#37474f')\" title=\"Gris oscuro\"></div>\n      </div>\n    </div>\n  </div>\n  <div style=\"position:relative\">\n    <button class=\"eb\" onclick=\"toggleUrlPanel()\" title=\"Imagen por URL\">\uD83D\uDD17</button>\n    <div class=\"url-img-wrap\" id=\"urlpanel\">\n      <label>Cambiar imagen por URL</label>\n      <input type=\"text\" id=\"url-img-inp\" placeholder=\"https://...imagen.jpg\">\n      <button onclick=\"applyUrlImage()\">Aplicar</button>\n    </div>\n  </div>\n  <button class=\"eb\" onclick=\"saveHTML()\" title=\"Guardar HTML\">\uD83D\uDCBE</button>\n  <button class=\"eb\" onclick=\"window.print()\" title=\"Imprimir / PDF\">\uD83D\uDDB8\uFE0F</button>\n</div>\n<div class=\"wrap\" id=\"wrap\">\n<!-- SLIDE 1: PORTADA -->\n<div class=\"slide s-portada\">\n  <div class=\"bg-img clickimg\" id=\"bgimg0\"></div>\n  <div class=\"bg-g\"></div>\n  <div class=\"ct\">\n    <div class=\"logo-tag\">ISMERELY \u00b7 Suplementos Naturales</div>\n    <h1 contenteditable=\"false\">{{NOMBRE}}</h1>\n    <h2 contenteditable=\"false\">{{SUBTITULO}}</h2>\n    <div class=\"pill\" onclick=\"next()\">Conoce m\u00e1s \u2193</div>\n  </div>\n  <div class=\"sn\">01 / 06</div>\n</div>\n<!-- SLIDE 2: PROBLEMA -->\n<div class=\"slide s-problema\">\n  <div class=\"ct\">\n    <div class=\"pre\" contenteditable=\"false\">\u00bfTe identificas?</div>\n    <h2 contenteditable=\"false\">{{PROB_TITULO}}</h2>\n    <div class=\"pts\">\n      <div class=\"pt\"><div class=\"ico\">{{P1E}}</div><h3 contenteditable=\"false\">{{P1T}}</h3><p contenteditable=\"false\">{{P1D}}</p></div>\n      <div class=\"pt\"><div class=\"ico\">{{P2E}}</div><h3 contenteditable=\"false\">{{P2T}}</h3><p contenteditable=\"false\">{{P2D}}</p></div>\n      <div class=\"pt\"><div class=\"ico\">{{P3E}}</div><h3 contenteditable=\"false\">{{P3T}}</h3><p contenteditable=\"false\">{{P3D}}</p></div>\n    </div>\n  </div>\n  <div class=\"sn\" style=\"color:#aaa\">02 / 06</div>\n</div>\n<!-- SLIDE 3: SOLUCIÓN -->\n<div class=\"slide s-solucion\">\n  <div class=\"img-s clickimg\" id=\"soluimg\"></div>\n  <div class=\"img-f\"></div>\n  <div class=\"ct\">\n    <div class=\"pre\" contenteditable=\"false\">La Soluci\u00f3n Natural</div>\n    <h2 contenteditable=\"false\">{{SOL_TITULO}}</h2>\n    <p contenteditable=\"false\">{{SOL_DESC}}</p>\n    <div class=\"ings\">{{INGS_HTML}}</div>\n  </div>\n  <div class=\"sn\">03 / 06</div>\n</div>\n<!-- SLIDE 4: BENEFICIOS -->\n<div class=\"slide s-bens\">\n  <div class=\"img-s clickimg\" id=\"bensimg\"></div>\n  <div class=\"img-m\"></div>\n  <div class=\"ct\">\n    <div class=\"pre\" contenteditable=\"false\">Beneficios Clave</div>\n    <h2 contenteditable=\"false\">{{BENS_TITULO}}</h2>\n    <div class=\"grid\">\n      <div class=\"ben\"><h3 contenteditable=\"false\">{{B1T}}</h3><p contenteditable=\"false\">{{B1D}}</p></div>\n      <div class=\"ben\"><h3 contenteditable=\"false\">{{B2T}}</h3><p contenteditable=\"false\">{{B2D}}</p></div>\n      <div class=\"ben\"><h3 contenteditable=\"false\">{{B3T}}</h3><p contenteditable=\"false\">{{B3D}}</p></div>\n      <div class=\"ben\"><h3 contenteditable=\"false\">{{B4T}}</h3><p contenteditable=\"false\">{{B4D}}</p></div>\n    </div>\n  </div>\n  <div class=\"sn\">04 / 06</div>\n</div>\n<!-- SLIDE 5: TESTIMONIOS -->\n<div class=\"slide s-test\">\n  <div class=\"ct\">\n    <div class=\"pre\" contenteditable=\"false\">Resultados Reales</div>\n    <h2 contenteditable=\"false\">Lo que dicen nuestros clientes</h2>\n    <div class=\"tgrid\">\n      <div class=\"tc\">\n        <div class=\"stars\">\u2605\u2605\u2605\u2605\u2605</div>\n        <div class=\"ttext\" contenteditable=\"false\">{{T1_TEXTO}}</div>\n        <div class=\"tauthor\"><span class=\"tname\" contenteditable=\"false\">{{T1_NOMBRE}}</span><span class=\"tcity\" contenteditable=\"false\">{{T1_CIUDAD}}</span></div>\n      </div>\n      <div class=\"tc\">\n        <div class=\"stars\">\u2605\u2605\u2605\u2605\u2605</div>\n        <div class=\"ttext\" contenteditable=\"false\">{{T2_TEXTO}}</div>\n        <div class=\"tauthor\"><span class=\"tname\" contenteditable=\"false\">{{T2_NOMBRE}}</span><span class=\"tcity\" contenteditable=\"false\">{{T2_CIUDAD}}</span></div>\n      </div>\n      <div class=\"tc\">\n        <div class=\"stars\">\u2605\u2605\u2605\u2605\u2605</div>\n        <div class=\"ttext\" contenteditable=\"false\">{{T3_TEXTO}}</div>\n        <div class=\"tauthor\"><span class=\"tname\" contenteditable=\"false\">{{T3_NOMBRE}}</span><span class=\"tcity\" contenteditable=\"false\">{{T3_CIUDAD}}</span></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"sn\">05 / 06</div>\n</div>\n<!-- SLIDE 6: PRECIO -->\n<div class=\"slide s-precio\">\n  <div class=\"ct\">\n    <div class=\"pre\" contenteditable=\"false\">Tu Inversi\u00f3n en Salud</div>\n    <h2 contenteditable=\"false\">{{CTA_TITULO}}</h2>\n    <div class=\"cards\">\n      <div class=\"card\">\n        <div class=\"lbl\">Precio Cat\u00e1logo</div>\n        <div class=\"price\" contenteditable=\"false\">{{PRECIO_CAT}}</div>\n        <div class=\"sub\">Precio p\u00fablico</div>\n      </div>\n      <div class=\"card hl\">\n        <div class=\"badge\">\u2605 MEJOR PRECIO</div>\n        <div class=\"lbl\">Precio Socio</div>\n        <div class=\"price\" contenteditable=\"false\">{{PRECIO_SOC}}</div>\n        <div class=\"sub\">50% descuento al afiliarte</div>\n      </div>\n    </div>\n    <div class=\"prod-info\" contenteditable=\"false\">{{PRODUCTO_INFO}}</div>\n    <div class=\"cta\">\n      <a class=\"wa-btn\" href=\"https://wa.me/{{WA_NUM}}\" target=\"_blank\">\uD83D\uDCAC Cont\u00e1ctame por WhatsApp</a>\n      <span class=\"cta-sub\">\u00bfDudas? Escr\u00edbeme, te respondo en minutos</span>\n    </div>\n  </div>\n  <div class=\"sn\">06 / 06</div>\n</div>\n</div>\n<input type=\"file\" id=\"imgfile\" accept=\"image/*\" style=\"display:none\">\n<script>\nvar cur=0,editMode=false,imgTgt=null;\nfunction goTo(n){\n  cur=Math.max(0,Math.min(n,5));\n  document.getElementById('wrap').style.transform='translateY(-'+(cur*100)+'vh)';\n  document.querySelectorAll('.nd').forEach(function(d,i){d.classList.toggle('on',i===cur);});\n}\nfunction next(){goTo(cur+1);}\nfunction prev(){goTo(cur-1);}\ndocument.addEventListener('keydown',function(e){\n  if(e.key==='ArrowDown'||e.key==='ArrowRight')next();\n  if(e.key==='ArrowUp'||e.key==='ArrowLeft')prev();\n});\nvar ty=0;\ndocument.addEventListener('touchstart',function(e){ty=e.touches[0].clientY;});\ndocument.addEventListener('touchend',function(e){\n  var d=ty-e.changedTouches[0].clientY;\n  if(d>50)next();if(d<-50)prev();\n});\nfunction toggleEdit(){\n  editMode=!editMode;\n  document.body.classList.toggle('edit-on',editMode);\n  document.getElementById('etog').textContent=editMode?'\\u2705 ON':'Editar';\n  document.querySelectorAll('[contenteditable]').forEach(function(el){\n    el.contentEditable=editMode?'true':'false';\n  });\n  document.querySelectorAll('.clickimg').forEach(function(el){\n    if(editMode){el.addEventListener('click',pickImg);}\n    else{el.removeEventListener('click',pickImg);}\n  });\n}\nfunction pickImg(e){imgTgt=e.currentTarget;document.getElementById('imgfile').click();}\ndocument.getElementById('imgfile').addEventListener('change',function(e){\n  var f=e.target.files[0];if(!f||!imgTgt)return;\n  var r=new FileReader();\n  r.onload=function(ev){imgTgt.style.backgroundImage='url('+ev.target.result+')';};\n  r.readAsDataURL(f);e.target.value='';\n});\nfunction saveHTML(){\n  var html='<!DOCTYPE html>'+document.documentElement.outerHTML;\n  var b=new Blob([html],{type:'text/html'});\n  var a=document.createElement('a');\n  a.href=URL.createObjectURL(b);\n  a.download=document.title.replace(/[^a-z0-9]/gi,'_')+'.html';\n  a.click();\n}\nfunction applyThemeColor(hex){\n  document.documentElement.style.setProperty('--c',hex);\n  document.documentElement.style.setProperty('--cd',hex);\n  var dot=document.getElementById('cdot');\n  if(dot)dot.style.background=hex;\n  var inp=document.getElementById('theme-color-input');\n  if(inp)inp.value=hex;\n}\nfunction toggleColorPanel(){\n  var p=document.getElementById('cpanel');\n  if(p)p.classList.toggle('open');\n}\nfunction toggleUrlPanel(){\n  var p=document.getElementById('urlpanel');\n  if(p)p.classList.toggle('open');\n}\nfunction applyUrlImage(){\n  var url=document.getElementById('url-img-inp').value.trim();\n  if(!url)return;\n  var slides=document.querySelectorAll('.slide');\n  var cur=Math.round(Math.abs(parseInt((document.getElementById('wrap').style.transform||'0').replace(/[^0-9-]/g,''))||0)/100);\n  if(slides[cur]){\n    var imgs=slides[cur].querySelectorAll('.clickimg,.bg-img');\n    imgs.forEach(function(el){el.style.backgroundImage='url('+url+')';});\n  }\n  document.getElementById('url-img-inp').value='';\n  toggleUrlPanel();\n}\ndocument.addEventListener('click',function(e){\n  var cpwrap=document.getElementById('cpwrap');\n  if(cpwrap&&!cpwrap.contains(e.target)){\n    var p=document.getElementById('cpanel');\n    if(p)p.classList.remove('open');\n  }\n  var urlbtn=document.querySelector('.url-img-wrap');\n  if(urlbtn&&!urlbtn.parentElement.contains(e.target)){\n    var up=document.getElementById('urlpanel');\n    if(up)up.classList.remove('open');\n  }\n});\n<\/script>\n</body>\n</html>"
const PRES_SYS = `placeholder`;

// ── Estado ──────────────────────────────────────────────────
let networker = { nombre:'', usuario:'' };
let cliente   = { nombre:'', id:'' };
let carrito = {};
let modoActual = 'networker';
let lineaFiltro = 'Todas';
let chatHistory = [];
let modoDescuento = false; // precio socio 50% activo
let cartPVN = 0; // PVN total de la cotización actual

// ── ONBOARDING ──────────────────────────────────────────────
function cargarDatosGuardados() {
  try {
    const saved = localStorage.getItem('ismerely_networker');
    if (saved) {
      const d = JSON.parse(saved);
      if (d.nombre) document.getElementById('ob-nombre').value = d.nombre;
    }
  } catch(e) {}
}

function iniciarSesion() {
  const n = document.getElementById('ob-nombre').value.trim();
  if (!n) { toast('⚠️ Escribe cómo te llamamos'); return; }
  networker = { nombre: n };
  try { localStorage.setItem('ismerely_networker', JSON.stringify(networker)); } catch(e) {}
  document.getElementById('ob').style.display = 'none';
  actualizarHeaderUsuario();
  mensajeNatalia(`¡Hola ${n.split(' ')[0]}! 👋 Soy Natalia Money, tu asesora Ismerely. Estoy aquí para ayudarte con productos, cotizaciones y explicarte el negocio. ¿En qué te puedo ayudar hoy? 💚`);
  init();
}

function actualizarHeaderUsuario() {
  const el = document.getElementById('hdr-usuario');
  el.textContent = networker.nombre ? ('💼 ' + networker.nombre) : '—';
}

// ── INIT ────────────────────────────────────────────────────
function init() {
  const lineas = ['Todas', ...new Set(CATALOGO.map(p=>p.linea))];
  const fc = document.getElementById('filtros');
  lineas.forEach(l => {
    const b = document.createElement('button');
    b.textContent = l; b.dataset.l = l;
    b.className = l==='Todas' ? 'active' : '';
    b.onclick = () => {
      lineaFiltro = l;
      fc.querySelectorAll('button').forEach(x=>x.className=x.dataset.l==='Vybes'?'linea-Vybes':'');
      b.classList.add('active');
      filtrar();
    };
    fc.appendChild(b);
  });
  renderActGrid(0); renderComTbl(0); filtrar();
  inicializarRedSelector();
}

// ── FILTRAR ─────────────────────────────────────────────────
function filtrar() {
  const q = document.getElementById('search').value.toLowerCase().trim();
  const lista = CATALOGO.filter(p => {
    if (lineaFiltro !== 'Todas' && p.linea !== lineaFiltro) return false;
    if (!q) return true;
    const qs = [p.nombre, p.id,
      p.codigo||p.codigo_base||'',
      (p.variantes||[]).map(v=>v.codigo||'').join(' '),
      (p.padecimientos||[]).join(' ')
    ].join(' ').toLowerCase();
    return qs.includes(q);
  });
  document.getElementById('count').textContent = lista.length + ' productos';
  renderGrid(lista);
}

// ── RENDER GRID ──────────────────────────────────────────────
function renderGrid(lista) {
  document.getElementById('grid').innerHTML = lista.map(p => {
    const tieneVar = p.tipo === 'sabores' || p.tipo === 'presentaciones';
    const v0 = tieneVar ? p.variantes[0] : p;
    const enC = tieneVar ? p.variantes.some(v => carrito[p.id+'_'+v.codigo]) : !!carrito[p.id];
    const pPub  = v0.precio || 0;
    const pSoc  = v0.precio_socio || Math.round(pPub * 0.5);
    const pvn   = v0.pvn || 0;
    const gan   = pPub - pSoc;
    const pShow = modoDescuento ? pSoc : pPub;
    const codigo = p.codigo || p.codigo_base || (p.variantes && p.variantes[0].codigo) || '';
    const imgHtml = p.imagen
      ? `<img src="${p.imagen}" alt="${esc(p.nombre)}" loading="lazy" onerror="this.parentNode.innerHTML='<div class=no-img>📦<span>sin imagen</span></div>'">`
      : `<div class="no-img">📦<span>sin imagen</span></div>`;
    const isVybes = p.linea === 'Vybes';
    const varSelect = tieneVar ? `<select class="select-var" id="sel-${p.id}" onchange="updateCard('${p.id}')">
      ${p.variantes.map(v=>`<option value="${v.codigo||v.sabor||v.presentacion}">${v.sabor||v.presentacion||v.codigo}</option>`).join('')}
    </select>` : '';
    const padPreview = (p.padecimientos||[]).slice(0,3).join(' · ');
    return `<div class="card${isVybes?' vybes-card':''}" id="card-${p.id}">
      <div class="card-img">
        <span class="linea-badge lb-${p.linea}">${p.linea}</span>
        ${imgHtml}
        <button class="btn-ficha" title="Ver ficha técnica" onclick="abrirFicha('${esc(p.id)}')">🔍</button>
      </div>
      <div class="card-body">
        <div class="card-nombre">${esc(p.nombre)}</div>
        <div class="card-codigo" id="cod-${p.id}">${codigo}</div>
        ${varSelect}
        <div class="precios" id="prec-${p.id}">
          ${modoDescuento ? `<div style="font-size:10px;color:var(--oro);font-weight:700">🏷️ PRECIO AFILIADO</div>` : ''}
          <div class="p-pub" ${modoDescuento ? 'style="color:var(--oro)"' : ''}>$${fmt(pShow)} MXN</div>
          ${modoDescuento ? `<div class="p-soc" style="text-decoration:line-through;color:var(--sub)">Público: $${fmt(pPub)}</div>` : `<div class="p-soc">Socio: $${fmt(pSoc)}</div>`}
          <div class="p-gan">💰 Gan: $${fmt(gan)}</div>
        </div>
        ${pvn ? `<div class="pvn-chip">⚡ ${pvn} PVN</div>` : ''}
        ${padPreview ? `<div class="card-pads">${esc(padPreview)}</div>` : ''}
        <button class="btn-add${enC?' ya':''}" id="ba-${p.id}" onclick="toggleCarrito('${p.id}')">
          ${enC ? '✔ En cotización' : '➕ Agregar'}
        </button>
      </div>
    </div>`;
  }).join('');
}

// ── Actualizar card cuando cambia variante ───────────────────
function updateCard(pid) {
  const p = CATALOGO.find(x=>x.id===pid);
  if (!p || !p.variantes) return;
  const sel = document.getElementById('sel-'+pid);
  const val = sel ? sel.value : null;
  const v = p.variantes.find(x=>(x.codigo||x.sabor||x.presentacion)===val) || p.variantes[0];
  const pPub = v.precio; const pSoc = v.precio_socio || pPub*0.5; const gan = pPub-pSoc;
  const pd = document.getElementById('prec-'+pid);
  if (pd) pd.innerHTML = `<div class="p-pub">$${fmt(pPub)} MXN</div><div class="p-soc">Socio: $${fmt(pSoc)}</div><div class="p-gan">💰 Gan: $${fmt(gan)}</div>`;
  const cd = document.getElementById('cod-'+pid);
  if (cd) cd.textContent = v.codigo || p.codigo_base || '';
}

// ── CARRITO ──────────────────────────────────────────────────
function toggleCarrito(pid) {
  const p = CATALOGO.find(x=>x.id===pid);
  if (!p) return;
  if (p.variantes) {
    const sel = document.getElementById('sel-'+pid);
    const val = sel ? sel.value : null;
    const v = p.variantes.find(x=>(x.codigo||x.sabor||x.presentacion)===val)||p.variantes[0];
    const key = pid+'_'+(v.codigo||v.sabor||v.presentacion);
    if (carrito[key]) { delete carrito[key]; }
    else { carrito[key] = { producto:p, variante:v, qty:1 }; }
  } else {
    if (carrito[pid]) { delete carrito[pid]; }
    else { carrito[pid] = { producto:p, variante:null, qty:1 }; }
  }
  updateCarrito(); filtrar();
}

function cambiarQty(key, d) {
  if (!carrito[key]) return;
  carrito[key].qty = Math.max(1, carrito[key].qty + d);
  updateCarrito();
}

function quitarItem(key) { delete carrito[key]; updateCarrito(); filtrar(); }
function limpiar() { carrito = {}; updateCarrito(); filtrar(); }

function updateCarrito() {
  const items = Object.entries(carrito);
  const count = items.reduce((s,[,x])=>s+x.qty,0);
  document.getElementById('bn').textContent = count;

  // info cliente
  const ci = document.getElementById('cli-info');
  if (cliente.nombre) {
    ci.style.display='block';
    ci.innerHTML = `<strong>Cliente:</strong> ${esc(cliente.nombre)}${cliente.id?' &nbsp;·&nbsp; <strong>ID:</strong> '+esc(cliente.id):''}`;
  } else { ci.style.display='none'; }

  const cont = document.getElementById('cart-items');
  const totsEl = document.getElementById('cart-tots');
  const btnsEl = document.getElementById('cart-btns');

  if (!items.length) {
    cont.innerHTML='<div class="cart-empty">Agrega productos para cotizar</div>';
    totsEl.style.display='none'; btnsEl.style.display='none'; return;
  }

  cont.innerHTML = items.map(([key,{producto:p,variante:v,qty}])=>{
    const precio = modoActual==='networker' ? (v?v.precio_socio:p.precio_socio)||p.precio*0.5 : (v?v.precio:p.precio)||0;
    const pvn = v?v.pvn:p.pvn||0;
    const label = p.nombre + (v ? ' – '+(v.sabor||v.presentacion||'') : '');
    const imgH = p.imagen
      ? `<img src="${p.imagen}" style="width:40px;height:40px;border-radius:5px;object-fit:cover" onerror="this.style.display='none'">`
      : `<div class="ci-noimg">📦</div>`;
    return `<div class="ci">
      ${imgH}
      <div class="ci-info"><div class="nom">${esc(label)}</div><div class="meta">PVN:${pvn} · $${fmt(precio)}/u</div></div>
      <div class="ci-ctrl">
        <button class="ci-del" onclick="quitarItem('${key}')">✕</button>
        <div class="qty">
          <button onclick="cambiarQty('${key}',-1)">−</button>
          <span>${qty}</span>
          <button onclick="cambiarQty('${key}',1)">+</button>
        </div>
        <div class="ci-precio">$${fmt(precio*qty)}</div>
      </div>
    </div>`;
  }).join('');

  let tPub=0, tSoc=0, tPVN=0;
  items.forEach(([,{producto:p,variante:v,qty}])=>{
    const pub = v?v.precio:p.precio||0;
    const soc = (v?v.precio_socio:p.precio_socio)||pub*0.5;
    tPub += pub*qty; tSoc += soc*qty; tPVN += (v?v.pvn:p.pvn||0)*qty;
  });
  const cajas = Math.floor(tPVN/NEGOCIO.pvn_caja);
  document.getElementById('t-pub').textContent  = '$'+fmt(tPub);
  document.getElementById('t-soc').textContent  = '$'+fmt(tSoc);
  document.getElementById('t-gan').textContent  = '$'+fmt(tPub-tSoc);
  document.getElementById('t-pvn').textContent  = tPVN.toLocaleString();
  actualizarPVNProgress(tPVN);
  document.getElementById('t-cajas').textContent = cajas+(cajas===1?' caja':' cajas');
  totsEl.style.display='flex'; btnsEl.style.display='grid';
  renderActGrid(tPVN); renderBarras(tPVN); renderComTbl(tPVN);
  preparePrint(items, tPub, tSoc, tPVN, cajas);
}

// ── PRINT HTML ───────────────────────────────────────────────
function preparePrint(items, tPub, tSoc, tPVN, cajas) {
  const fecha = new Date().toLocaleDateString('es-MX',{year:'numeric',month:'long',day:'numeric'});
  const filas = items.map(([,{producto:p,variante:v,qty}])=>{
    const pub = v?v.precio:p.precio||0;
    const soc = (v?v.precio_socio:p.precio_socio)||pub*0.5;
    const pvn = (v?v.pvn:p.pvn)||0;
    const cod = v?v.codigo:(p.codigo||p.codigo_base||'');
    const nom = p.nombre+(v?' – '+(v.sabor||v.presentacion||''):'');
    return `<tr>
      <td>${esc(nom)}</td>
      <td style="font-family:monospace">${cod}</td>
      <td>${qty}</td>
      <td>$${fmt(pub)}</td>
      <td>$${fmt(pub*qty)}</td>
      <td>${pvn*qty}</td>
    </tr>`;
  }).join('');
  const activacion = tPVN>=8800?'⭐ VIP 8800':tPVN>=4400?'✅ Premium':'—';
  document.getElementById('print-area').innerHTML = `
  <div class="print-cotiz">
    <div class="pc-header">
      <div>
        <div class="pc-logo">ISMERELY</div>
        <div style="font-size:11px;color:#666">Cotización Profesional</div>
      </div>
      <div class="pc-fecha">${fecha}</div>
    </div>
    ${cliente.nombre?`<div class="pc-cliente">
      <strong>Cliente:</strong> ${esc(cliente.nombre)}&nbsp;&nbsp;
      ${cliente.id?`<strong>ID Oficina Virtual:</strong> ${esc(cliente.id)}`:''}
    </div>`:''}
    <table class="pc-table">
      <thead><tr><th>Producto</th><th>Código</th><th>Cant.</th><th>P. Unitario</th><th>Subtotal</th><th>PVN</th></tr></thead>
      <tbody>${filas}</tbody>
    </table>
    <div class="pc-totales">
      <div class="pc-total-row"><span>Subtotal:</span><span>$${fmt(tPub)}</span></div>
      <div class="pc-total-row big"><span>TOTAL:</span><span>$${fmt(tPub)}</span></div>
      <div class="pc-total-row" style="color:#e65100"><span>⚡ PVN Total:</span><span>${tPVN.toLocaleString()}</span></div>
      <div class="pc-total-row" style="font-size:12px;color:#666"><span>Activación:</span><span>${activacion}</span></div>
      <div class="pc-total-row" style="font-size:12px;color:#666"><span>Cajas:</span><span>${cajas}</span></div>
    </div>
    <div class="pc-motivacion">
      💚 <strong>¡Felicidades por tu elección!</strong><br>
      Cada producto Ismerely que adquieres es un paso hacia un mejor bienestar y también hacia tu libertad financiera.
      Recuerda que eres parte de una comunidad que crece junta. ¡Tu éxito es nuestro éxito!<br><br>
      <em>Cotización válida por 48 horas · ismerely.com</em>
    </div>
    <div class="pc-callcenter">
      📲 <strong>¿Cómo realizar tu pedido?</strong><br>
      1. Ingresa a tu <strong>Oficina Virtual Ismerely</strong> y realiza el pedido.<br>
      2. Una vez generado, <strong>anota o copia tu número de pedido</strong>.<br>
      3. Envíalo por WhatsApp al <strong>Call Center Ismerely: +52 4621958440</strong><br>
      <em>El equipo confirmará tu pedido y te dará seguimiento. 💪</em>
    </div>
  </div>`;
}

function imprimirPDF() {
  if (!Object.keys(carrito).length) { toast('⚠️ El carrito está vacío'); return; }
  window.print();
}

// ── WHATSAPP ─────────────────────────────────────────────────
function enviarWA() {
  const items = Object.values(carrito);
  if (!items.length) { toast('⚠️ El carrito está vacío'); return; }
  const fecha = new Date().toLocaleDateString('es-MX');
  let lines = ['*COTIZACIÓN ISMERELY* 💚', '📅 ' + fecha];
  if (networker.nombre) lines.push('💼 Networker: *' + networker.nombre + '*');
  if (cliente.nombre)  lines.push('👤 Para: *' + cliente.nombre + '*' + (cliente.id ? '  (ID: ' + cliente.id + ')' : ''));
  lines.push('─'.repeat(30));
  let tPub=0, tSoc=0, tPVN=0;
  items.forEach(({producto:p,variante:v,qty})=>{
    const pub = v ? v.precio      : p.precio       || 0;
    const soc = v ? v.precio_socio: p.precio_socio || Math.round(pub*0.5);
    const pvn = (v ? v.pvn : p.pvn) || 0;
    const nom = p.nombre + (v ? ' – ' + (v.sabor||v.presentacion||'') : '');
    const cod = v ? v.codigo : (p.codigo||p.codigo_base||'');
    lines.push('*' + nom + (cod?' ('+cod+')':'') + ' x'+qty+'*');
    lines.push('  💲 Catálogo: $'+fmt(pub*qty)+' MXN');
    lines.push('  🏷️ Precio Socio: $'+fmt(soc*qty)+' MXN  ·  ⚡ '+pvn*qty+' PVN');
    tPub+=pub*qty; tSoc+=soc*qty; tPVN+=pvn*qty;
  });
  lines.push('─'.repeat(30));
  lines.push('*Total Catálogo: $'+fmt(tPub)+' MXN*');
  lines.push('*Total Precio Socio (50% desc): $'+fmt(tSoc)+' MXN*');
  lines.push('⚡ PVN Total: ' + tPVN.toLocaleString());
  if (tPVN>=8800) lines.push('⭐ ¡Activa VIP 8800!');
  else if (tPVN>=4400) lines.push('✅ ¡Activa Premium!');
  else if (tPVN>=2200) lines.push('📦 ¡Cierra tu caja!');
  lines.push('');
  lines.push('_Para completar tu pedido ingresa a tu Oficina Virtual y envía tu número de pedido al Call Center._');
  lines.push('📲 Call Center Ismerely: +52 4621958440');
  lines.push('_Cotización válida 48 horas · ismerely.com_');
  window.open('https://wa.me/?text='+encodeURIComponent(lines.join('\n')),'_blank');
}

// ── SKOOL ────────────────────────────────────────────────────
function abrirSkool() {
  if (!SKOOL_URL) {
    toast('📚 Sección de tutoriales próximamente — el link se actualizará aquí');
    return false;
  }
  return true;
}

// ── FICHAS TÉCNICAS ──────────────────────────────────────────
function abrirFicha(id) {
  const p = CATALOGO.find(x => x.id === id);
  const nombre = p ? p.nombre : id;
  window.open(FICHAS_URL + '?nombre=' + encodeURIComponent(nombre), '_blank');
  toast('📄 Abriendo ficha técnica…');
}

// ── MODO ─────────────────────────────────────────────────────
function setModo(m) {
  modoActual = m;
  document.body.className = 'modo-'+m;
  document.getElementById('tb-c').className = m==='cliente' ? 'active' : '';
  document.getElementById('tb-n').className = m==='networker' ? 'active' : '';
  updateCarrito();
}

function toggleDescuento() {
  modoDescuento = !modoDescuento;
  const btn = document.getElementById('btn-desc');
  if (modoDescuento) {
    btn.classList.add('activo');
    btn.textContent = '✅ Precio Socio 50% ACTIVO';
    toast('🏷️ Precios con 50% de descuento activados');
  } else {
    btn.classList.remove('activo');
    btn.textContent = '🏷️ Precio Socio 50%';
    toast('Precios públicos restaurados');
  }
  filtrar();
}

// ── CALCULADORA ──────────────────────────────────────────────
function renderActGrid(pvn) {
  const acts = [
    {nombre:'Cerrar Caja', pvn:2200, desc:'Habilita cobro de comisiones', icon:'📦'},
    {nombre:'Premium',     pvn:4400, desc:'50% desc · Regalo $1,000 min', icon:'⭐'},
    {nombre:'VIP 8800',    pvn:8800, desc:'50% desc · Regalo $2,500 + 1,750 créditos', icon:'💎'},
  ];
  document.getElementById('act-grid').innerHTML = acts.map(a=>{
    const ok = pvn>=a.pvn;
    return `<div class="act-c ${ok?'ok':'no'}">
      <h4>${ok?'✅':a.icon} ${a.nombre}</h4>
      <div class="pvnr">${a.pvn.toLocaleString()} PVN</div>
      <div class="bene">${a.desc}</div>
    </div>`;
  }).join('');
}

function renderBarras(pvn) {
  const pc=Math.min(100,(pvn/2200)*100);
  const pp=Math.min(100,(pvn/4400)*100);
  const pv=Math.min(100,(pvn/8800)*100);
  document.getElementById('bar-c').style.width=pc+'%';
  document.getElementById('bar-p').style.width=pp+'%';
  document.getElementById('bar-v').style.width=pv+'%';
  document.getElementById('pvn-c').textContent=pvn.toLocaleString()+' / 2,200';
  document.getElementById('pvn-p').textContent=pvn.toLocaleString()+' / 4,400';
  document.getElementById('pvn-v').textContent=pvn.toLocaleString()+' / 8,800';
  const sc=document.getElementById('st-c');
  const sp=document.getElementById('st-p');
  const sv=document.getElementById('st-v');
  if(pvn>=2200){sc.textContent='✅ ¡Caja cerrada!';sc.className='ms ms-g';}
  else{sc.textContent='Faltan '+(2200-pvn).toLocaleString()+' PVN para cerrar caja';sc.className='ms ms-x';}
  if(pvn>=4400){sp.textContent='✅ Activación Premium alcanzada';sp.className='ms ms-g';}
  else{sp.textContent='Faltan '+(4400-pvn).toLocaleString()+' PVN';sp.className='ms ms-x';}
  if(pvn>=8800){sv.textContent='✅ VIP alcanzado';sv.className='ms ms-m';}
  else{sv.textContent='Faltan '+(8800-pvn).toLocaleString()+' PVN';sv.className='ms ms-x';}
}

function renderComTbl(pvn) {
  cartPVN = pvn; // guardar PVN del carrito globalmente
  // Si el modal está abierto, actualizar nivel 1 con el PVN del carrito
  const overlay = document.getElementById('com-overlay');
  if (overlay && overlay.classList.contains('open')) {
    syncCartPVN();
  }
}

function recalcCom() { recalcComModal(); }

function syncCartPVN() {
  // Pre-llenar "mi PVN" y nivel 1 con el PVN de la cotización actual
  const ownInp = document.getElementById('com-own-pvn');
  if (ownInp && cartPVN > 0) ownInp.value = cartPVN;
  const n1inp = document.getElementById('cmi-n1');
  if (n1inp && cartPVN > 0) n1inp.value = cartPVN;
  buildComRows(); // reconstruir con nuevos valores activos
  recalcComModal();
}

function toggleComisiones() {
  const o = document.getElementById('com-overlay');
  o.classList.toggle('open');
  if (o.classList.contains('open')) {
    // Pre-llenar con PVN del carrito al abrir
    const ownInp = document.getElementById('com-own-pvn');
    if (ownInp && cartPVN > 0) ownInp.value = cartPVN;
    buildComRows();
    recalcComModal();
  }
}

function cerrarComOverlay(e) {
  if (e.target === document.getElementById('com-overlay')) toggleComisiones();
}

function buildComRows() {
  const container = document.getElementById('com-rows');
  if (!container) return;
  const ownPvn = parseFloat(document.getElementById('com-own-pvn').value) || 0;
  const cajas = Math.floor(ownPvn / NEGOCIO.pvn_caja);
  const nivActivos = Math.max(1, cajas);
  // Todas las celdas como hijos directos del grid (gracias a display:contents en com-rows)
  let html = '';
  NEGOCIO.niveles.forEach(function(n, i) {
    const act = i < nivActivos;
    const existingInp = document.getElementById('cmi-n' + n.nivel);
    const val = existingInp ? existingInp.value : (i === 0 && cartPVN > 0 ? cartPVN : (act ? 5000 : 0));
    html +=
      '<div class="com-lvl-badge ' + (act ? 'act' : '') + '" id="cmi-badge' + n.nivel + '">N' + n.nivel + '</div>' +
      '<div style="text-align:center;font-weight:700;color:' + (act ? '#ffb74d' : 'rgba(255,255,255,.5)') + '">' + n.pct + '%</div>' +
      '<input class="com-pvn-inp" id="cmi-n' + n.nivel + '" type="number" value="' + val + '" min="0" oninput="recalcComModal()" style="' + (act ? '' : 'opacity:.6;border-style:dashed') + '">' +
      '<div class="com-cell" id="cmc-pvn' + n.nivel + '">—</div>' +
      '<div class="com-cell mxn" id="cmc-mxn' + n.nivel + '">—</div>' +
      '<div class="com-cell net" id="cmc-net' + n.nivel + '">—</div>';
  });
  container.innerHTML = html;
}

function recalcComModal() {
  const PVN_TO_MXN = 1.29;
  const RET = 1 - NEGOCIO.retencion_dinero;
  const ownPvn = parseFloat(document.getElementById('com-own-pvn').value) || 0;
  const cajas = Math.floor(ownPvn / NEGOCIO.pvn_caja);
  const nivActivos = Math.max(1, cajas);
  const cajasLbl = document.getElementById('com-cajas-lbl');
  if (cajasLbl) cajasLbl.textContent = cajas + ' caja' + (cajas !== 1 ? 's' : '') + ' → ' + nivActivos + ' nivel' + (nivActivos !== 1 ? 'es' : '') + ' activo' + (nivActivos !== 1 ? 's' : '');
  let totalNeto = 0;
  NEGOCIO.niveles.forEach(function(n, i) {
    const act = i < nivActivos;
    // Actualizar badge y estado dinámicamente sin reconstruir
    const badge = document.getElementById('cmi-badge' + n.nivel);
    if (badge) { badge.className = 'com-lvl-badge' + (act ? ' act' : ''); }
    const inp = document.getElementById('cmi-n' + n.nivel);
    if (!inp) return;
    inp.disabled = false;
    inp.style.opacity = act ? '1' : '0.6';
    inp.style.borderStyle = act ? '' : 'dashed';
    const pvnNivel = parseFloat(inp.value) || 0;
    const comPVN   = pvnNivel * (n.pct / 100);
    const comBruto = comPVN * PVN_TO_MXN;
    const comNeto  = comBruto * RET;
    totalNeto += comNeto;
    const elPVN = document.getElementById('cmc-pvn' + n.nivel);
    const elMXN = document.getElementById('cmc-mxn' + n.nivel);
    const elNet = document.getElementById('cmc-net' + n.nivel);
    if (elPVN) elPVN.textContent = act ? fmt(comPVN) + ' pvn' : '—';
    if (elMXN) elMXN.textContent = act ? '$' + fmt(comBruto) : '—';
    if (elNet) elNet.textContent = act ? '$' + fmt(comNeto) : '—';
  });
  const tot = document.getElementById('com-modal-total');
  if (tot) tot.textContent = '$' + fmt(totalNeto) + ' MXN';
}

// ── NATALIA MONEY ─────────────────────────────────────────────
function toggleChat() {
  const o = document.getElementById('chat-overlay');
  o.classList.toggle('open');
}
function cerrarChatOverlay(e) {
  if (e.target.id==='chat-overlay') document.getElementById('chat-overlay').classList.remove('open');
}

function mensajeNatalia(texto) {
  const msgs = document.getElementById('chat-msgs');
  chatHistory.push({role:'assistant', content:texto});
  const d = document.createElement('div');
  d.className='msg bot'; d.textContent=texto;
  msgs.appendChild(d); msgs.scrollTop=msgs.scrollHeight;
}

async function enviarMsg() {
  const inp = document.getElementById('chat-input');
  const txt = inp.value.trim(); if (!txt) return;
  inp.value='';
  const msgs = document.getElementById('chat-msgs');
  const um = document.createElement('div'); um.className='msg usr'; um.textContent=txt; msgs.appendChild(um);
  const typing = document.createElement('div'); typing.className='msg typing'; typing.textContent='Natalia está escribiendo…'; msgs.appendChild(typing);
  msgs.scrollTop=msgs.scrollHeight;
  chatHistory.push({role:'user', content:txt});
  try {
    const resp = await fetch(
      '/api/openai',
      { method:'POST', headers:{'Content-Type':'application/json', 'Authorization':'Bearer '+OPENAI_KEY},
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [{role:'system', content: NATALIA_SYS + '\n\nNETWORKER USANDO LA APP: ' + (networker.nombre||'Invitado') + (networker.usuario?' (@'+networker.usuario+')':'') + (redClientes.length ? '\n\nSU RED (' + redClientes.length + ' contactos):\n' + redClientes.slice(0,50).map(c=>'- '+c.nombre+' (ID: '+c.id+', Nivel '+c.nivel+')').join('\n') + (redClientes.length>50?'\n... y '+(redClientes.length-50)+' mas.':'') : '') + (cliente.nombre ? '\n\nCLIENTE ACTIVO EN COTIZACION: '+cliente.nombre+' (ID: '+cliente.id+')' : '')}, ...chatHistory],
          max_tokens: 600,
          temperature: 0.7
        })
      }
    );
    const data = await resp.json();
    const reply = data.choices?.[0]?.message?.content || '❌ ' + (data.error?.message || 'Sin respuesta. Intenta de nuevo.');
    typing.remove();
    chatHistory.push({role:'assistant', content:reply});
    const rm = document.createElement('div'); rm.className='msg bot'; rm.textContent=reply; msgs.appendChild(rm);
    msgs.scrollTop=msgs.scrollHeight;
  } catch(e) {
    typing.remove();
    const er=document.createElement('div'); er.className='msg bot'; er.textContent='⚠️ Error de conexión. Verifica tu internet.'; msgs.appendChild(er);
  }
}

function preguntaRapida(q) { document.getElementById('chat-input').value=q; enviarMsg(); }

// ── HERBOLARIA DE FUEGO 4.0 ───────────────────────────────────
let herbHistory = [];
let herbPreguntaActual = ''; // pregunta del usuario que generó la recomendación

function toggleHerbolaria() {
  const o = document.getElementById('herb-overlay');
  o.classList.toggle('open');
  if (o.classList.contains('open') && herbHistory.length === 0) {
    renderHerbMsg('bot', '👋 ¡Hola! Soy **Natalia Herbolaria** 🌸\n\nTu asistente de bienestar natural con productos 100% ISMERELY. Dime tus síntomas o padecimiento y te preparo una recomendación personalizada con precios. 💪✨\n\n¿Qué te gustaría mejorar hoy?', []);
  }
}

function cerrarHerbOverlay(e) {
  if (e.target.id === 'herb-overlay') document.getElementById('herb-overlay').classList.remove('open');
}

function renderHerbMsg(tipo, texto, ids) {
  const msgs = document.getElementById('herb-msgs');
  const d = document.createElement('div');
  d.className = 'herb-msg ' + tipo;
  d.textContent = texto;
  if (ids && ids.length > 0) {
    const btns = document.createElement('div');
    btns.className = 'herb-cotizar';
    const safeIds = JSON.stringify(ids);
    btns.innerHTML = '<button class="btn-hc-normal" onclick=\'agregarHerbCarrito('+safeIds+',false)\'>🛒 Agregar al carrito</button>' +
      '<button class="btn-hc-socio" onclick=\'agregarHerbCarrito('+safeIds+',true)\'>🏷️ Con precio socio (50%)</button>';
    d.appendChild(btns);
  }
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
}

function agregarHerbCarrito(ids, conDescuento) {
  let agregados = 0;
  ids.forEach(function(pid) {
    const p = CATALOGO.find(function(x){ return x.id === pid; });
    if (!p) return;
    if (p.variantes) {
      const v = p.variantes[0];
      const key = pid + '_' + (v.codigo || v.sabor || v.presentacion);
      if (!carrito[key]) { carrito[key] = { producto:p, variante:v, qty:1 }; agregados++; }
    } else {
      if (!carrito[pid]) { carrito[pid] = { producto:p, variante:null, qty:1 }; agregados++; }
    }
  });
  if (conDescuento) modoDescuento = true;
  updateCarrito(); filtrar();
  toast('✅ ' + agregados + ' producto(s) agregados al carrito' + (conDescuento ? ' con precio socio 🏷️' : ''));
  document.getElementById('herb-overlay').classList.remove('open');
}

async function enviarMsgHerb() {
  const inp = document.getElementById('herb-input');
  const txt = inp.value.trim(); if (!txt) return;
  inp.value = '';
  const msgs = document.getElementById('herb-msgs');
  const um = document.createElement('div'); um.className='herb-msg usr'; um.textContent=txt; msgs.appendChild(um);
  const typing = document.createElement('div'); typing.className='herb-msg typing'; typing.textContent='🌸 Natalia está preparando tu recomendación personalizada…'; msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;
  herbHistory.push({role:'user', content:txt});
  try {
    const sysContent = HERBOLARIA_SYS + '\n\nUSUARIO APP: ' + (networker.nombre||'Visitante') + (cliente.nombre ? '\nCLIENTE ACTIVO: '+cliente.nombre : '');
    const geminiContents = herbHistory.map(function(m){
      return { role: m.role==='assistant'?'model':'user', parts:[{text:m.content}] };
    });
    const resp = await fetch('/api/gemini?model=gemini-2.5-flash', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        system_instruction: {parts:[{text:sysContent}]},
        contents: geminiContents,
        generationConfig: {maxOutputTokens:3000, temperature:0.75}
      })
    });
    const data = await resp.json();
    let reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '❌ ' + (data.error?.message || 'Sin respuesta. Intenta de nuevo.');
    typing.remove();
    const cotizarMatch = reply.match(/\[COTIZAR:([^\]]+)\]/);
    let ids = [];
    if (cotizarMatch) {
      ids = cotizarMatch[1].split(',').map(function(s){ return s.trim(); }).filter(function(s){ return CATALOGO.find(function(p){ return p.id===s; }); });
      reply = reply.replace(/\[COTIZAR:[^\]]+\]/, '').trim();
    }
    herbHistory.push({role:'assistant', content:reply});
    renderHerbMsg('bot', reply, ids);
  } catch(e) {
    typing.remove();
    renderHerbMsg('bot', '⚠️ Error de conexión. Verifica tu internet.', []);
  }
}

function herbPregunta(q) { document.getElementById('herb-input').value=q; enviarMsgHerb(); }

// ── PRESENTACIONES ───────────────────────────────────────────
let presHistory = [];
let presProducto = null;

function presOnProdChange() {
  const id = document.getElementById('pres-prod-sel').value;
  presProducto = id && typeof CATALOGO !== 'undefined' ? CATALOGO.find(p => p.id === id) : null;
  if (presProducto) {
    const p = presProducto;
    const precCat = p.variantes ? p.variantes[0].precio : (p.precio || '');
    const precSoc = p.variantes ? p.variantes[0].precio_socio : (p.precio_socio || '');
    const tag = document.createElement('div');
    tag.className = 'pres-msg bot';
    tag.style.cssText = 'font-size:10px;opacity:.7;border-style:dashed';
    tag.textContent = '📦 Contexto cargado: ' + p.nombre + (p.padecimientos?.length ? ' — ' + p.padecimientos.slice(0,3).join(', ') : '');
    document.getElementById('pres-msgs').appendChild(tag);
    document.getElementById('pres-msgs').scrollTop = 99999;
    presHistory.push({ role: 'user', content: '[SISTEMA] Producto: ' + p.nombre + ' | Línea: ' + (p.linea||'Ismerely') + ' | Precio catálogo: $' + precCat + ' | Precio socio: $' + precSoc + (p.padecimientos?.length ? ' | Apoya: ' + p.padecimientos.join(', ') : '') + '. Usa estos datos exactos para la presentación.' });
    presHistory.push({ role: 'assistant', content: 'Entendido. Trabajaré con ' + p.nombre + '.' });
  }
}

function togglePresentaciones() {
  const o = document.getElementById('pres-overlay');
  o.classList.toggle('open');
  if (o.classList.contains('open') && presHistory.length === 0) {
    const sel = document.getElementById('pres-prod-sel');
    if (sel && sel.options.length === 1 && typeof CATALOGO !== 'undefined') {
      const grupos = {};
      CATALOGO.forEach(p => { if (p.linea !== 'Herramienta') { if (!grupos[p.linea]) grupos[p.linea] = []; grupos[p.linea].push(p); } });
      Object.keys(grupos).sort().forEach(linea => {
        const og = document.createElement('optgroup'); og.label = linea;
        grupos[linea].forEach(p => { const opt = document.createElement('option'); opt.value = p.id; opt.textContent = p.nombre; og.appendChild(opt); });
        sel.appendChild(og);
      });
    }
    renderPresMsg('bot', '¡Hola! 👋 Soy tu asistente de presentaciones ISMERELY.\n\nSelecciona un producto arriba para darme contexto, luego dime qué tipo de presentación quieres. Generaré 6 slides profesionales. 📊');
  }
}

function cerrarPresOverlay(e) {
  if (e.target === document.getElementById('pres-overlay')) togglePresentaciones();
}

function renderPresMsg(role, text) {
  const box = document.getElementById('pres-msgs');
  const d = document.createElement('div');
  d.className = 'pres-msg ' + (role === 'bot' ? 'bot' : 'usr');
  d.textContent = text;
  box.appendChild(d);
  box.scrollTop = box.scrollHeight;
  return d;
}

async function enviarMsgPres() {
  const inp = document.getElementById('pres-input');
  const txt = inp.value.trim();
  if (!txt) return;
  inp.value = '';
  renderPresMsg('usr', txt);
  presHistory.push({ role: 'user', content: txt });
  const typing = renderPresMsg('bot', '⏳ Generando presentación…');
  typing.classList.add('typing');

  try {
    const geminiContents = presHistory.map(function(m) {
      return { role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] };
    });
    const resp = await fetch('/api/gemini?model=gemini-2.5-flash', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: PRES_SYS }] },
        contents: geminiContents,
        generationConfig: { maxOutputTokens: 3000, temperature: 0.7 }
      })
    });
    const data = await resp.json();
    if (!resp.ok) {
      typing.remove();
      const apiErr = data.error?.message || ('HTTP ' + resp.status);
      renderPresMsg('bot', '❌ Error API: ' + apiErr);
      return;
    }
    let reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '❌ Sin respuesta del modelo.';
    typing.remove();
    presHistory.push({ role: 'assistant', content: reply });

    if (reply.includes('[SLIDE:')) {
      generarSlides(reply);
      renderPresMsg('bot', '✅ ¡Presentación generada! Puedes verla a la derecha. Usa el botón 🖨️ para imprimir o guardar como PDF.');
    } else {
      renderPresMsg('bot', reply);
    }
  } catch (err) {
    typing.remove();
    renderPresMsg('bot', '⚠️ Error: ' + (err.message || err));
  }
}

function presPregunta(q) { document.getElementById('pres-input').value = q; enviarMsgPres(); }

function buildPresHTML(slides, imgUrl, color) {
  var p = slides.portada || {};
  var prob = slides.problema || {};
  var sol = slides.solucion || {};
  var bens = slides.beneficios || {};
  var test = slides.testimonios || {};
  var prec = slides.precio || {};
  var colorDark = color;
  var ingsHtml = '';
  if (sol.INGS) {
    ingsHtml = sol.INGS.split('|').map(function(i) {
      return '<span class="ing" contenteditable="false">' + esc(i.trim()) + '</span>';
    }).join('');
  } else {
    ingsHtml = (sol.I1 ? '<span class="ing" contenteditable="false">' + esc(sol.I1) + '</span>' : '') +
               (sol.I2 ? '<span class="ing" contenteditable="false">' + esc(sol.I2) + '</span>' : '') +
               (sol.I3 ? '<span class="ing" contenteditable="false">' + esc(sol.I3) + '</span>' : '');
  }
  var waNum = prec.WA_NUM || '5217292238610';
  return PRES_TEMPLATE
    .replace(/\{\{NOMBRE\}\}/g, esc(p.NOMBRE || 'ISMERELY'))
    .replace(/\{\{SUBTITULO\}\}/g, esc(p.SUBTITULO || ''))
    .replace(/\{\{COLOR\}\}/g, color)
    .replace(/\{\{COLOR_DARK\}\}/g, colorDark)
    .replace(/\{\{IMG_URL\}\}/g, imgUrl)
    .replace(/\{\{PROB_TITULO\}\}/g, esc(prob.TITULO || ''))
    .replace(/\{\{P1E\}\}/g, esc(prob.P1E || '\uD83D\uDE21'))
    .replace(/\{\{P1T\}\}/g, esc(prob.P1T || ''))
    .replace(/\{\{P1D\}\}/g, esc(prob.P1D || ''))
    .replace(/\{\{P2E\}\}/g, esc(prob.P2E || '\uD83D\uDE25'))
    .replace(/\{\{P2T\}\}/g, esc(prob.P2T || ''))
    .replace(/\{\{P2D\}\}/g, esc(prob.P2D || ''))
    .replace(/\{\{P3E\}\}/g, esc(prob.P3E || '\uD83D\uDE29'))
    .replace(/\{\{P3T\}\}/g, esc(prob.P3T || ''))
    .replace(/\{\{P3D\}\}/g, esc(prob.P3D || ''))
    .replace(/\{\{SOL_TITULO\}\}/g, esc(sol.TITULO || ''))
    .replace(/\{\{SOL_DESC\}\}/g, esc(sol.DESC || ''))
    .replace(/\{\{INGS_HTML\}\}/g, ingsHtml)
    .replace(/\{\{BENS_TITULO\}\}/g, esc(bens.TITULO || ''))
    .replace(/\{\{B1T\}\}/g, esc(bens.B1T || ''))
    .replace(/\{\{B1D\}\}/g, esc(bens.B1D || ''))
    .replace(/\{\{B2T\}\}/g, esc(bens.B2T || ''))
    .replace(/\{\{B2D\}\}/g, esc(bens.B2D || ''))
    .replace(/\{\{B3T\}\}/g, esc(bens.B3T || ''))
    .replace(/\{\{B3D\}\}/g, esc(bens.B3D || ''))
    .replace(/\{\{B4T\}\}/g, esc(bens.B4T || ''))
    .replace(/\{\{B4D\}\}/g, esc(bens.B4D || ''))
    .replace(/\{\{T1_NOMBRE\}\}/g, esc(test.T1_NOMBRE || 'Karla R.'))
    .replace(/\{\{T1_CIUDAD\}\}/g, esc(test.T1_CIUDAD || 'CDMX'))
    .replace(/\{\{T1_TEXTO\}\}/g, esc(test.T1_TEXTO || ''))
    .replace(/\{\{T2_NOMBRE\}\}/g, esc(test.T2_NOMBRE || 'Miguel A.'))
    .replace(/\{\{T2_CIUDAD\}\}/g, esc(test.T2_CIUDAD || 'Guadalajara'))
    .replace(/\{\{T2_TEXTO\}\}/g, esc(test.T2_TEXTO || ''))
    .replace(/\{\{T3_NOMBRE\}\}/g, esc(test.T3_NOMBRE || 'Sof\u00eda T.'))
    .replace(/\{\{T3_CIUDAD\}\}/g, esc(test.T3_CIUDAD || 'Monterrey'))
    .replace(/\{\{T3_TEXTO\}\}/g, esc(test.T3_TEXTO || ''))
    .replace(/\{\{PRECIO_CAT\}\}/g, esc(prec.PRECIO_CAT || ''))
    .replace(/\{\{PRECIO_SOC\}\}/g, esc(prec.PRECIO_SOC || ''))
    .replace(/\{\{PRODUCTO_INFO\}\}/g, esc(prec.PRODUCTO_INFO || ''))
    .replace(/\{\{WA_NUM\}\}/g, esc(waNum))
    .replace(/\{\{CTA_TITULO\}\}/g, esc(prec.CTA_TITULO || '\u00a1Empieza hoy!'));
}


function generarSlides(rawText) {
  var slides = {};
  var re = /\[SLIDE:(\w+)\]([\s\S]*?)\[\/SLIDE\]/g;
  var m;
  while ((m = re.exec(rawText)) !== null) {
    var tipo = m[1];
    var body = m[2];
    var campos = {};
    body.split('\n').forEach(function(line) {
      var idx = line.indexOf(':');
      if (idx > 0) {
        var k = line.substring(0, idx).trim();
        var v = line.substring(idx + 1).trim();
        if (k && v) campos[k] = v;
      }
    });
    slides[tipo] = campos;
  }
  var portada = slides.portada || {};
  var productId = portada.ID || '';
  var productEntry = CATALOGO.find(function(p) { return p.id === productId; });
  var imgUrl = (productEntry && productEntry.imagen) ? productEntry.imagen : '';
  var linea = (portada.LINEA || (productEntry && productEntry.linea) || '').toLowerCase();
  var color = portada.COLOR || '#0d47a1';
  if (!portada.COLOR) {
    if (linea.indexOf('vybes') >= 0) color = '#6a1b9a';
    else if (linea.indexOf('fitelym') >= 0 || linea.indexOf('fit') >= 0) color = '#1b5e20';
  }
  // Precios siempre desde CATALOGO (fuente de verdad), no desde lo que diga Gemini
  if (productEntry && slides.precio) {
    var precCat = productEntry.variantes ? productEntry.variantes[0].precio : productEntry.precio;
    var precSoc = productEntry.variantes ? productEntry.variantes[0].precio_socio : productEntry.precio_socio;
    if (precCat) slides.precio.PRECIO_CAT = '$' + precCat.toLocaleString('es-MX', {minimumFractionDigits:2});
    if (precSoc) slides.precio.PRECIO_SOC = '$' + precSoc.toLocaleString('es-MX', {minimumFractionDigits:2});
  }
  var html = buildPresHTML(slides, imgUrl, color);
  var blob = new Blob([html], {type: 'text/html;charset=utf-8'});
  var presUrl = URL.createObjectURL(blob);
  window.open(presUrl, '_blank');
  var container = document.getElementById('pres-slides');
  container.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:16px;color:#90caf9;text-align:center;padding:20px">' +
    '<span style="font-size:52px">✅</span>' +
    '<p style="font-size:14px;font-weight:700">Presentación generada<br>y abierta en nueva pestaña</p>' +
    '<button id="pres-reopen" style="background:#1565c0;color:#fff;border:none;border-radius:8px;padding:10px 20px;font-size:13px;font-weight:700;cursor:pointer">🔗 Abrir de nuevo</button>' +
    '</div>';
  document.getElementById('pres-reopen').onclick = function() { window.open(presUrl, '_blank'); };
}

function nuevaPresentacion() {
  document.getElementById('pres-slides').innerHTML = '<div class="pres-placeholder"><span>📊</span><p>Dile al asistente qué producto o tema<br>quieres presentar y generará los slides aquí.</p></div>';
  presHistory = [];
  document.getElementById('pres-msgs').innerHTML = '';
  renderPresMsg('bot', '¡Listo! 🗑️ Presentación borrada. ¿Qué nueva presentación quieres crear?');
}

function imprimirPresentacion() {
  const slides = document.getElementById('pres-slides');
  if (!slides.querySelector('.slide')) {
    alert('Primero genera una presentación antes de imprimir.');
    return;
  }
  window.print();
}

// ── HELPERS ──────────────────────────────────────────────────
function fmt(n){ return Math.round(n).toLocaleString('es-MX'); }
function esc(s){ return s?String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'):''; }
function toast(m){
  const t=document.getElementById('toast'); t.textContent=m; t.classList.add('on');
  setTimeout(()=>t.classList.remove('on'),2400);
}

// ── RED DE CLIENTES ───────────────────────────────────────────
const DEMO_RED = [
  {id:'86923',nombre:'EDGAR EMILIANO SANCHEZ CORTES',nivel:0},
  {id:'215361',nombre:'NANCY LILIANA RAMIREZ TELLEZ',nivel:1},
  {id:'212719',nombre:'CATALINA MARTÍNEZ SALINAS',nivel:1},
  {id:'192393',nombre:'NATALIA KURI TORRES',nivel:1},
  {id:'198303',nombre:'GABRIELA TORRES GARCIA',nivel:2},
  {id:'273472',nombre:'VANESSA HERNÁNDEZ MALDONADO',nivel:2},
  {id:'221417',nombre:'GLORIA FLORES VARGAS',nivel:1},
  {id:'198294',nombre:'JOSÉ URIEL GONZALEZ HERNANDEZ',nivel:1},
  {id:'190684',nombre:'LIZBETH GARDUÑO GUZMÁN',nivel:1},
  {id:'195549',nombre:'MARIA FELIX LINA MENDEZ',nivel:1},
  {id:'190270',nombre:'ASHLEY GALINDO DE LA ROSA',nivel:1},
  {id:'191201',nombre:'NATIVIDAD LEON VALENCIA',nivel:1},
  {id:'190695',nombre:'JANETH VALDEZ NATERAS',nivel:1},
  {id:'186272',nombre:'FAUSTINO RAMOS BONILLA',nivel:1},
  {id:'191085',nombre:'ANABEL MÍRIAM FLORES GONZÁLEZ',nivel:1},
  {id:'191152',nombre:'PALOMA DE JESUS GARCÍA',nivel:1},
  {id:'191228',nombre:'HILDA URBINA SANCHEZ',nivel:1},
  {id:'191037',nombre:'ROSA MERCADO GARDUÑO',nivel:1},
  {id:'198012',nombre:'DORIS CUBA QUILLAHUMAN',nivel:1},
  {id:'195600',nombre:'ANA DALIA GONZALEZ VALLE',nivel:1},
  {id:'195581',nombre:'DOLORES ALVAREZ HERNANDEZ',nivel:1},
  {id:'202061',nombre:'ARIANA VILLAR VÁZQUEZ',nivel:1},
  {id:'195544',nombre:'GABRIELA DIAZ HERNANDEZ',nivel:1},
  {id:'194429',nombre:'KARINA DELGADILLO NAVARRETE',nivel:1},
  {id:'194471',nombre:'MARÍA DE LOURDES ARREOLA ACOSTA',nivel:1},
  {id:'194535',nombre:'PAULA LUCIQ GUTIÉRREZ PEREZ',nivel:1},
  {id:'196209',nombre:'BERTHA BELLO RUELAS',nivel:1},
  {id:'195559',nombre:'ADRIANA FONSECA IBARRA',nivel:1},
  {id:'195541',nombre:'ALEJANDRA VAQUEZ QUIROZ',nivel:1},
  {id:'202063',nombre:'REYNA ORTEGA REYES',nivel:1},
  {id:'198287',nombre:'GUADALUPE CABRERA QUINTANA',nivel:1},
  {id:'198296',nombre:'SALVADOR GARCIA SOTERO',nivel:1},
  {id:'198329',nombre:'JULIA ZEPEDA HERNÁNDEZ',nivel:1},
  {id:'198733',nombre:'MARTHA LETICIA GASCON MARTINEZ',nivel:1},
  {id:'198736',nombre:'HILDA AMPARO AGUILAR MOGUEL',nivel:1},
  {id:'202925',nombre:'GUADALUPE VICTORIA PINEDA',nivel:1},
  {id:'200400',nombre:'SILVIA HERNANDEZ CATEYANO',nivel:1},
  {id:'202532',nombre:'MAYRA ISABEL GONZALEZ MARTINEZ',nivel:1},
  {id:'202530',nombre:'ESTEBAN JERONIMO GARCIA',nivel:1},
  {id:'202538',nombre:'JUANA MENDEZ LINA',nivel:1},
  {id:'204359',nombre:'MARÍA MAGDALENA JIMÉNEZ DAMAS',nivel:1},
  {id:'204350',nombre:'MARÍA DEL CARMEN SOTO RAMÍREZ',nivel:1},
  {id:'205456',nombre:'MAYTHE PATALEON CARBAJAL',nivel:1},
  {id:'205503',nombre:'CATALINA MERCADO RODAS',nivel:1},
  {id:'208398',nombre:'SILVIA YOLANDA NAVA ARELLANO',nivel:1},
  {id:'209641',nombre:'ROSA NONATO JIMENEZ',nivel:1},
  {id:'209625',nombre:'BASTHI CONTRERAS CAMPOS',nivel:1},
  {id:'209630',nombre:'ESTHER FLORES ROCHA',nivel:1},
  {id:'209650',nombre:'MA. DEL CARMEN RAMIREZ MONTES',nivel:1},
  {id:'209741',nombre:'GRACIELA GARCIA GONZLEZ',nivel:1},
  {id:'212723',nombre:'LETICIA MARIA MENDOZA APOLINAR',nivel:1},
  {id:'212743',nombre:'MARÍA RITA GONZÁLEZ HERNÁNDEZ',nivel:1},
  {id:'212835',nombre:'SONIA LOPEZ MALVAEZ',nivel:1},
  {id:'215248',nombre:'SARA CASTRO GARCIA',nivel:1},
  {id:'215244',nombre:'ROSA JIMENEZ TELLEZ',nivel:1},
  {id:'219336',nombre:'ELSA AURORA LEON SOSA',nivel:1},
  {id:'258925',nombre:'BEATRIZ ARCHUNDIA COLIN',nivel:1},
  {id:'260800',nombre:'MARÍA ISABEL ARCHUNDIA COLIN',nivel:2},
  {id:'262793',nombre:'ROBERTO FRANCO BERNAL',nivel:2},
  {id:'273482',nombre:'KARLA JIMENA CAMACHO ESPINO',nivel:2},
  {id:'285052',nombre:'REYNA PLATA MEDINA',nivel:2},
  {id:'288212',nombre:'NORA ALEJANDRA DE LA ROSA ACACIO',nivel:2},
  {id:'307962',nombre:'ROSA HILDA GUADALUPE CARRILLO ABRAHAM',nivel:2},
  {id:'308103',nombre:'ALEJANDRA PATRICIA CARRILLO ABRAHAM',nivel:3},
  {id:'260427',nombre:'TERESA SOMBRA HERRERA',nivel:1},
  {id:'252014',nombre:'ELVIRA GOMEZ GONZLEZ',nivel:1},
  {id:'256424',nombre:'CINTHIA HERNÁNDEZ CARMONA',nivel:1},
  {id:'254388',nombre:'BETSIE ALEYOIS GUADARRAMA VARGAS',nivel:1},
  {id:'265519',nombre:'NITZAN SHARON GONZÁLEZ CALDERON',nivel:1},
  {id:'266365',nombre:'SUGEY AGUILAR CASTAN',nivel:1},
  {id:'274567',nombre:'JAIME MEJIA MORALES',nivel:1},
  {id:'297371',nombre:'IRMA MEJIA MORALES',nivel:2},
  {id:'269572',nombre:'CRISTINA NAYELI CERVANTES CONTRERAS',nivel:1},
  {id:'270482',nombre:'MARINA MARÍA BERISTAIN',nivel:2},
  {id:'274863',nombre:'ALEJANDRA FERNANDEZ CARRILLO',nivel:1},
  {id:'275557',nombre:'MARIA DE LOS ANGELES JIMENEZ RODEA',nivel:1},
  {id:'278925',nombre:'EFREN EMETERIO LUVIANOS',nivel:1},
  {id:'281675',nombre:'EDNA GABRIELA OSORIO MIRANDA',nivel:1},
  {id:'285045',nombre:'SILVIA MONTAÑO MONTOYA',nivel:1},
  {id:'289155',nombre:'KEVIN EMMANUEL GUTIERREZ SANTOS',nivel:1},
  {id:'298362',nombre:'ALEJANDRA BECERRIL GONZALEZ',nivel:1}
];

let redClientes = [];

function actualizarContadorRed() {
  document.getElementById('ob-red-count').textContent = redClientes.length;
  document.getElementById('ob-red-info').innerHTML =
    redClientes.length > 0
      ? `👥 <b>${redClientes.length}</b> contactos cargados`
      : `👥 <b>0</b> contactos · carga tu red para autocompletar`;
}

function cargarRedDemo() {
  redClientes = [...DEMO_RED];
  try { localStorage.setItem('ismerely_red', JSON.stringify(redClientes)); } catch(e) {}
  actualizarContadorRed();
  toast('✅ Red de prueba cargada: ' + redClientes.length + ' contactos');
}

function parsearCSV(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const lines = e.target.result.split('\n');
    const parsed = [];
    lines.forEach(line => {
      const parts = line.trim().split(/[,\t]+/);
      if (parts.length < 5) return;
      // Formato Netzen: Pais Clave Upline Sponsor Nombre Rango
      // La clave viene combinada con país (107XXXXXX) o separada
      let clave = '', nombre = '';
      // Detectar si primera columna es solo "107" (separado) o "107XXXXX" (junto)
      if (parts[0].length > 3) {
        clave = parts[0].replace(/^107/, '');
        nombre = parts.slice(3).join(' ').replace(/^[\.\s]+/, '').trim();
      } else {
        clave = parts[1];
        nombre = parts.slice(4).join(' ').replace(/^[\.\s]+/, '').trim();
      }
      // Quitar el Rango (último número) del nombre
      nombre = nombre.replace(/\s+\d+$/, '').trim();
      if (clave && nombre && nombre.length > 2 && /[a-zA-ZáéíóúÁÉÍÓÚñÑ]/.test(nombre)) {
        parsed.push({ id: clave, nombre: nombre.toUpperCase(), nivel: 1 });
      }
    });
    if (parsed.length > 0) {
      redClientes = parsed;
      try { localStorage.setItem('ismerely_red', JSON.stringify(redClientes)); } catch(e) {}
      actualizarContadorRed();
      toast('✅ ' + parsed.length + ' contactos cargados desde CSV');
    } else {
      toast('⚠️ No se pudieron leer contactos. Verifica el formato CSV Netzen.');
    }
    input.value = '';
  };
  reader.readAsText(file);
}

function filtrarSugerencias() {
  if (!redClientes.length) return;
  const q = document.getElementById('ob-nombre').value.trim().toLowerCase();
  const sugg = document.getElementById('ob-sugg');
  if (q.length < 2) { sugg.style.display='none'; return; }
  const matches = redClientes.filter(c =>
    c.nombre.toLowerCase().includes(q) || c.id.includes(q)
  ).slice(0, 8);
  if (!matches.length) { sugg.style.display='none'; return; }
  sugg.innerHTML = matches.map(c =>
    `<div class="ob-sugg-item" onmousedown="seleccionarContacto('${c.id}',${JSON.stringify(c.nombre)})">
      <div class="sn">${c.nombre}</div>
      <div class="si">ID: ${c.id} · Nivel ${c.nivel}</div>
    </div>`
  ).join('');
  sugg.style.display = 'block';
}

function seleccionarContacto(id, nombre) {
  document.getElementById('ob-nombre').value = nombre;
  document.getElementById('ob-id').value = id;
  document.getElementById('ob-sugg').style.display = 'none';
}

function ocultarSugg() {
  document.getElementById('ob-sugg').style.display = 'none';
}

// ── SELECTOR DE CLIENTES EN PANEL ────────────────────────────
function inicializarRedSelector() {
  const count = redClientes.length;
  const el = document.getElementById('rs-count');
  if (el) el.textContent = count > 0 ? '(' + count + ')' : '';
  renderRedList('');
}

function toggleRedSelector() {
  const body = document.getElementById('red-sel-body');
  const arrow = document.getElementById('rs-arrow');
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  arrow.textContent = isOpen ? '▼' : '▲';
  if (!isOpen) {
    document.getElementById('red-search').value = '';
    renderRedList('');
    setTimeout(() => document.getElementById('red-search').focus(), 50);
  }
}

function renderRedList(q) {
  const list = document.getElementById('red-list');
  if (!redClientes.length) {
    list.innerHTML = '<div class="red-empty-msg">Carga tu red desde el inicio de sesión 👆</div>';
    return;
  }
  const query = (q || '').toLowerCase();
  const filtrados = redClientes.filter(c =>
    !query || c.nombre.toLowerCase().includes(query) || c.id.includes(query)
  ).slice(0, 30);
  if (!filtrados.length) { list.innerHTML = '<div class="red-empty-msg">Sin resultados</div>'; return; }
  list.innerHTML = filtrados.map(c => {
    const activo = cliente.id === c.id;
    const nom = c.nombre.replace(/'/g, "\'");
    return `<div class="red-item ${activo ? 'activo' : ''}" onmousedown="seleccionarClienteRed('${c.id}','${nom}')">
      <span class="rn">${c.nombre}</span>
      <span class="ri">ID: ${c.id}</span>
    </div>`;
  }).join('');
}

function seleccionarClienteRed(id, nombre) {
  cliente = { nombre: nombre, id: id };
  try { localStorage.setItem('ismerely_cliente', JSON.stringify(cliente)); } catch(e) {}
  // Actualizar header del selector con el cliente elegido
  const hdr = document.querySelector('#red-selector .red-sel-header span:first-child');
  const first = nombre.split(' ')[0], second = nombre.split(' ')[1]||'';
  if (hdr) hdr.innerHTML = `✅ <strong>${first} ${second}</strong> <small style="font-weight:400;color:var(--sub)">ID:${id}</small>`;
  // Cerrar panel
  document.getElementById('red-sel-body').classList.remove('open');
  document.getElementById('rs-arrow').textContent = '▼';
  // Actualizar info visible en cotización
  const ci = document.getElementById('cli-info');
  if (ci) { ci.style.display='block'; ci.innerHTML=`👤 <strong>${nombre}</strong> &nbsp;·&nbsp; ID: <strong>${id}</strong>`; }
  toast('👤 ' + first + ' ' + second + ' seleccionado');
}

cargarDatosGuardados();
// Cargar red guardada
try {
  const savedRed = localStorage.getItem('ismerely_red');
  if (savedRed) { redClientes = JSON.parse(savedRed); actualizarContadorRed(); }
} catch(e) {}

// ── Header dropdown ─────────────────────────────────────────
function toggleHdrMenu() {
  document.getElementById('hdr-menu').classList.toggle('open');
}
document.addEventListener('click', function(e) {
  const dd = document.getElementById('hdr-dropdown');
  if (dd && !dd.contains(e.target)) {
    const m = document.getElementById('hdr-menu');
    if (m) m.classList.remove('open');
  }
});

// ══════════════════════════════════════════════════════════
//  SISTEMA TRUENO 4.0
// ══════════════════════════════════════════════════════════
let truenoHistory = [];
let truenoLoading = false;
let truenoProducto = null;
let truenoInit = false;

function toggleTrueno() {
  const overlay = document.getElementById('trueno-overlay');
  const isOpen = overlay.classList.contains('open');
  // Cerrar otros modales grandes si están abiertos
  document.getElementById('carrusel-overlay')?.classList.remove('open');
  overlay.classList.toggle('open', !isOpen);
  if (!isOpen && !truenoInit) {
    truenoInit = true;
    // Poblar selector de productos
    const sel = document.getElementById('trueno-prod-sel');
    if (typeof CATALOGO !== 'undefined') {
      const grupos = {};
      CATALOGO.forEach(p => { if (!grupos[p.linea]) grupos[p.linea] = []; grupos[p.linea].push(p); });
      Object.keys(grupos).forEach(linea => {
        const og = document.createElement('optgroup'); og.label = linea;
        grupos[linea].forEach(p => {
          const opt = document.createElement('option'); opt.value = p.id; opt.textContent = p.nombre;
          og.appendChild(opt);
        });
        sel.appendChild(og);
      });
    }
    // Mensaje de bienvenida
    truenoMsg('bot', 'Holaaaa ⚡ BIENVENIDO AL SISTEMA TRUENO 4.0\n\nSoy tu estratega de marca personal. Vamos a construir tu presencia en redes de forma profesional.\n\n🎯 El proceso tiene 3 fases:\n1️⃣  AVATAR — creamos el perfil exacto de tu cliente ideal\n2️⃣  ESTRATEGIA — calendario de contenido de 7 días (semana piloto)\n3️⃣  GUIONES — scripts listos para grabar\n\nAntes de empezar: ¿puedes contarme un poco sobre tu negocio? ¿A qué te dedicas y qué resultado quieres lograr con tu contenido?');
  }
  if (!isOpen) setTimeout(() => document.getElementById('trueno-inp-txt').focus(), 100);
}

document.addEventListener('click', e => {
  if (e.target.id === 'trueno-overlay') toggleTrueno();
  if (e.target.id === 'carrusel-overlay') toggleCarrusel();
});

function truenoOnProdChange() {
  const id = document.getElementById('trueno-prod-sel').value;
  truenoProducto = id && typeof CATALOGO !== 'undefined' ? CATALOGO.find(p => p.id === id) : null;
  if (truenoProducto && truenoInit) {
    // Build rich product context and notify AI automatically
    const p = truenoProducto;
    let info = `Producto seleccionado: ${p.nombre} (Línea ${p.linea || 'Ismerely'})`;
    if (p.padecimientos?.length) info += `
Qué apoya: ${p.padecimientos.join(', ')}`;
    if (p.descripcion) info += `
Descripción: ${p.descripcion}`;
    // Show notification in chat
    const tag = document.createElement('div');
    tag.className = 'trueno-m bot';
    tag.style.cssText = 'font-size:10px;opacity:.7;border-style:dashed';
    tag.textContent = '📦 Producto actualizado: ' + p.nombre + (p.padecimientos?.length ? ' — ' + p.padecimientos.slice(0,3).join(', ') : '');
    document.getElementById('trueno-msgs').appendChild(tag);
    document.getElementById('trueno-msgs').scrollTop = 99999;
    // Inject into history so AI knows
    truenoHistory.push({ role: 'user', parts: [{ text: '[SISTEMA] ' + info + '. Ten en cuenta este producto para todas las respuestas siguientes.' }] });
    truenoHistory.push({ role: 'model', parts: [{ text: 'Entendido. Trabajaré con ' + p.nombre + ' de la línea ' + (p.linea || 'Ismerely') + '.' }] });
  }
}

function truenoMsg(role, text) {
  const msgs = document.getElementById('trueno-msgs');
  const div = document.createElement('div'); div.className = 'trueno-m ' + role; div.textContent = text;
  msgs.appendChild(div);
  // Detect strategy JSON and show visual button
  if (role === 'bot') {
    const jsonMatch = text.match(/```json([\s\S]*?)```/);
    if (jsonMatch) {
      try {
        const dias = JSON.parse(jsonMatch[1].trim());
        if (Array.isArray(dias) && dias.length > 0 && dias[0].dia) {
          localStorage.setItem('trueno_estrategia', JSON.stringify(dias));
          const btn = document.createElement('button');
          btn.className = 'trueno-estrategia-btn';
          btn.innerHTML = '✨ Ver Estrategia Visual de ' + dias.length + ' Días →';
          btn.onclick = () => window.open('estrategia-contenido.html', '_blank');
          msgs.appendChild(btn);
        }
      } catch(e) {}
    }
  }
  setTimeout(() => { msgs.scrollTop = msgs.scrollHeight; }, 50);
}

async function truenoEnviar() {
  if (truenoLoading) return;
  const inp = document.getElementById('trueno-inp-txt');
  const text = inp.value.trim(); if (!text) return;
  inp.value = '';
  truenoMsg('usr', text);
  truenoHistory.push({ role: 'user', parts: [{ text }] });
  truenoLoading = true; document.getElementById('trueno-send-btn').disabled = true;
  const typing = document.createElement('div'); typing.className = 'trueno-m typing'; typing.id = 'trueno-typing';
  typing.textContent = '⚡ Analizando...'; document.getElementById('trueno-msgs').appendChild(typing);
  document.getElementById('trueno-msgs').scrollTop = 99999;

  let prodCtx = 'Producto: no seleccionado (usa contexto general de Ismerely)';
  if (truenoProducto) {
    prodCtx = `Producto activo: ${truenoProducto.nombre}\nLínea: ${truenoProducto.linea}`;
    if (truenoProducto.padecimientos?.length) prodCtx += `\nPadecimientos que apoya: ${truenoProducto.padecimientos.join(', ')}`;
    if (truenoProducto.descripcion) prodCtx += `\nDescripción: ${truenoProducto.descripcion}`;
  }

  const sys = `Eres el SISTEMA TRUENO 4.0 — estratega experto en marca personal, contenido viral y venta relacional para distribuidores de suplementos naturales Ismerely.

CONTEXTO DEL NEGOCIO:
- Marca: Ismerely — suplementos herbales y bienestar natural
- Líneas: FitElym (bienestar), Vibes (deportes/energía), Mahal (relajación), Cosmética (belleza)
- Canal: Instagram, TikTok, Reels, venta por DM, multinivel
- ${prodCtx}

FLUJO OBLIGATORIO — sigue este orden sin saltarte fases:
FASE 1 → AVATAR | FASE 2 → ESTRATEGIA | FASE 3 → GUIONES
Indica siempre en cuál fase estás. Avanza solo cuando la anterior esté completa.

FASE 1 — AVATAR (8 sub-fases, una pregunta a la vez):
1A Nicho (especializa si es genérico)
1B Perfil básico: edad, género, ocupación
1C Problema visible
1D Frustración profunda: qué ha intentado, qué miedo tiene
1E Deseos: qué quiere lograr, deseos ocultos
1F Bloqueos: qué lo paraliza, excusas
1G Lenguaje interno: frases textuales del avatar
1H Entrega final con formato: 👤 Perfil ⚠️ Problemas 💭 Deseos ❌ Errores 🔥 Motivaciones 🧠 Frases de alto impacto 💎 Oferta ideal 🎁 Lead magnet 📲 Contenido ideal

FASE 2 — ESTRATEGIA (calendario 7 días / semana piloto):
Distribución exacta: Día 1 inconsciencia_total, Día 2 inconsciencia_total, Día 3 consciencia_emocional, Día 4 consciencia_racional, Día 5 consciencia_oportunidad, Día 6 consciencia_oportunidad, Día 7 consciencia_solucion_unica
Pilares: diferenciador | problema | resultado_deseado
Propósitos: Viral | Valor | Ventas | Formatos: solo Reel o Carrusel
Salida OBLIGATORIA: JSON válido exacto con esta estructura — array de 7 objetos, uno por día:
[{"dia":1,"nivel_consciencia":"...","formato":"...","pilar":"...","proposito":"...","idea_titular":"...","insight_clave":"...","tipo_narrativa":"...","cta_sugerido":"..."}, ...]
El JSON debe estar entre etiquetas  para poder procesarlo. Después del JSON agrega un resumen breve en español.

FASE 3 — GUIONES (19 estructuras + sistema de hooks):
Estructuras: El Problema Invisible | Escalera de Autoridad | Construcción Autoridad para Venta | Pitch Perfecto | Historias que Venden | Declaración Falsa | Regla de 3 | How To | Respuesta a Comentario | Vacío de Información | Momento WTF | Desafío Contracorriente | Roba Audiencia | Historia Inesperada | El Espejo | Héroe Caído | Efecto Mariposa | Acelera Comentarios | Recurso Gratuito Agresivo
Siempre crea 4 hooks: Verbal | Visual | Textual | Auditivo
Formato de respuesta: 1.Intención 2.Evaluación 3.Estructura+componentes 4.Hooks 5.Guion completo 6.CTA 7.Nota cumplimiento
Cumplimiento: no prometer ingresos garantizados, no claims médicos, suplementos como apoyo a hábitos saludables
Tono: directo, cercano o inspirador. Frases cortas. Habla de "tú".`;

  try {
    const resp = await fetch('/api/gemini?model=gemini-2.5-flash', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: truenoHistory, systemInstruction: { parts: [{ text: sys }] }, generationConfig: { maxOutputTokens: 4096, temperature: 0.85 } })
    });
    const data = await resp.json();
    document.getElementById('trueno-typing')?.remove();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (reply) { truenoHistory.push({ role: 'model', parts: [{ text: reply }] }); truenoMsg('bot', reply); }
    else truenoMsg('bot', '❌ Error al responder. Intenta de nuevo.');
  } catch { document.getElementById('trueno-typing')?.remove(); truenoMsg('bot', '❌ Error de conexión.'); }
  truenoLoading = false; document.getElementById('trueno-send-btn').disabled = false; inp.focus();
}

// ══════════════════════════════════════════════════════════
//  CREADOR DE CARRUSELES
// ══════════════════════════════════════════════════════════
let carruselHistory = [];
let carruselLoading = false;
let carruselProducto = null;
let carruselInit = false;

function toggleCarrusel() {
  const overlay = document.getElementById('carrusel-overlay');
  const isOpen = overlay.classList.contains('open');
  overlay.classList.toggle('open', !isOpen);
  if (!isOpen && !carruselInit) {
    carruselInit = true;
    const sel = document.getElementById('carrusel-prod-sel');
    if (typeof CATALOGO !== 'undefined') {
      const grupos = {};
      CATALOGO.forEach(p => { if (!grupos[p.linea]) grupos[p.linea] = []; grupos[p.linea].push(p); });
      Object.keys(grupos).forEach(linea => {
        const og = document.createElement('optgroup'); og.label = linea;
        grupos[linea].forEach(p => {
          const opt = document.createElement('option'); opt.value = p.id; opt.textContent = p.nombre;
          og.appendChild(opt);
        });
        sel.appendChild(og);
      });
    }
    carruselMsg('bot', '▦ ¡Hola! Soy tu asistente para crear carruseles virales de Instagram.\n\n¿Qué necesitas hoy?\n\n1️⃣  Generar ideas de carrusel\n2️⃣  Estructura completa slide por slide\n3️⃣  Optimizar un carrusel existente\n4️⃣  Solo hooks y títulos\n5️⃣  Caption y hashtags\n\nCuéntame el tema o pégame tu carrusel y empezamos 🚀');
  }
  if (!isOpen) setTimeout(() => document.getElementById('carrusel-inp-txt').focus(), 100);
}

function carruselOnProdChange() {
  const id = document.getElementById('carrusel-prod-sel').value;
  carruselProducto = id && typeof CATALOGO !== 'undefined' ? CATALOGO.find(p => p.id === id) : null;
}

function carruselMsg(role, text) {
  const msgs = document.getElementById('carrusel-msgs');
  const div = document.createElement('div'); div.className = 'carrusel-m ' + role; div.textContent = text;
  msgs.appendChild(div); setTimeout(() => { msgs.scrollTop = msgs.scrollHeight; }, 50);
}

async function carruselEnviar() {
  if (carruselLoading) return;
  const inp = document.getElementById('carrusel-inp-txt');
  const text = inp.value.trim(); if (!text) return;
  inp.value = '';
  carruselMsg('usr', text);
  carruselHistory.push({ role: 'user', parts: [{ text }] });
  carruselLoading = true; document.getElementById('carrusel-send-btn').disabled = true;
  const typing = document.createElement('div'); typing.className = 'carrusel-m typing'; typing.id = 'carrusel-typing';
  typing.textContent = '▦ Diseñando...'; document.getElementById('carrusel-msgs').appendChild(typing);
  document.getElementById('carrusel-msgs').scrollTop = 99999;

  let prodCtx = 'Producto: no seleccionado';
  if (carruselProducto) {
    prodCtx = `Producto: ${carruselProducto.nombre} (${carruselProducto.linea})`;
    if (carruselProducto.padecimientos?.length) prodCtx += ` — apoya: ${carruselProducto.padecimientos.join(', ')}`;
  }

  const sys = `Eres un experto en creación de carruseles virales para Instagram, especializado en suplementos naturales, bienestar y negocio multinivel.

CONTEXTO: Marca Ismerely — suplementos herbales. ${prodCtx}

PRIMER PASO: identifica qué quiere el usuario:
1. Idea nueva → 3 ideas con ángulo, tipo y por qué funciona
2. Estructura completa → guion slide por slide
3. Optimización → auditoría + versión mejorada
4. Hooks/títulos → 10-20 organizados por categoría
5. Caption/hashtags → según objetivo
Si falta contexto, pregunta brevemente por: tema, objetivo, enfoque y tono.

ESTRUCTURA PARA CARRUSEL COMPLETO:
📋 INFORMACIÓN BÁSICA: Tema | Tipo | Tono | Objetivo
🎬 GUION SLIDE POR SLIDE (10 slides):
  Slide 1 — Hook (para el scroll): Texto | Objetivo | Diseño sugerido
  Slide 2 — Problema/contexto: Texto | Objetivo | Diseño
  Slides 3-8 — Desarrollo (pasos, errores, tips, historia): Texto | Objetivo | Diseño
  Slide 9 — Insight clave/cierre emocional: Texto | Objetivo | Diseño
  Slide 10 — CTA: Texto | Objetivo | Diseño
🎨 DISEÑO GLOBAL: Tipografía | Paleta | Indicadores swipe
✍️ CAPTION: Hook apertura + contexto + CTA
# HASHTAGS: 3-5 de nicho
📈 RECOMENDACIÓN: CTA prioritario | Cómo reforzar en historias

REGLAS: Un mensaje por slide. Frases cortas. Diseño 100% móvil. Máx 2 tipografías. Alto contraste.
HOOKS SLIDE 1: Negativo | Desafío | Misterio | Número | Revelación | Estadística | Contraste | Creencia Limitante | Filtrante | Deseo
CUMPLIMIENTO: Sin claims médicos absolutos. Suplementos como apoyo a hábitos saludables.`;

  try {
    const resp = await fetch('/api/gemini?model=gemini-2.5-flash', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: carruselHistory, systemInstruction: { parts: [{ text: sys }] }, generationConfig: { maxOutputTokens: 2048, temperature: 0.85 } })
    });
    const data = await resp.json();
    document.getElementById('carrusel-typing')?.remove();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (reply) { carruselHistory.push({ role: 'model', parts: [{ text: reply }] }); carruselMsg('bot', reply); }
    else carruselMsg('bot', '❌ Error al responder.');
  } catch { document.getElementById('carrusel-typing')?.remove(); carruselMsg('bot', '❌ Error de conexión.'); }
  carruselLoading = false; document.getElementById('carrusel-send-btn').disabled = false; inp.focus();
}
// ══════════════════════════════════════════════════════════
//  GOLLIAT HUB — Navigation Layer
// ══════════════════════════════════════════════════════════

let appInitialized = false;

function golliatAbrir(seccion) {
  // Hide dashboard
  document.getElementById('golliat-dash').classList.add('hidden');
  document.getElementById('ob').style.display = 'none'; // hide legacy
  
  // Show return to hub button
  document.getElementById('btn-volver-hub').classList.remove('hidden');

  switch(seccion) {
    case 'cotizador':
      // The background app is already visible, we just need the dashboard gone
      break;
    case 'herbolaria':
      if(!document.getElementById('herb-overlay').classList.contains('open')) toggleHerbolaria();
      break;
    case 'money':
      window.open('natalia-money.html', '_blank');
      golliatVolver();
      break;
    case 'presentaciones':
      if(!document.getElementById('pres-overlay').classList.contains('open')) togglePresentaciones();
      break;
    case 'comisiones':
      if(!document.getElementById('com-overlay').classList.contains('open')) toggleComisiones();
      break;
    case 'inventario':
      window.open('inventario.html', '_blank');
      golliatVolver();
      break;
    case 'afiliar':
      window.open('afiliacion-ismerely.html', '_blank');
      golliatVolver();
      break;
    case 'marca':
      if(!document.getElementById('trueno-overlay')?.classList.contains('open')) toggleTrueno();
      break;
    case 'tutoriales':
      abrirSkool();
      golliatVolver();
      break;
    case 'red':
      document.getElementById('csv-hdr-input').click();
      golliatVolver();
      break;
    case 'descuento':
      toggleDescuento();
      golliatVolver();
      break;
    case 'carrusel':
      if(!document.getElementById('trueno-overlay')?.classList.contains('open')) toggleTrueno();
      setTimeout(function(){ 
        if(!document.getElementById('carrusel-overlay')?.classList.contains('open')) toggleCarrusel(); 
      }, 300);
      break;
  }
}

function golliatVolver() {
  // 1. Close all active overlays
  const overlays = ['herb-overlay', 'chat-overlay', 'pres-overlay', 'com-overlay', 'trueno-overlay', 'carrusel-overlay'];
  overlays.forEach(id => {
    const el = document.getElementById(id);
    if(el && el.classList.contains('open')) el.classList.remove('open');
  });
  
  // 2. Hide the back button
  document.getElementById('btn-volver-hub').classList.add('hidden');
  
  // 3. Show dashboard
  document.getElementById('golliat-dash').classList.remove('hidden');
}

// Name auto-fill removed — handled by Supabase auth

// ── SUPABASE CONFIG ─────────────────────────────────────────────────────
const SUPA_URL = 'https://hxcnwilijjkmowhylycs.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4Y253aWxpamprbW93aHlseWNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1MDYyNjUsImV4cCI6MjA5MTA4MjI2NX0.B8hUFo9DYswUr2KUAz11kUG2xY4ufcENwnn38TUMxBs';
let supa = null;
try {
  supa = supabase.createClient(SUPA_URL, SUPA_KEY);
} catch(e) {
  console.warn('Supabase no disponible, modo sin conexión', e);
}
let golliatModo = 'simple';
let currentUser = null;
let currentPerfil = null;

function authTab(t) {
  document.getElementById('atab-login').classList.toggle('on', t==='login');
  document.getElementById('atab-reg').classList.toggle('on', t==='reg');
  document.getElementById('af-login').classList.toggle('hidden', t!=='login');
  document.getElementById('af-reg').classList.toggle('hidden', t==='login');
}
function authSetErr(id,msg){const el=document.getElementById(id);el.textContent=msg;el.classList.toggle('show',!!msg);}

async function authLogin() {
  const email=document.getElementById('li-email').value.trim();
  const pass=document.getElementById('li-pass').value;
  if(!email||!pass){authSetErr('li-err','Completa todos los campos');return;}
  if(!supa){authSetErr('li-err','Sin conexión a internet. Verifica tu red.');return;}
  const btn=document.getElementById('li-btn');
  btn.disabled=true;btn.textContent='Verificando...';
  authSetErr('li-err','');
  const{data,error}=await supa.auth.signInWithPassword({email,password:pass});
  if(error){authSetErr('li-err','Correo o contrase\u00f1a incorrectos');btn.disabled=false;btn.textContent='ENTRAR';return;}
  await onAuthSuccess(data.user);
}

async function authRegister() {
  const nombre=document.getElementById('re-nombre').value.trim();
  const email=document.getElementById('re-email').value.trim();
  const pass=document.getElementById('re-pass').value;
  if(!nombre||!email||!pass){authSetErr('re-err','Completa todos los campos');return;}
  if(!supa){authSetErr('re-err','Sin conexión a internet. Verifica tu red.');return;}
  if(pass.length<6){authSetErr('re-err','La contrase\u00f1a debe tener al menos 6 caracteres');return;}
  const btn=document.getElementById('re-btn');
  btn.disabled=true;btn.textContent='Creando cuenta...';
  authSetErr('re-err','');
  const{data,error}=await supa.auth.signUp({email,password:pass,options:{data:{nombre}}});
  if(error){authSetErr('re-err',error.message.includes('already')?'Este correo ya est\u00e1 registrado':'Error al crear cuenta');btn.disabled=false;btn.textContent='CREAR CUENTA';return;}
  await onAuthSuccess(data.user,nombre);
}

async function onAuthSuccess(user,nombreOverride) {
  currentUser=user;
  const{data:perfil}=await supa.from('usuarios').select('*').eq('id',user.id).single();
  currentPerfil=perfil;
  const nombre=nombreOverride||perfil?.nombre||user.email.split('@')[0];
  const tipo=perfil?.tipo||'invitado';
  golliatModo=(tipo==='miembro'||tipo==='admin')?'miembro':'simple';
  document.getElementById('auth-screen').classList.add('hidden');
  aplicarModoUI();
  networker={nombre};
  try{localStorage.setItem('ismerely_networker',JSON.stringify(networker));}catch(e){}
  actualizarHeaderUsuario();
  if(!appInitialized){
    mensajeNatalia('\u00a1Hola '+nombre.split(' ')[0]+'! Soy Natalia Money, tu asesora Ismerely...');
    init();appInitialized=true;
  }
  if(golliatModo==='miembro'){
    document.getElementById('golliat-splash').classList.remove('hidden');
    document.getElementById('gsp-welcome-name').textContent=nombre;
    document.getElementById('gd-nombre').textContent=nombre;
  } else {
    if(!localStorage.getItem('goliath_tour_done')) tourStart();
  }
}

function aplicarModoUI() {
  const esMiembro=golliatModo==='miembro';
  document.querySelectorAll('.modo-miembro-only').forEach(el=>{el.style.display=esMiembro?'':'none';});
  const pvnWrap=document.getElementById('pvn-progress-wrap');
  if(pvnWrap)pvnWrap.style.display=esMiembro?'':'none';
  const calcPanel=document.getElementById('calc-panel');
  if(calcPanel)calcPanel.style.display=esMiembro?'':'none';
  const btnDesc=document.getElementById('btn-desc');
  if(btnDesc)btnDesc.style.display=esMiembro?'':'none';
}

const TOUR_STEPS=[
  {icon:'\ud83c\udf3f',title:'Productos naturales de alto rendimiento',desc:'Suplementos desarrollados con ciencia y avalados por miles de familias en M\u00e9xico.',btn:'Siguiente \u2192'},
  {icon:'\ud83d\udcf2',title:'Arma tu pedido en segundos',desc:'Selecciona productos, ve tus precios y env\u00eda tu cotizaci\u00f3n directo por WhatsApp.',btn:'Siguiente \u2192'},
  {icon:'\ud83e\udd1d',title:'\u00bfQuieres m\u00e1s que solo comprar?',desc:'Como socio accedes a precios hasta 50% menores y puedes construir tu propio equipo.',btn:null}
];
let tourStep=0;

function tourStart(){tourStep=0;document.getElementById('tour-ov').classList.remove('hidden');tourRender();}
function tourRender(){
  const s=TOUR_STEPS[tourStep];
  document.getElementById('tour-icon').textContent=s.icon;
  document.getElementById('tour-title').textContent=s.title;
  document.getElementById('tour-desc').innerHTML=s.desc;
  document.getElementById('tour-num').textContent='PASO '+(tourStep+1)+' DE '+TOUR_STEPS.length;
  [0,1,2].forEach(i=>document.getElementById('td'+i).classList.toggle('on',i===tourStep));
  const bw=document.getElementById('tour-btn-wrap');
  if(tourStep===2){
    bw.innerHTML='<div class="tour-cta-btns"><button class="tour-cta-socio" onclick="tourQuieroSocio()">\ud83d\udcf2 Quiero ser Socio</button><button class="tour-cta-solo" onclick="tourSkip()">Solo quiero cotizar por ahora</button></div>';
  } else {
    bw.innerHTML='<button class="tour-next" onclick="tourNext()">'+s.btn+'</button><button class="tour-skip" onclick="tourSkip()">Saltar introducci\u00f3n</button>';
  }
}
function tourNext(){if(tourStep<TOUR_STEPS.length-1){tourStep++;tourRender();}}
function tourSkip(){localStorage.setItem('goliath_tour_done','1');document.getElementById('tour-ov').classList.add('hidden');}
function tourQuieroSocio(){
  tourSkip();
  const msg=encodeURIComponent('\u00a1Hola! Vi el cat\u00e1logo ISMERELY y quiero saber m\u00e1s sobre ser Socio de la Sociedad de Fuego');
  window.open('https://wa.me/?text='+msg,'_blank');
}

function golliatIniciar(){
  const nombre=currentPerfil?.nombre||networker?.nombre||'Guerrero';
  document.getElementById('gd-nombre').textContent=nombre;
  document.getElementById('golliat-splash').classList.add('hidden');
  setTimeout(()=>document.getElementById('golliat-dash').classList.remove('hidden'),300);
}

function actualizarPVNProgress(pvnTotal){
  if(golliatModo!=='miembro')return;
  const wrap=document.getElementById('pvn-progress-wrap');
  if(!wrap||wrap.style.display==='none')return;
  const metas=[{n:'Cerrar Caja',v:2200},{n:'Premium',v:4400},{n:'VIP 8800',v:8800}];
  let meta=metas[metas.length-1];
  for(const m of metas){if(pvnTotal<m.v){meta=m;break;}}
  const pct=Math.min(100,Math.round((pvnTotal/meta.v)*100));
  const faltan=meta.v-pvnTotal;
  document.getElementById('pvn-bar-fill').style.width=pct+'%';
  document.getElementById('pvn-prog-meta').textContent=meta.n;
  document.getElementById('pvn-prog-vals').textContent=pvnTotal.toLocaleString('es-MX')+' / '+meta.v.toLocaleString('es-MX');
  const msg=document.getElementById('pvn-meta-msg');
  if(pvnTotal>=8800){msg.textContent='\u2705 \u00a1VIP 8800 activado!';msg.className='pvn-meta-msg done';}
  else if(faltan<=500){msg.textContent='\u26a1 \u00a1Te faltan solo '+faltan.toLocaleString('es-MX')+' PVN para '+meta.n+'!';msg.className='pvn-meta-msg close';}
  else{msg.textContent='Faltan '+faltan.toLocaleString('es-MX')+' PVN para '+meta.n;msg.className='pvn-meta-msg';}
}

function authModoLocal(){
  document.getElementById('auth-screen').classList.add('hidden');
  golliatModo = 'simple';
  aplicarModoUI();
  const nombre = 'Invitado';
  networker = {nombre};
  try{localStorage.setItem('ismerely_networker',JSON.stringify(networker));}catch(e){}
  actualizarHeaderUsuario();
  if(!appInitialized){
    mensajeNatalia('¡Hola! Soy Natalia Money, tu asesora Ismerely...');
    init();appInitialized=true;
  }
  if(!localStorage.getItem('goliath_tour_done')) tourStart();
}

(async()=>{
  try{
    if(!supa){console.warn('Supabase no disponible');return;}
    const{data:{session}}=await supa.auth.getSession();
    if(session?.user)await onAuthSuccess(session.user);
  }catch(e){console.warn('Auth check failed',e);}
})();

