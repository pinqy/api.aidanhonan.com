import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  { files: ['{src,test}/**/*.{js,ts,mjs}'], extends: [js.configs.recommended, tseslint.configs.recommended, tseslint.configs.stylistic], languageOptions: { globals: globals.node } },
  {
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'no-unused-vars': 'warn',
      'eqeqeq': 'error',
    },
  },
]);
