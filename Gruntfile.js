'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
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
    copy: {
      main: {
        files: [
          {
              expand: true,
              cwd: 'bower_components/normalize-css/',
              src: ['**.css'],
              dest: 'assets/less/plugins/',
              ext: '.less'
          },
          {
              expand: true,
              cwd: 'bower_components/normalize-css/',
              src: ['**.css'],
              dest: 'assets/scss/plugins/',
              ext: '.scss'
          }
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-recess');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'recess',
    //'sass',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
