module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-postcss');

  grunt.initConfig({

    sass: {
      options: {
        sourcemap: 'none',
        noCache: true
      },
      prod: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/css-tooltip.css': 'src/css-tooltip.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/css-tooltip.min.css': 'src/css-tooltip.scss'
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