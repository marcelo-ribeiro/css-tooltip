module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-postcss');

  grunt.initConfig({

    sass: {
      options: {
        sourcemap: 'none',
        style: 'expanded',
        noCache: true
      },
      dist: {
        files: {
          'dist/css-tooltip.css': 'src/css-tooltip.scss'
        }
      }
    },

    postcss: {
      options: {
        safe: true,
        processors: [
          require('autoprefixer-core')({browsers: 'last 2 version'})
        ]
      },
      dist: {
        src: ['dist/*.css'],
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['sass', 'postcss']);
};