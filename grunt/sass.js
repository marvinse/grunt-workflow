module.exports = {
	dist: {
		options: {
			sourcemap: 'none'
		},
		files: [{
			expand: true,
			//cwd: 'styles',
			src: ['dev/css/*.scss'],
			dest: '.',
			ext: '.css'
		}]
	}
}