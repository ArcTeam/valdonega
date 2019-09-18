if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful: ', registration);
      })
      .catch(err => console.error('ServiceWorker registration failed', err));
  });
}
