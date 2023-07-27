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
    "https://wns2-db5p.notify.windows.com/w/?token=BQYAAABQ0Qc%2f22bsD%2f0BE0TozDH6x6GudOtH2mgrDs%2f3BnQkEtk%2fpW6MQhKSwXRCy9vHu4DLYs6G4r6eB9FXbnrCi4FQOtt6dv78gaQyK5cF5OE2RJJfJWfbFuAkCOb2%2bLlaXPHVUpis3Ly0vaxbsoZLTq64JHBzIcmWDQPuZoDp6lk%2fccloAwNRdw84uAxoVH8l24pCVw%2bYKW46S1WqRk0Q8MqSS6%2faWilFsG7kwUt79ys%2fTAR%2b1BI%2bmKE9lnpXRms7Z94nwoQ4XLe0a6xcWi0kunYJuI2N%2bmova%2f2cHqZFsb5kM6HkQEGNDcBF%2fiZvz%2fgoVIZFK4C34k6RgxSVitPyUtUu",
  expirationTime: null,
  keys: {
    p256dh:
      "BBV_Gl2bRIR2e_q1NlWeRegNmGH_6c9050Im2tjtHzL6Vep1ObP_SDm4t_32MJHkGQSeg2fgZGL35Tah2ymLgMI",
    auth: "7HPOcI-KiZWAmKVr5E3i-w",
  },
};
push.sendNotification(sub, "test message");
