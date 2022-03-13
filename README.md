# Personalised Web Homepage

Project to try out the [eleventy (11ty)](https://www.11ty.dev/) static site generator and also
build myself a personal "Welcome" page (planning on setting it as my browser home page).

Eleventy setup built from basics and deployed on Netlify.

Technologies used:
* Nunjucks templates
* SVG/HTML/JavaScript for the
  [6105](https://wornandwound.com/review/affordable-vintage-seiko-6105/)-inspired watchface
* `sass` to convert SASS to CSS (SASS compiled using Nunjucks), and `clean-css` to minify CSS
* `js-beautify` to generate clean, properly-indented HTML

Netlify deploys are triggered (via [build hooks](https://docs.netlify.com/configure-builds/build-hooks/))
at 6am (from IFTTF), midday and 6pm (both by a [Deta](https://www.deta.sh/) Micro cronjob).

To improve Lighthouse scores and reduce the load times, Twitter images are processed as the
generator runs to:
* create a hosted copy at reduced size (width 300, approximately `@2x` quality)
* return an `<img>` tag pointing to the hosted copy and using lazy loading

Google Lighthouse is high, but still being held back a little by:
* Twitter images not necessarily "right" size (the element width is not set, generating circa `@2x`
  but this isn't guaranteed)
* Premier League club logos, which are high-quality SVGs (currently implementing a change to fix this)
* Unreliable responses for images for both the Superhero and Beer panels