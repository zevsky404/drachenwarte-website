import localFont from 'next/font/local'

export const modernAntiqua = localFont({
    src: [
        {
            path: './fonts/Antiqua/ModernAntiqua-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/Antiqua/ModernAntiqua-BoldOblique.ttf',
            weight: '700',
            style: 'italic',
        },
        {
            path: './fonts/Antiqua/ModernAntiqua-Book.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/Antiqua/ModernAntiqua-BookOblique.ttf',
            weight: '400',
            style: 'italic',
        },
    ],
    variable: '--modern-antiqua'
})