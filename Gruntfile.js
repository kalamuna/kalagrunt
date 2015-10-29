module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  var themeJs = [
    'scripts/theme.js',
  ];

  var config = {
    // Load data from package.json
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      themeJs: {
        files: {
          'dist/js/main.js': themeJs
        }
      }
    },
    uglify: {
      options: {
        sourceMap: false
      },
      themeJs: {
        files: {
          'dist/js/main.min.js': 'dist/js/main.js'
        }
      }
    },
    watch: {
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass:dev'],
        options: {
          livereload: true
        }
      },
      themeJs: {
        files: themeJs,
        tasks: ['concat:themeJs']
      }
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
          'dist/css/main.css': 'scss/main.scss',
        }
      },
      dist: {
        options: {
          compressed: true
        },
        files: {
          'dist/css/main.css': 'scss/main.scss'
        }
      }
    },

    // The Build Control plugin:
    // https://www.npmjs.com/package/grunt-build-control
    buildcontrol: {
      options: {
        dir: 'dist', // Which directory to deploy
        commit: true, // Only commit if code has changed
        push: true, // Push to remote
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      // GitHub Pages target: https://pages.github.com
      github: {
        options: {
          remote: 'git@github.com:<%= pkg.config.repo %>.git',
          branch: 'gh-pages'
        }
      },
      // The default deployment target, set in package.json.
      deploy: {
        options: {
          remote: '<%= pkg.config.deploy %>',
          branch: '<%= pkg.config.branch %>'
        }
      }
    }

  };


  // Deploy all branches to the same branch name. Pull Requests are already handled by this.
  if (process.env.TRAVIS_PULL_REQUEST == 'false' && process.env.TRAVIS_BRANCH) {
    // Branch switching is commented out until this is deployed.
    config.buildcontrol.deploy.options.branch = process.env.TRAVIS_BRANCH;
  }

  // Extract any keys from the environmental variables.
  if (process.env.GH_TOKEN) {
    // Update the remote git repository to use the GitHub token.
    config.buildcontrol.github.options.remote = "https://" + process.env.GH_TOKEN + "@github.com/<%= pkg.config.repo %>.git";
  }

  // Initialize the configuration.
  grunt.initConfig(config);

  grunt.registerTask("deploy", ['buildcontrol']);
  grunt.registerTask("prodbuild", ['concat', 'uglify', 'sass:dist']);
  grunt.registerTask("devbuild", ['concat', 'uglify', 'sass:dev']);
  grunt.registerTask("default", ['devbuild','watch']);
};
