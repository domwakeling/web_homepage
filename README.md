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
once a day using GitHub Actions.

To improve Lighthouse scores and reduce the load times, most images (Mastodon, Cycling News etc) are
processed as the generator runs to:
* create a hosted copy at reduced size (width 300, approximately `@2x` quality)
* return an `<img>` tag pointing to the hosted copy and using lazy loading

Google Lighthouse **can** achieve 400 but remains dependent on some of the call results so varies
run-to-run and build-to-build.

Other **TO-DO**:
* *if* JokeAPI proves reliable, allow option for single jokes to be used (not just two-parters)