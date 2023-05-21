const { parentPort } = require('worker_threads');

async function fetchData() {
  console.log(await fetch("https://kuru-kuru-count-api.onrender.com/update", {
    "headers": {
      
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "Referer": "https://duiqt.github.io/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"count\":10,\"e\":{\"isTrusted\":true}}",
    "method": "POST"
  }));
}

async function run() {
  while (true) {
    await fetchData();
  }
}

module.exports = run
