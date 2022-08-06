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
})

app.get('/extract', (req, res) => {
  var url = req.query.url;

  if (url && url.length) {
    const options = {
      debug: false,
      delay: 500,
      headers: {},
      maxDepth: 3,
      maxUrls: 10,
      maxWait: 5000,
      recursive: false,
      probe: true,
      proxy: false,
      userAgent: 'Wappalyzer',
      htmlMaxCols: 2000,
      htmlMaxRows: 2000,
      noScripts: false,
      noRedirect: false,
    };

    const wappalyzer = new Wappalyzer(options);
    var results = {};

    (async function() {
      try {
        await wappalyzer.init()

        // Optionally set additional request headers
        const headers = {}

        const site = await wappalyzer.open(url, headers)

        // Optionally capture and output errors
        site.on('error', console.error)

        results = await site.analyze()
        console.log(JSON.stringify(results, null, 2))
      } catch (error) {
        console.error(error)
      }

      await wappalyzer.destroy()

      res.json({
        url: url,
        results: results
      });

    })()
  } else {
    res.json({
      error: "url empty"
    });
  }
})

app.listen(PORT, () => console.log(`Starting Wappalyzer on http://0.0.0.0:${PORT}`))

process.on('uncaughtException', function(err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
  console.error(err.stack)
  process.exit(1)
})
