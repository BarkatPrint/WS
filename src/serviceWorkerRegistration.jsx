// serviceWorkerRegistration.js

export function register() {
  // Skipped registration — offline caching is disabled.
  console.log('[SW] Skipped registration — offline caching is disabled.');
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister().then(() => {
          console.log('[SW] Unregistered successfully');
        });
      })
      .catch((error) => {
        console.error('[SW] Unregister error:', error);
      });
  }
}
