module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/Chart.js/Chart.min.js',
                    'js/app.js',
                    'js/controllers/ChartController.js',
                    'js/controllers/MainController.js'
                ],
                dest: 'js/build/main.js',
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/build/global.css': 'scss/global.scss'
                }
            }
        },
        cssmin: {
          target: {
            files: {
              'css/build/global.min.css': 
              [
	              'bower_components/bootstrap-css-only/css/bootstrap.css',
	              'css/build/global.css'
              ]
            }
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'sass', 'cssmin']);

};