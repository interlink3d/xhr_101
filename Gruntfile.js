'use strict';

module.exports = function(grunt) {
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch'); 

  // Plugin configuration.
  grunt.initConfig({
    jshint: {
      files: [
      './**/*.js', 
      '!./node_modules/**/*'  // instructed it to look for all .js files but in following arguments told it to ignore selected
      ],
      options: {
        jshintrc: true
      }
    },
    watch: {
      files: [
      './**/*.js', 
      '!./node_modules/**/*'
      ],
      tasks: ['jshint']
    }
  });
};