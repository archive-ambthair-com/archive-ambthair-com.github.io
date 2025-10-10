module.exports = {
    plugins: 
    [
        require('@fullhuman/postcss-purgecss') ({
            content: ['src/**/*.pug']
        }),
    ]
};
