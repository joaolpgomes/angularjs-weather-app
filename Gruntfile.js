
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'app/styles/css.min.css': 'app/styles/css.css'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['cssmin']);

};
