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
                customStart: 'rgba(255, 184, 0, 1)',
                customText4: ' rgba(141, 151, 158, 1)',
                customTextBlue: 'rgba(43, 56, 209, 1)',
                customTextGreen: 'rgba(0, 138, 0, 1)',
                customBgBorder: 'rgba(243, 244, 246, 1)',
            },
            fontSize: {
                '13px': '13px',
                '11px': '11px',
                '10px': '10px',
                '46px': '46px',
                '18px': '18px',
                '20px': '20px',
                '30px': '30px',
            },
            borderRadius: {
                '5px': '5px',
                '30px': '30px',
                '3px': '3px',
                '10px': '10px',
                '50px': '50px',
            },
            borderWidth: {
                '10px': '10px',
                '8px': '8px',
                '6px': '6px',
                '2px': '2px',
            },
            gap: {
                '10px': '10px',
                '5px': '5px',
                '20px': '20px',
                '40px': '40px',
                '60px': '60px',
            },
        },
    },
    plugins: [],
};
