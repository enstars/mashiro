module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            css: ["./*.css"],
            js: ["./*.min.js"],
            map: ["./*.map"]
        },
        sass: {
            compile: {
                options: {
                    style: "expanded"
                },
                files: {
                    "mashiro.css": "scss/main.scss"
                }
            }
        },
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        src: ["mashiro.css", "mashiro.min.css"],
                        ext: ".min.css"
                    }
                ]
            }
        },
        concat: {
            dist: {
                src: "./js/**",
                dest: "./mashiro.js"
            }
        },
        terser: {
            compile: {
                files: {
                    "mashiro.min.js": ["mashiro.js"]
                }
            }
        },
        watch: {
            files: ["*/*.scss", "*.js"],
            tasks: "default"
        }
    });
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-terser");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.registerTask("default", [
        "clean",
        "sass",
        "cssmin",
        "concat",
        "terser"
    ]);
};
