var APPLICATION_ENV_PRODUCTION = true;

var compress = APPLICATION_ENV_PRODUCTION,
    filename = "Internal/application"+(APPLICATION_ENV_PRODUCTION ? '.min' : '')+".css",
    filesConfig = {};
filesConfig[filename] = "Internal/application.less";
var obfuscate = false;

module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            bootstrap: {
                options: {
                    paths: [],
                    yuicompress: compress
                },
                files: {
                    'External/styles/Bootstrap_custom.css' : 'External/styles/Bootstrap_custom.less'
                }
            },
            main: {
                options: {
                    paths: [], // don't need to scan since nothing imports application.less
                    yuicompress: compress
                },
                files: filesConfig
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['Internal/scripts/**/*.js'],
                dest: 'Internal/application.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'Internal/application.min.js': ['<%= concat.dist.dest %>']
                }
            },
            options: {
                mangle: obfuscate
            }
        },
        // running `grunt watch` will watch for changes
        watch: {
            lessBootstrap: {
                files: "External/styles/*.less",
                tasks: "less:bootstrap"
            },
            lessMain: {
                files: ['Internal/**/*.less'],
                tasks: "less:main"
            },
            scripts: {
                files: ['<%= concat.dist.src %>'],
                tasks: ['concat', 'uglify']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
};