// remove media attribute so that font is applied (solution to non-render blocking on google font)
const l = Array.from(document.getElementsByTagName('link'))
               .filter(li => li.media == "print")[0];
l.removeAttribute('media');