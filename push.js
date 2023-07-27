var push = require('web-push');



let vapidKeys = {
    publicKey: 'BLXMkGx_0LrTOphX0CtDdXZAPaWmk1ycBhTEMKEnyThTRrK0e-JJG6AmTkLn7JpdWz_GBDQFSBKj1lwdNZr7uEI',
    privateKey: 'xMMoKnz4F9Q7AntqongAr8eymZ89RoMhFz1j_cFSMPc'
  }

push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey);


let sub = {};
push.sendNotification(sub, 'test message');