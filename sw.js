const cacheName = 'valdonega.190918.v1';
const cacheFile = [
  './',
  './webfonts/fa-solid-900.ttf',
  './webfonts/fa-solid-900.woff',
  './webfonts/fa-brands-400.eot',
  './webfonts/fa-brands-400.woff',
  './webfonts/fa-solid-900.eot',
  './webfonts/fa-brands-400.ttf',
  './webfonts/fa-regular-400.woff2',
  './webfonts/fa-brands-400.svg',
  './webfonts/fa-solid-900.svg',
  './webfonts/fa-regular-400.woff',
  './webfonts/fa-solid-900.woff2',
  './webfonts/fa-regular-400.eot',
  './webfonts/fa-regular-400.ttf',
  './webfonts/fa-brands-400.woff2',
  './webfonts/fa-regular-400.svg',
  './assets/img/mibac.jpg',
  './assets/img/archeonaute.jpg',
  './assets/img/pianta_villa.jpg',
  './assets/img/pianta_villa_hor.jpg',
  './assets/img/cariverona.jpg',
  './assets/icons/icons-192.png',
  './assets/icons/home.svg',
  './assets/icons/icons-512.png',
  './assets/icons/home.png',
  './pianta/pianta_ar.jpg',
  './pianta/pianta.svg',
  './pianta/index2.jpeg',
  './pianta/index.jpeg',
  './index.html',
  './app_3dhop/models/singleres/cube3.ply',
  './app_3dhop/models/singleres/villa_m10_rot_scale5.ply',
  './app_3dhop/models/singleres/cube6.ply',
  './app_3dhop/models/singleres/cube11.ply',
  './app_3dhop/models/singleres/cube7.ply',
  './app_3dhop/models/singleres/cube5.ply',
  './app_3dhop/models/singleres/cube9.ply',
  './app_3dhop/models/singleres/cube10.ply',
  './app_3dhop/models/singleres/cube2.ply',
  './app_3dhop/models/singleres/cube4.ply',
  './app_3dhop/models/singleres/cube1.ply',
  './app_3dhop/models/singleres/cube13.ply',
  './app_3dhop/models/singleres/cube8.ply',
  './app_3dhop/models/singleres/cube12.ply',
  './app_3dhop/valdonega/trackball_sphere.js',
  './app_3dhop/valdonega/lightcontrol.png',
  './app_3dhop/valdonega/fringuello.jpg',
  './app_3dhop/valdonega/lighting.png',
  './app_3dhop/valdonega/home3.png',
  './app_3dhop/valdonega/help_on.png',
  './app_3dhop/valdonega/pin.png',
  './app_3dhop/valdonega/villa.js',
  './app_3dhop/valdonega/zoomout.png',
  './app_3dhop/valdonega/giove.jpg',
  './app_3dhop/valdonega/help.png',
  './app_3dhop/valdonega/cardellino.jpg',
  './app_3dhop/valdonega/close.png',
  './app_3dhop/valdonega/full.png',
  './app_3dhop/valdonega/spidergl.js',
  './app_3dhop/valdonega/passero.jpg',
  './app_3dhop/valdonega/home.png',
  './app_3dhop/valdonega/credits.png',
  './app_3dhop/valdonega/title.png',
  './app_3dhop/valdonega/ply.js',
  './app_3dhop/valdonega/galletto.jpg',
  './app_3dhop/valdonega/atena.jpg',
  './app_3dhop/valdonega/nexus.js',
  './app_3dhop/valdonega/logo.png',
  './app_3dhop/valdonega/grifoni.jpg',
  './app_3dhop/valdonega/zoomin.png',
  './app_3dhop/valdonega/lighting_off.png',
  './app_3dhop/valdonega/3dhop.css',
  './app_3dhop/valdonega/ippocampi.jpg',
  './app_3dhop/valdonega/trackball_turntable.js',
  './app_3dhop/valdonega/home2.png',
  './app_3dhop/valdonega/presenter.js',
  './app_3dhop/valdonega/trackball_pantilt.js',
  './app_3dhop/valdonega/struzzo.jpg',
  './app_3dhop/valdonega/lightcontrol_on.png',
  './app_3dhop/valdonega/full_on.png',
  './app_3dhop/valdonega/anatra.jpg',
  './app_3dhop/valdonega/close_on.png',
  './app_3dhop/valdonega/home1.png',
  './app_3dhop/valdonega/merlo.jpg',
  './app_3dhop/valdonega/villa.css',
  './app_3dhop/valdonega/pin_on.png',
  './app_3dhop/valdonega/jquery.js',
  './app_3dhop/valdonega/civetta.jpg',
  './app_3dhop/valdonega/maschera.jpg',
  './app_3dhop/valdonega/init.js',
  './app_3dhop/3dhop.html',
  './app_ar/ar_frame.html',
  './app_ar/patt/pattern-pianta_ar.patt',
  './app_ar/patt/patt.hiro',
  './app_ar/patt/pattern-colonna.png',
  './app_ar/patt/pattern-pianta_ar.png',
  './app_ar/patt/pattern-valdonega.patt',
  './app_ar/patt/pattern-valdonega.png',
  './app_ar/patt/pattern-colonna.patt',
  './app_ar/patt/patt.kanji',
  './app_ar/scripts/aframe-ar.js',
  './app_ar/scripts/aframe.min.js',
  './app_ar/scripts/camera_para.dat',
  './app_ar/models/facciata_lunga_2.jpg',
  './app_ar/models/TexturesCom_ConcreteStucco0173_1_seamless_S_scuro.jpg',
  './app_ar/models/facciata_corta_2.jpg',
  './app_ar/models/villa_valdonega_con_mosaico.obj',
  './app_ar/models/rosso_bis.jpg',
  './app_ar/models/villa_valdonega_con_mosaico.mtl',
  './app_ar/models/facciata_lunga_specchiata_2.jpg',
  './app_ar/models/villa_valdonega_intero3.mtl',
  './app_ar/models/TexturesCom_ConcreteStucco0173_1_seamless_S.jpg',
  './app_ar/models/villa_valdonega_intero3.obj',
  './app_ar/models/intonaco_rosso.jpg',
  './app_ar/models/TexturesCom_ConcreteStucco0195_1_seamless_BEIGE.jpg',
  './app_ar/models/mosaico_stanze.jpg',
  './app_ar/models/pietra-del-mare-bocciardato-e1450793218951.jpg',
  './app_ar/models/mosaico.jpg',
  './app_ar/models/facciata_ingresso_2.jpg',
  './app_ar/models/_13-rosso_veorona_bocciardato_e_spazzolato.jpg',
  './app_ar/ar.html',
  './js/index.js',
  './js/bootstrap.js',
  './css/header.css',
  './css/index.css',
  './css/bootstrap.css',
  './css/fa-all.min.css',
  './manifest.json',
  './favicon.ico',
  './app_pano360/img/villa360.jpg',
  './app_pano360/asset/aframe.min.js',
  './app_pano360/pano_frame.html',
  './app_pano360/pano360.html'
];
self.addEventListener('install', e => {
  console.log('The service worker is being installed.');
  e.waitUntil(precache())
});

function precache() {
  return caches.open(cacheName).then(function (cache) {
    return cache.addAll(cacheFile);
  });
}

self.addEventListener('activate', event => {
  console.log('Activating new service worker...');
  const cacheWhitelist = [cacheName];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(oldCache => {
          if (cacheWhitelist.indexOf(oldCache) === -1) {
            return caches.delete(oldCache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('The service worker is serving the asset.');
  event.respondWith(
    fromCache(event.request)
  );
  event.waitUntil(update(event.request));
});

function fromCache(request) {
  return caches.open(cacheName).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}
function update(request) {
  return caches.open(cacheName).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}
