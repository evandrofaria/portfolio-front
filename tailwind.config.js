/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}",],
    theme: {
        extend: {
            colors: {
                'primary': 'var(--ion-color-primary)',
                'primary-shade': 'var(--ion-color-primary-shade)',
                'primary-tint': 'var(--ion-color-primary-tint)',
            },
        },
    },
    plugins: [require("daisyui")],
}

