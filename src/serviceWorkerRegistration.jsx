// ❌ Disable service worker registration
export function register() {
  // Do nothing — offline caching disabled
  console.log('[SW] Skipped registration — offline caching is disabled.');
}

// ✅ Unregister existing service worker (if any)
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
