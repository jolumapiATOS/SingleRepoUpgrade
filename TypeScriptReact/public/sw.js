const staticResources = 'static-caches-v1'
const fetchedResources = [
    '/',
    '/index.html',
    '/static/js/bundle.js'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(staticResources).then((cache)=> {
            console.log("Caching assets")
            cache.addAll(fetchedResources);
        })
    );
    //console.log("Installed the service worker")
});

self.addEventListener('activate', function(event) {
    console.log("Service Worker Activated")
});

self.addEventListener('fetch', function(event) {
    
    event.respondWith(
        caches.match(event.request).then( cacheRsp => {
            return cacheRsp || fetch(event.request);
        })
    );
    
    //console.log(event)
})

