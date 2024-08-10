/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{html,js}', './public/index.html'],
    theme: {
        extend: {
            fontFamily: {
                bai: ['"Bai Jamjuree"', 'sans-serif'],
            },
            colors: {
                customWhite: ' rgba(255, 255, 255, 1)',
                customBlack: 'rgba(229, 232, 236, 1)',
                customBlack1: 'rgba(0, 0, 0, 0.6)',
                customBlue: ' rgba(43, 56, 209, 1)',
                customText: 'rgba(81, 93, 102, 1)',
                customText1: 'rgba(33, 37, 41, 1)',
                customTextActive: 'rgba(220, 50, 60, 1)',
                customBgBody: 'rgba(241, 245, 246, 1)',
                customBgbutton: 'rgba(255, 255, 255, 0.2)',
                customText2: 'rgba(253, 229, 11, 1)',
                customText3: ' rgba(23, 240, 132, 1)',
            },
            fontSize: {
                '13px': '13px',
                '11px': '11px',
                '10px': '10px',
                '46px': '46px',
                '18px': '18px',
            },
            borderRadius: {
                '5px': '5px',
                '30px': '30px',
            },
            gap: {
                '5px': '5px',
                '20px': '20px',
            },
        },
    },
    plugins: [],
};
