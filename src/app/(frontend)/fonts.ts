import localFont from 'next/font/local'

export const modernAntiqua = localFont({
    src: [
        {
            path: '../../public/fonts/Antiqua/ModernAntiqua-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Antiqua/ModernAntiqua-BoldOblique.ttf',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Antiqua/ModernAntiqua-Book.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Antiqua/ModernAntiqua-BookOblique.ttf',
            weight: '400',
            style: 'italic',
        },
    ],
    variable: '--modern-antiqua'
})

export const candara = localFont({
    src: [
        {
            path: '../../public/fonts/Candara/Candara.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Candara/Candarai.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Candara/Candarab.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Candara/Candaraz.ttf',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Candara/Candaral.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Candara/Candarali.ttf',
            weight: '300',
            style: 'italic',
        }
    ],
    variable: '--candara'
})