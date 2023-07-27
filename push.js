var push = require("web-push");

let vapidKeys = {
  publicKey:
    "BLXMkGx_0LrTOphX0CtDdXZAPaWmk1ycBhTEMKEnyThTRrK0e-JJG6AmTkLn7JpdWz_GBDQFSBKj1lwdNZr7uEI",
  privateKey: "xMMoKnz4F9Q7AntqongAr8eymZ89RoMhFz1j_cFSMPc",
};

push.setVapidDetails(
  "mailto:test@code.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/ft2ZZyZDkvg:APA91bF7f_7hZqMMKaN5sv_2f675vrbbLN_DSxEQtLtCcr-esL_QVjYKMq4-flnxKa2n3HTIqAwI1ONCIF5Afphg2XESg0Bvy11J-HaweVOtn45iRF4DgxPklRXj5HAqvF4bWhj0XobQ",
  expirationTime: null,
  keys: {
    p256dh:
      "BM8qva-_5XSNF8fFxJX5IAN0X7YOwyVJ4lE-AwcnJhcAP5gCFYnm0hPotf3EtWI50nXa2XOAsAWzeav0Q5RTppY",
    auth: "Hj2Kk7K6E6MFpgjBzOuF7Q",
  },
};

push.sendNotification(sub, "test message");
