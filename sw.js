self.addEventListener('push', () => {
    self.registration.showNotification('Test message', {
        body: 'hey there'
    });
});
