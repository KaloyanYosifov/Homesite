/**
 * Internal dependencies.
 */
const webpackConfig = require('./webpack.config');

exports.onCreateWebpackConfig = ({
    actions,
}) => {
    actions.setWebpackConfig(webpackConfig);
};
