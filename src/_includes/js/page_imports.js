// add the masonry package
const s = document.createElement('script');
s.src = "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js";
document.body.appendChild(s);

// remove media atrribute so that font is applied (solution to non-render blocking on google font)
const l = Array.from(document.getElementsByTagName('link'))
               .filter(li => li.media == "print")[0];
l.removeAttribute('media');