# kalagrunt

Quick Node SaSS Setup w/ Grunt for Kalatheme Subthemes

## Setup:
Run ```npm install``` in the subtheme folder and then ```grunt``` to complie the scss.

On NPM install we automatically pull in the contents of https://github.com/kalamuna/sass-boilerplate

## .info setup
Add this to your subtheme.info:

```
stylesheets[all][] = dist/css/main.css
scripts[] = dist/js/main.min.js
```

(we should rename this, kalaproof like http://www.thekitchn.com/baking-lessons-how-to-proof-ye-94555)
