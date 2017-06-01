module.exports = function (grunt) {

  grunt.initConfig({

    // tell Grunt where the package is and to read it
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Sass task
     */
     sass: {
       // dev task with expanded version
       dev: {
         options: {
           style: 'expanded',
           sourcemap: 'none'
         },
         // define where the content comes from and where it's going to go
         // the syntax works the other way around,
         // first define where you want the content to go
         // and then specify where the content is coming from
         files: {
           'compiled/style-human.css': 'sass/style.scss'
         }
       },
       // distribution task, like the "dev" task but with compressed stylesheet version to be shipped with the theme
       dist: {
         options: {
           style: 'compressed',
           sourcemap: 'none'
         },
         // define where the content comes from and where it's going to go
         // the syntax works the other way around,
         // first define where you want the content to go
         // and then specify where the content is coming from
         files: {
           'compiled/style.css': 'sass/style.scss'
         }
       }
     },

    /**
     * Autoprefixer task
     */
     autoprefixer: {
       options: {
         browsers: ['last 2 versions']
       },
       // prefix all files
       multiple_files: {
         expand: true,
         flatten: true,
         src: 'compiled/*.css',
         dest: ''
       }
     },

    /**
     * Watch task
     */
     watch: {
       css: {
         files: '**/*.scss',
         tasks: ['sass', 'autoprefixer']
       }
     }

  });

  // tell Grunt to load the different tasks runner we are going to be using
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  // register the Watch task
  grunt.registerTask('default', ['watch']);
};
