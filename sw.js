const VERSION = "v1";
self.addEventListener('install', event => {
    event.waitUntil(precache());
});

self.addEventListener('fetch', event =>{
    const request = event.request;
    //only get
    if(request.method !== "GET"){
        return;
    }
    //Buscar en el cache
    event.respondWith(cachedResponse(request));

    //actualizar el cache
    //event.waitUntil(updateCache(request));
})

async function precache () {
    const cache = await caches.open(VERSION );
    return cache.addAll([
        '/',
        '/index.html',
        '/src/index.js',
        '/src/mediaPlayer.js',
        '/src/plugins/Autoplay.js',
        '/src/plugins/AutoPause.js',
        '/src/index.css',
        '/src/dablito.mp4',
    ]);
}

//async function cachedResponse(request) {
//    const cache = await caches.open(VERSION);
//    const response = await cache.match(request);
 //   return response || fetch(request);
//}
