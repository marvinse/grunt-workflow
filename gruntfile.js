module.exports = function(grunt){
	
	require('load-grunt-config')(grunt);
	/*grunt.initConfig({
		
		express: {
			all: {
				options: {
					port: 9000,
					hostname: "localhost",
					bases: ["build/."],
					livereload: true
				}
			}
		},
		copy: {
			html: {
				src: 'dev/index.html',
    			dest: 'build/index.html',
			}
		},
		uglify: {
			options: {
				compress: true
			},
			js: {
				files: {
					'build/js/main.min.js': ['dev/js/*.js']	
				}
			}
		},
		concat: {
			js: {
				src: ['dev/js/*.js'],
				dest: 'build/js/main.js'
			},
			css: {
				src: ['dev/css/*.css'],
				dest: 'build/css/main.css'
			},
		},
		watch: {
			options: {
				livereload: true
			},
			html: {
				files: ['dev/index.html'],
				tasks: ['copy']
			},
			js: {
				files: ['dev/js/*.js'],
				tasks: ['uglify','concat']
			},
			css: {
				files: ['dev/css/*.css'],
				tasks: ['concat']
			}
		}
	});*/

	/*grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-express');

	// Default task(s).
	grunt.registerTask('default', ['concat','copy','uglify','watch']);
	grunt.registerTask('server', ['express','watch']);*/
}