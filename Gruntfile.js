module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  // var themeJs = [
  //       'js/whateverfileweneed.js',
  //     ];

  var config = {
    // Load data from package.json
    pkg: grunt.file.readJSON('package.json'),

    // concat: {
    //   themeJs: {
    //     files: {
    //       'dist/js/fiksu.js': themeJs
    //     }
    //   }
    // },
    // uglify: {
    //   options: {
    //     sourceMap: false
    //   },
    //   themeJs: {
    //     files: {
    //       'dist/js/fiksu.min.js': 'dist/js/fiksu.js'
    //     }
    //   }
    // },
    watch: {
      sass: {
        files: 'src/style/**/*.scss',
        tasks: ['sass:dev'],
        options: {
          livereload: true
        }
      }
      // remove the } above if uncomment below.
      // },
      // themeJs: {
      //   files: themeJs,
      //   tasks: ['concat:themeJs']
      // }
    },
    sass: {
      dev: {
        options: {
          lineNumbers: true,
          sourcemap: true,
          sourceComments: "sass",
          outputStyle: 'nested'
        },
        files: {
          'css/main.css': 'src/style/main.scss',
        }
      },
      dist: {
        options: {
          compressed: true
        },
        files: {
          'css/main.css': 'scss/main.scss'
        }
      }
    }

  };

  // Initialize the configuration.
  grunt.initConfig(config);

  grunt.registerTask("prodbuild", ['concat', 'uglify', 'sass:dist']);
  // grunt.registerTask("devbuild", ['concat', 'sass:dev']);
  grunt.registerTask("devbuild", ['sass:dev']);
  grunt.registerTask("default", ['devbuild']);
};
