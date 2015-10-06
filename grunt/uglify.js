module.exports = {
	options: {
		compress: true
	},
	js: {
		files: {
			'build/js/main.min.js': ['dev/js/*.js']	
		}
	}
}