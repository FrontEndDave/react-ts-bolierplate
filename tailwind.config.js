/** @type {import('tailwindcss').Config} */
export default {
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            screens: {},
            colors: {
                bg: "#0FF",
            },
            fontFamily: {},
        },
    },
    plugins: [],
};
