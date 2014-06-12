module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({
		clean: {
			doc: ['doc/']
		},

		watch: {
			dist: {
				files: ['lib/**/*.js', 'README.md'],
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
				'test/**/*.js'
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
				'lib/**/*.js', 'README.md'
			],
			options: {
				'out': 'doc/'
			}
		}
	});

	grunt.registerTask('doc', ['clean', 'groc']);

	grunt.registerTask('build', [
		'jshint',
		'doc'
	]);

	grunt.registerTask('default', [
		'build'
	]);

	grunt.registerTask('go', [
		'build',
		'watch'
	]);
};
