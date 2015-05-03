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
                    'js/factories/Factory.js',
                    'js/controllers/ChartController.js',
                    'js/controllers/MainController.js',
                    'js/controllers/AddNewController.js',
                    'js/controllers/TariffsController.js'
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
        },
        jshint: {
            files: ['Gruntfile.js', 'js/controllers/*.js', 'js/factories/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jscs: {
            src: ['<%= jshint.files %>'],
            options: {
                config: '.jscsrc'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'concat', 'sass', 'cssmin']);
    grunt.registerTask('dev', ['jshint', 'concat', 'sass']);

};