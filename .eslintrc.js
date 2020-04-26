module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    env: {
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
    },
    rules: {
        'no-console': 'off',
        'no-case-declarations': 'off',
        'no-void': 'off',
        'no-trailing-spaces': ['error', {
            skipBlankLines: true,
        }],
        'comma-dangle': ['error', 'always-multiline', {
            arrays: 'always',
            objects: 'always',
            imports: 'never',
            exports: 'never',
            functions: 'never',
        }],
        indent: ['error', 4, { 'SwitchCase': 1 }],
        semi: ['error', 'always'],
    },
};
