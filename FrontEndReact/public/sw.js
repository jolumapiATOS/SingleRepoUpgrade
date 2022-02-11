const staticCacheName = "site-static-v17";
const dynamicCacheName = "v5"
const assets = [
    "/",
    "/offline/offline.html",
    "/offline/404.svg",
    "/offline/style.css",
    "/logo.svg",
    "/logoApp.svg",
    "/logo-fom2.svg",
    "logo-form.svg"
]

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(staticCacheName).then( cache => {
            console.log("caching assets")
            cache.addAll(assets);
    
    }));
    //console.log("Welcome to the jungle 🥳");
});

self.addEventListener("activate", function(event){
    console.log("Your service worker has been installed");
})

self.addEventListener("fetch", async (evt) => {
    
    console.log( evt.request );

    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
          return cacheRes || fetch(evt.request).then(fetchRes => {
            return caches.open(dynamicCacheName).then(cache => {
              cache.put(evt.request.url, fetchRes.clone());
              return fetchRes;
            })
          });
        }).catch(() => caches.match('/offline/offline.html'))
    )
})