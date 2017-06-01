module.exports = function(grunt){

  grunt.initConfig({

    // tell Grunt where the package is and to read it
    pkg: grunt.file.readJSON('package.json'),

    /**
     * wWatch task
     */
     watch: {
       css: {
         files: '**/*.scss',
         tasks: ['sass']
       }
     }

  });

  // tell Grunt to load the different task runner we are going to be using
  grunt.loadNpmTasks('grunt-contrib-watch');
  // register the Watch task
  grunt.registerTask('default', ['watch']);
}
