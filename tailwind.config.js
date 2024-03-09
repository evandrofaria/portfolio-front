/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                'primary': 'var(--primary-color)',
                'secondary-color': 'var(--secondary-color)',
                'primary-shade': 'var(--ion-color-primary-shade)',
                'primary-tint': 'var(--ion-color-primary-tint)',
                'secondary-text': 'var(--secondary-text)',
                'gradient-gray': 'var(--gradient-gray)',
                'card-color': 'var(--card-color)'
            },
            backgroundColor: {
                'default': 'var(--ion-background-color)',
                'alternative': 'var(--alternative-bg)'
            },
            // screens: {
            //     mobile: {min: '0px', max: '768px'},
            //     desktop: '769px'
            // },
            fontFamily: {
                sans: ['"Plus Jakarta Sans", sans-serif',]
            }
        },
    },
    // plugins: [require("daisyui")],
    // daisyui: {
    //     themes: [
    //         {
    //             mytheme: {
    //                 "primary": "#FFFFFF",
    //                 "secondary": "#5BADFF",
    //                 "base-100": "#2A2A2A",
    //             },
    //         }
    //     ]
    // }
}

