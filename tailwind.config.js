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
                    primary: "#6c62e2",
                    secondary: "#f675c0",
                    accent: "#0a0f19",
                    neutral: "#0a0f19",
                    "base-100": "#0a0f19",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
}
