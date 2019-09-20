let newWorker;
function showUpdateBar() {
  let updateDiv = document.getElementById('updateAvailable');
  updateDiv.className = 'show';
}
document.getElementById('update').addEventListener('click', function(){
  newWorker.postMessage({ action: 'skipWaiting' });
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(reg => {
      console.log('ServiceWorker registration successful: ', reg);
      reg.addEventListener('updatefound', () => {
        // A wild service worker has appeared in reg.installing!
        newWorker = reg.installing;
        newWorker.addEventListener('statechange', () => {
          // Has network.state changed?
          switch (newWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                // new update available
                showUpdateBar();
              }
              // No update available
              break;
          }
        });
      });
    })
    .catch(err => console.error('ServiceWorker registration failed', err));

    let refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (refreshing) return;
      window.location.reload();
      refreshing = true;
    });
  });
}
