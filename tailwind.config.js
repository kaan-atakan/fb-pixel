module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    purge: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "accent-1": "#333",
                primary: "#406",
                secondary: "#656",
                button: '#608',
                danger: "#e33",
            },
        },
    },
    variants: {},
    plugins: [],
};
