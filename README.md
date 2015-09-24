# kalagrunt

Quick Node SaSS Setup w/ Grunt for Kalatheme Subthemes

## Setup
install [khaos](https://github.com/segmentio/khaos) with: ```npm i -g khaos```

### In your subtheme folder:
1 - ```npm install```

#### If you have never installed before
2a - Install [kalamuna/sass-boilerplate](https://github.com/kalamuna/sass-boilerplate) with: ```khaos install kalamuna/sass-boilerplate```
#### If you have installed before, just update sass-boilerplate with:
2b - ```khaos update kalamuna/sass-boilerplate```

3 - ```kaos create sass-boilerplate scss``` to install in a folder called 'scss'


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
