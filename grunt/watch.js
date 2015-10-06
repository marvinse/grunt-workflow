module.exports = {
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
	scss: {
		files: ['dev/css/*.scss'],
		tasks: ['sass']
	},
	css: {
		files: ['dev/css/main.css'],
		tasks: ['copy']
	}
}