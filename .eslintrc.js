module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['prettier'],
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended', // Uses the recommended rules
		'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuation in the extends array.
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module', // Allow imports
		ecmaFeatures: {
			jsx: true, // Allow jsx parsing
		},
	},
	rules: {
		// !important rules
	},
	settings: {
		react: {
			version: 'detect',
		}
	}
}
