import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';



const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'eslint:recommended',
      'next',
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
      'plugin:@next/next/recommended',
      'plugin:storybook/recommended',
    ],
  }),
  {
    'rules': {
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


      // temporarily closed
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unsafe-function-type': 1,
      'no-undef': 0,
      'no-unreachable': 0,
      'no-empty-pattern': 0,
    },
  },
];
export default eslintConfig;
