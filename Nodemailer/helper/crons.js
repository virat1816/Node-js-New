const CronJob = require("cron").CronJob;

/** It's running on every 5 seconds. */
new CronJob(
  "*/5 * * * * *",
  function () {
    console.log("It's running on every 5 seconds.");
  },
  null,
  false,  "Asia/Kolkata"
).start();

// /** It's running on when clock time is 7:45 of 24 hours */
// new CronJob(
//   "45 7 * * *",
//   function () {
//     console.log("It's running on when clock time is 7:45");
//   },
//   null,
//   false,
//   //   "America/Sao_Paulo"
//   "Asia/Kolkata"
// ).start();
