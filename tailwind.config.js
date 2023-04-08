/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx',
    ],
    theme: {
        extend: {},
    },
    variants: {
        imageRendering: ['responsive'],
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwindcss-image-rendering')()
    ],
};
