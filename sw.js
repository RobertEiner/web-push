// self.addEventListener('push', () => {
//     self.registration.showNotification('Test message', {
//         body: 'hey there'
//     });
// });

self.addEventListener('push', function(event) {
    event.waitUntil(self.registration.showNotification('ServiceWorker Cookbook', {
      body: 'Push Notification Subscription Management'
    }));
  });