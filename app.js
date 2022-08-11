const express = require('express')
const Wappalyzer = require('wappalyzer');
const morgan = require('morgan')

const PORT = process.env.PORT || 3000

const app = express()

if (process.env.DISABLE_REQUESTS_LOGGING == undefined) {
  app.use(morgan('combined'))
}

app.get('/', (req, res) => {
  res.send('Wappalyzer API is ready! 🚀')
});

var detectByWappalyzer = function(url, opts, callback) {
  var payload = {
    error: "",
    results: {}
  };

  if (url && url.length) {
    const options = {
      debug: false,
      delay: 500,
      headers: {},
      maxDepth: 3,
      maxUrls: 10,
      maxWait: 10000,
      recursive: opts.recursive,
      probe: true,
      proxy: false,
      userAgent: 'Mozilla/5.0 (Linux; Android 12; SM-S906N Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.119 Mobile Safari/537.36',
      htmlMaxCols: 2000,
      htmlMaxRows: 2000,
      noScripts: false,
      noRedirect: false,
    };

    const wappalyzer = new Wappalyzer(options);

    (async function() {
      try {
        await wappalyzer.init()

        // Optionally set additional request headers
        const headers = {}

        const site = await wappalyzer.open(url, headers)

        // Optionally capture and output errors
        site.on('error', console.error)

        payload.results = await site.analyze()
        console.log(JSON.stringify(payload.results, null, 2))
      } catch (error) {
        console.error(error)
        payload.error = error;
      }
      await wappalyzer.destroy()

      return callback(null, payload);
    })()
  } else {
    payload.error = "URL not found"
    return callback(null, payload)
  }
}

app.get('/detectRecursive', (req, res) => {
  var url = req.query.url;
  detectByWappalyzer(url, {recursive: true}, function(err, payload) {
    res.json(payload);
  });
});

app.get('/detect', (req, res) => {
  var url = req.query.url;
  detectByWappalyzer(url, {recursive: false}, function(err, payload) {
    res.json(payload);
  });
})

app.listen(PORT, () => console.log(`Starting Wappalyzer on http://0.0.0.0:${PORT}`))

process.on('uncaughtException', function(err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
  console.error(err.stack)
  process.exit(1)
})
