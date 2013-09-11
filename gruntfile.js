module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      plain: {
        src: './plain/less/menu.less',
        dest: './plain/css/menu.css'
      },
      styled: {
        src: './styled/less/menu.less',
        dest: './styled/css/menu.css'
      }
    },
    csslint: {
      plain: {
        src: '<%= less.plain.dest %>'
      },
      styled: {
        options: {
          // This is accounted for in the CSS
          "box-model": false
        },
        src: '<%= less.styled.dest %>'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('plain', ['less:plain', 'csslint:plain']);
  grunt.registerTask('styled', ['less:styled', 'csslint:styled']);
  grunt.registerTask('default', ['less', 'csslint']);

};