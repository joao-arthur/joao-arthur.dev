/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx',
    ],
    theme: {
        extend: {
            width: {
                '200': '50rem'
            },
            maxWidth: {
                '200': '50rem'
            },
            minWidth: {
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
