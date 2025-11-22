// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'monthly', priority: 0.6 },
  { url: '/services', changefreq: 'monthly', priority: 0.5},
  { url: '/testimonials', changefreq: 'monthly', priority: 0.4 },
  // Add more routes here
];

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://www.marcaids.com' });

  // Write sitemap to a file
  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemap.pipe(writeStream);

  // Add each route to the sitemap
  routes.forEach((route) => {
    sitemap.write(route);
  });

  sitemap.end();

  await streamToPromise(sitemap); // Ensures all routes are processed
})();