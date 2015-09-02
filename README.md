# kalasass
Quick Grunt SaSS Setup for Kalatheme Subthemes

## Setup:
Add this to your .gitignore in the subtheme:
```
.sass-cache
node_modules
bower_components
report
.DS_Store
```

Run ```npm install``` in the subtheme folder and then ```grunt``` to complie the scss.

Uncomment lines for JS and remove the grunt.registerTask("devbuild", ['sass:dev']); for the line above it.
