/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'logo-text': '#455A64',
                'search-text': '#9A9A9A',
                'body-color': '#F0F2F5',
                'card-text': '#4F4F4D',
                'card-title': '#333333',
            },
        },
    },
    plugins: [],
};
