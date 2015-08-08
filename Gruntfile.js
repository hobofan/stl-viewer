module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'app/**/*.js', 'tests/**/*.js']
    },
    watch: {
      scripts: {
        files: ['app/**/*.js', 'tests/**/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
