/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#e69877",
                    secondary: "#ffffff",
                    accent: "#0a0f19",
                    neutral: "#0a0f19",
                    "base-100": "#0d0c0b",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}
