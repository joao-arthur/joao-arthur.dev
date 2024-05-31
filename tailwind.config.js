/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx',
    ],
    theme: {
        extend: {
            width: {
                '200': '50rem'
            }
        },
    },
    variants: {
        imageRendering: ['responsive'],
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwindcss-image-rendering')()
    ],
};
