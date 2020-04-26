module.exports = {
    extends: 'eslint:recommended',
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true,
    },
    parserOptions: {
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
