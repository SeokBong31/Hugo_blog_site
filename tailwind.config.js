module.exports = {
    prefix: 'hx:',
    content: [
        "./assets/**/*.css",
        "./content/**/*.md",
        "./layouts/**/*.html",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
