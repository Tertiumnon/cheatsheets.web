module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.initConfig({
    less: {
        development: {
          files: {
              'skins/DarkOrigin/css/libs/app.css': 'skins/DarkOrigin/css/libs/app.less'
          }
        }
    },
    concat: {
      scripts: {
        src: ['node_modules/jquery/dist/jquery.min.js',
        'node_modules/less/dist/less.min.js',
        'node_modules/materialize-css/dist/js/materialize.min.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js'],
        dest: 'js/scripts.js'
      },
      styles: {
        src: ['node_modules/materialize-css/dist/css/materialize.min.css', 'skins/DarkOrigin/css/libs/*.css'],
        dest: 'skins/DarkOrigin/css/styles.css'
      }
    },
    uglify: {
      build: {
        src: 'js/scripts.js',
        dest: 'js/scripts.min.js'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'skins/DarkOrigin/css/styles.min.css': 'skins/DarkOrigin/css/styles.css'
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'concat', 'uglify', 'cssmin']);

};
