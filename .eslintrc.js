module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
	'eslint:recommended', 'prettier'],
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
