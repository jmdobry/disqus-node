module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    clean: {
      doc: ['doc/'],
      coverage: ['test/coverage/']
    },

    watch: {
      dist: {
        files: ['lib/**/*.js', 'test/**.*.js', 'README.md', 'doc.md'],
        tasks: ['build']
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'lib/**/*.js',
        'test/unit/**/*.js',
        'test/requireHelper.js'
      ]
    },

    simplemocha: {
      options: {
        globals: [],
        timeout: 5000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'spec'
      },
      dist: {
        src: [
          'test/**/*.js'
        ]
      }
    },

    groc: {
      javascript: [
        'lib/**/*.js', 'doc.md'
      ],
      options: {
        'out': 'doc/',
        'index': 'doc.md',
        'repository-url': 'https://github.com/jmdobry/disqus-node'
      }
    },

    mochaTest: {
      unit: {
        options: {
          reporter: 'spec'
        },
        src: ['test/unit/**/*.js']
      }
    },

    env: {
      coverage: {
        APP_DIR_FOR_CODE_COVERAGE: '../test/coverage/instrument/lib/'
      }
    },

    instrument: {
      files: 'lib/**/*.js',
      options: {
        lazy: true,
        basePath: 'test/coverage/instrument/'
      }
    },

    storeCoverage: {
      options: {
        dir: 'test/coverage/reports'
      }
    },

    makeReport: {
      src: 'test/coverage/reports/**/*.json',
      options: {
        type: 'lcov',
        dir: 'test/coverage/reports',
        print: 'detail'
      }
    },

    coveralls: {
      options: {
        coverage_dir: 'test/coverage/reports'
      }
    }
  });

  grunt.registerTask('doc', ['clean:doc', 'groc']);

  grunt.registerTask('build', [
    'test',
    'doc'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

  grunt.registerTask('test', ['jshint', 'mochaTest:unit']);

  grunt.registerTask('coverage', [
    'clean:coverage',
    'env:coverage',
    'instrument',
    'test',
    'storeCoverage',
    'makeReport'
  ]);

  grunt.registerTask('go', [
    'build',
    'watch'
  ]);
};
