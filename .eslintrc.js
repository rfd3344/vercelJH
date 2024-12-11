
// ref: https://nextjs.org/docs/pages/building-your-application/configuring/eslint

module.exports = {

  "extends": [
    'prettier',
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    // 'next',
    // "next/babel",
    // "@babel/plugin-transform-private-property-in-object",
    'next/core-web-vitals',
    'eslint-config-next',
    'plugin:@next/next/recommended',
    'plugin:storybook/recommended'
  ],
  'plugins': [
    'react-hooks',
    'jsx-a11y',
  ],
  "rules": {
    'quotes': ['warn', 'single'],
    'indent': ['warn', 2, {
      'SwitchCase': 1,
    }],
    'semi': 'warn',
    'prefer-const': ['warn', {
      'destructuring': 'any',
      'ignoreReadBeforeAssign': false,
    }],
    'prefer-template': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    'arrow-body-style': ['warn', 'as-needed'],





    // temperarily closed
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-unreachable': 0,
    'no-empty-pattern': 0,
  },
  'ignorePatterns': [
    'node_modules',
    'public',
    'build',
    'storybook-static',
    'bin',
  ],
};