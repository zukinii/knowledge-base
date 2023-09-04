const postcssJitProps = require('postcss-jit-props');
const path = require('path');

module.exports = {
	plugins: [
		postcssJitProps({
			files: [
				path.resolve(__dirname, 'node_modules/open-props/open-props.min.css'),
				path.resolve(__dirname, 'node_modules/open-props/colors-hsl.min.css')
			]
		})
	]
};
