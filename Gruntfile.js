module.exports = function(grunt) {

  // time the grunt execution time
  require('time-grunt')(grunt);

  // configure main project settings
  grunt.initConfig({

    // basic config
    pkg: grunt.file.readJSON('package.json'),

    // SASS compiling
    sass: {
      compile: {
        options: {
          sourcemap: 'none',
          style: 'compact'
        },
        files: [{
          expand: true,
          cwd: 'resources/assets/sass',
          src: ['*.sass'],
          dest: 'public/css',
          ext: '.css'
        }]
      }
    },

    // CoffeeScript compiling
    coffee: {
      compile: {
        expand: true,
        flatten: true,
        cwd: 'resources/assets/coffee',
        src: ['*.coffee'],
        dest: 'public/js',
        ext: '.js'
      }
    },

    // Minify css files
    cssmin: {
      minify: {
        files: [{
          expand: true,
          cwd: 'public/css',
          src: ['*.css', '!*.min.css'],
          dest: 'public/css',
          ext: '.min.css',
        }]
      }
    },

    // Minify js files
    uglify: {
      minify: {
        files: [{
          expand: true,
          cwd: 'public/js',
          src: ['*.js', '!*.min.js'],
          dest: 'public/js',
          ext: '.min.js',
        }]
      }
    }

  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // do the tasks
  grunt.registerTask('default', ['sass', 'coffee', 'cssmin', 'uglify']);

};
