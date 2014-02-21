'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    htmlhint: {
      build: {
        options: {
          'tag-pair': true,
          'tagname-lowercase': true,
          'attr-lowercase': true,
          'attr-value-double-quotes': true,
          'doctype-first': true,
          'spec-char-escape': true,
          'id-unique': true,
          'style-disabled': true
        },
        src: ['index.html']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'assets/js/*.js',
        'assets/js/plugins/*.js'
      ]
    },
    recess: {
      dist: {
        options: {
          compile: true,
          compress: true
        },
        files: {
          'css/app.min.css': [
            'assets/less/app.less'
          ]
        }
      }
    },
    sass: {
      dist: {
        files: {
          'css/app.min.css' : [
            'assets/scss/app.scss'
          ]
        }
      },
      options: {
        style: 'compressed'
      }
    },
    stylus: {
      dist: {
        files: {
          'css/app.min.css' : [
            'assets/stylus/app.styl'
          ]
        }
      },
      options: {
        compress: true
      }
    },
    uglify: {
      dist: {
        files: {
          'js/scripts.min.js': [
            'assets/js/plugins/*.js',
            'assets/js/_*.js'
          ]
        }
      }
    },
    watch: {
      html: {
        files: ['index.html'],
        tasks: ['htmlhint']
      },
      less: {
        files: [
          'assets/less/*.less'
        ],
        tasks: ['recess']
      },
      css: {
        files: [
          'assets/scss/*.scss'
        ],
        tasks: ['sass']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'css/main.min.css',
          'js/scripts.min.js',
          'templates/*.html',
          '*.html'
        ]
      }
    },
    clean: {
      dist: [
        'css/main.min.css',
        'js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-htmlhint');

  // Register tasks
  grunt.registerTask('default', [
    'htmlhint',
    'clean',
    'recess',
    //'sass',
    //'stylus',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
