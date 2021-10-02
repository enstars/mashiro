module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            css: ['./*.css'],
            js: ['./*.js', '!./Gruntfile.js']
        },
        stylus: {
            options: {
                compress: false
            },
            compile: {
                options: {
                    paths: ['main.styl']
                },
                files: {
                    'main.css': 'main.styl'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['main.css', 'main.min.css'],
                    ext: '.min.css'
                }]
            }
        },
        terser: {
            compile: {
                options: {
                    compress: false
                },
                files: {
                    'index.js': ['js/*.js']
                }
            },
            minify: {
                files: {
                    'index.min.js': ['js/*.js']
                }
            }
        },
        watch: {
            files: ['**/*.styl', '**/*.js'],
            tasks: 'default',
        }
    });
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-terser');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['clean', 'stylus', 'cssmin', 'terser']);
};
