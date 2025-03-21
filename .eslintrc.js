module.exports = {
  root: true,
  extends: [
    '@react-native',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  env: {
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'react', 'autofix', 'react-hooks', 'import'],
  overrides: [
    {
      // Test files only
      files: ['**/**/**/*.[jt]s?(x)', '**/**/**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'no-console': 'off',
        'no-unused-expressions': 'off',
        'prettier/prettier': 'error',
        'react/jsx-uses-react': 1,
        'object-curly-spacing': ['warn', 'always'],
        'arrow-body-style': ['error', 'as-needed'],
        'react/self-closing-comp': ['error', { component: true, html: true }],
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-filename-extension': [
          'warn',
          {
            extensions: ['.jsx', 'js', '.tsx', '.ts'],
          },
        ],
        'import/order': [
          'warn',
          {
            'newlines-between': 'always',
          },
        ],
        'react/prop-types': 'off',
        'import/prefer-default-export': 0,
        'import/no-named-as-default': 0,
        // 'import/no-extraneous-dependencies': 'off', // we moved all devDependencies to root
        // detox test library implements a waitFor function to which this rule wrongfully applies
        'testing-library/await-async-utils': 0,
      },
    },
  ],
};
