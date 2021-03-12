const routes = require('./routes')
const fs = require('fs')
const join = require('path').join
const url = 'https://vf.shenzhepei.com'

let sitemap = ''
routes.forEach(item => {
  sitemap += `<url>
<loc>${url}${item.path}</loc>
<lastmod>${new Date().toISOString()}</lastmod>
</url>`
})
sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap}
</urlset>
`
fs.writeFile(join(__dirname, '../dist/sitemap.xml'),
  sitemap,
  (err) => {
    if (err) {
      console.log(err)
    }
  })
