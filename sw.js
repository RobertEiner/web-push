self.addEventListener("push", () => {
  self.ServiceWorkerRegistration.sendNotification("Test message");
});
