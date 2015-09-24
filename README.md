# kalagrunt

Quick Node SaSS Setup w/ Grunt for Kalatheme Subthemes

## Setup
In your subtheme folder…
```npm i -g khaos``` installs [kaos](https://github.com/segmentio/khaos)
```npm install```
```khaos install kalamuna/sass-boilerplate``` [kalamuna/sass-boilerplate](https://github.com/kalamuna/sass-boilerplate)
(only if you've never installed it before, otherwise ```khaos update kalamuna/sass-boilerplate``` )
```kaos create sass-boilerplate scss``` to install in a folder called 'scss'

## Compiling Sass
```grunt devbuild```
or
```grunt prodbuild``` which also compresses the css and js.
Simply run ```grunt``` to complie the scss and watch the directory for changes.

On NPM install we automatically pull in the contents of https://github.com/kalamuna/sass-boilerplate

### subtheme.info setup
Add this to your subtheme.info:

```
stylesheets[all][] = dist/css/main.css
scripts[] = dist/js/main.min.js
```

If you are using this on a project, consider nuking the .git folder as well.

(we should rename this, kalaproof like http://www.thekitchn.com/baking-lessons-how-to-proof-ye-94555)
