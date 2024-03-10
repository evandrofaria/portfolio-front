/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
        // "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                'primary': 'var(--primary-color)',
                'secondary-color': 'var(--secondary-color)',
                'secondary-text': 'var(--secondary-text)',
                'state-error': 'var(--state-error)',
                'state-warning': 'var(--state-warning)',
                'state-success': 'var(--state-success)',
                'gradient-gray': 'var(--gradient-gray)',
                'card-color': 'var(--card-color)'
            },
            backgroundColor: {
                'default': 'var(--ion-background-color)',
                'alternative': 'var(--alternative-bg)'
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans", sans-serif',]
            },
            screens: {
                mobile: {min: '0px', max: '768px'},
                desktop: '769px'
            }
        },
    },
    plugins: [require('flowbite/plugin'), require("daisyui")],
    daisyui: {
        prefix: {
            prefix: "daisy-",
            themes: [
                    {
                        mytheme: {
                            "primary": "#FFFFFF",
                            "secondary": "#5BADFF",
                            "base-100": "#2A2A2A",
                        },
                    }
                ]
        }
    }
}

