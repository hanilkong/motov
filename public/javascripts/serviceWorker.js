if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/index.js', {
    scope: '/'
  }).then(function(registration) {
    console.log('서비스워커 등록 성공 ', registration.scope);
  }).catch(function(err) {
    console.log('서비스워커 등록 실패: ', err)
  })
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache-name').then(function(cache) {
      return cache.addAll([
        '/',
        '/javascripts/lib/*.js',
        '/stylesheets/*.css',
        'stylesheets/fonts/*.woff2',
        '/images/desktop//(\.gif|\.jpg|\.jpeg)$/i',
        '/images/mobile//(\.gif|\.jpg|\.jpeg)$/i',
           ]);
    }).then(function(){
      console.log('설치완료')
    }).catch(function(){
      console.log('설치실패')
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
   caches.match(event.request)
     .then(function(response) {
       if (response) {
         return response;
       }
       return fetch(event.request);
     }
   )
 )
})