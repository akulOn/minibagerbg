#!/bin/bash

DOMAIN="https://minibagerbg.rs"
TODAY=$(date +"%Y-%m-%d")

echo "Building sitemap.xml..."

cat > sitemap.xml <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>$DOMAIN/</loc>
    <lastmod>$TODAY</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>$DOMAIN/#services</loc>
    <lastmod>$TODAY</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>$DOMAIN/#gallery</loc>
    <lastmod>$TODAY</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>$DOMAIN/#contact</loc>
    <lastmod>$TODAY</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

</urlset>
EOF

echo "Sitemap generated!"
