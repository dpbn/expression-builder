module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-karma');

  // Default task.
  grunt.registerTask('default', ['jshint','build']);
  grunt.registerTask('build', ['clean','concat','copy:assets']);
  grunt.registerTask('release', ['clean','uglify','jshint','karma:unit','concat:index','copy:assets']);
  grunt.registerTask('test-watch', ['karma:watch']);

  // Print a timestamp (useful for when watching)
  grunt.registerTask('timestamp', function() {
    grunt.log.subhead(Date());
  });

  var karmaConfig = function(configFile, customOptions) {
    var options = { configFile: configFile, keepalive: true };
    return grunt.util._.extend(options, customOptions);
  };

  // Project configuration.
  grunt.initConfig({
    distdir: 'dist',
    pkg: grunt.file.readJSON('package.json'),
    banner:
    '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
    ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;\n' +
    ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n',
    src: {
      js: ['src/**/*.js'],
      fixtures: ['test/**/*.fixture.js'],
      scenarios: ['test/**/*.scenario.js'],
      tpl: {
        app: ['src/app/**/*.tpl.html'],
        common: ['src/common/**/*.tpl.html']
      },
      html: ['src/index.html'],
      css: ['src/css/*.css'],
      less: ['src/less/stylesheet.less'], // recess:build doesn't accept ** in its file patterns
      lessWatch: ['src/less/**/*.less']
    },
    clean: ['<%= distdir %>/*'],
    copy: {
      assets: {
        files: [{ dest: '<%= distdir %>/assets', src : '**', expand: true, cwd: 'src/assets/' }, 
          {dest:'<%= distdir %>/templates', src: '**/*.tpl.html', expand:true, cwd:'src/app'},
          {dest:'<%= distdir %>/templates', src: '**/*.tpl.html', expand:true, cwd:'src/common'},
          {dest:'<%= distdir %>/css', src:'angular-ui.css', expand:true, flattent:true, cwd:'bower_components/angular-ui/build'},
          {dest:'<%= distdir %>/css', src:'bootstrap.css', expand:true, flattent:true, cwd:'bower_components/bootstrap/dist/css/'},
          {dest:'<%= distdir %>/fonts', src:'glyphicons-halflings-regular.eot', expand:true, flattent:true, cwd:'bower_components/bootstrap/dist/fonts/'},
          {dest:'<%= distdir %>/fonts', src:'glyphicons-halflings-regular.svg', expand:true, flattent:true, cwd:'bower_components/bootstrap/dist/fonts/'},
          {dest:'<%= distdir %>/fonts', src:'glyphicons-halflings-regular.ttf', expand:true, flattent:true, cwd:'bower_components/bootstrap/dist/fonts/'},
          {dest:'<%= distdir %>/fonts', src:'glyphicons-halflings-regular.woff', expand:true, flattent:true, cwd:'bower_components/bootstrap/dist/fonts/'},
          {dest:'<%= distdir %>/css', src:'xeditable.css', expand:true, flattent:true, cwd:'bower_components/angular-xeditable/dist/css/'},
          {dest:'<%= distdir %>/css', src:'**', expand:true, flattent:true, cwd:'src/css'}]
      }
    },
    karma: {
      unit: { options: karmaConfig('test/config/unit.js') },
      watch: { options: karmaConfig('test/config/unit.js', { singleRun:false, autoWatch: true}) }
    },
    concat:{
      dist:{
        options: {
          banner: "<%= banner %>"
        },
        src:['<%= src.js %>'],
        dest:'<%= distdir %>/js/<%= pkg.name %>.js'
      },
      index: {
        src: ['src/index.html'],
        dest: '<%= distdir %>/index.html',
        options: {
          process: true
        }
      },
      angular: {
        src:['bower_components/angular/angular.js', 'bower_components/angular-route/angular-route.js', 
        'bower_components/angular-cookies/angular-cookies.js', 'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-xeditable/dist/js/xeditable.min.js', 'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'],
        dest: '<%= distdir %>/js/angular.js'
      },
      angularui:{
        src:['bower_components/angular-ui/build/angular-ui.js'],
        dest: '<%= distdir %>/js/angular-ui.js'
      },
      underscore:{
        src:['bower_components/underscore/underscore.js'],
        dest: '<%= distdir %>/js/underscore.js'
      },
      bootstrap: {
        src:['bower_components/bootstrap/dist/js/*.js'],
        dest: '<%= distdir %>/js/bootstrap.js'
      },
      jquery: {
        src:['bower_components/jquery/jquery.js'],
        dest: '<%= distdir %>/js/jquery.js'
      }
    },
    uglify: {
      dist:{
        options: {
          banner: "<%= banner %>"
        },
        src:['<%= src.js %>' ,'<%= src.jsTpl %>'],
        dest:'<%= distdir %>/<%= pkg.name %>.js'
      },
      angular: {
        src:['<%= concat.angular.src %>'],
        dest: '<%= distdir %>/angular.js'
      },
      mongo: {
        src:['vendor/mongolab/*.js'],
        dest: '<%= distdir %>/mongolab.js'
      },
      bootstrap: {
        src:['vendor/angular-ui/bootstrap/*.js'],
        dest: '<%= distdir %>/bootstrap.js'
      },
      jquery: {
        src:['vendor/jquery/*.js'],
        dest: '<%= distdir %>/jquery.js'
      }
    },
    recess: {
      build: {
        files: {
          '<%= distdir %>/<%= pkg.name %>.css':
          ['<%= src.less %>'] },
        options: {
          compile: true
        }
      },
      min: {
        files: {
          '<%= distdir %>/<%= pkg.name %>.css': ['<%= src.less %>']
        },
        options: {
          compress: true
        }
      }
    },
    watch:{
      all: {
        files:['<%= src.js %>', '<%= src.fixtures %>', '<%= src.lessWatch %>', '<%= src.css %>', '<%= src.tpl.app %>', '<%= src.tpl.common %>', '<%= src.html %>'],
        tasks:['default','timestamp']
      }
    },
    jshint:{
      files:['gruntFile.js'],
      options:{
        curly:false,
        eqeqeq:false,
        immed:false,
        latedef:false,
        newcap:false,
        noarg:false,
        sub:false,
        boss:false,
        eqnull:false,
        globals:{
          angular:true
        }
      }
    }
  });

};