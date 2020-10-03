module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'sort-keys-fix', 'sort-imports-es6-autofix'],
  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:react/recommended',
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
    'no-unused-vars': 'off',
    'react/jsx-no-target-blank': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': [
      'warn',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'sort-vars': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreSiblings: true,
        argsIgnorePattern: 'res|next|^err|theme|Theme|event',
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
