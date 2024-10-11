import { Roboto_Mono, Inter } from 'next/font/google'

// Initialize the font
export const robotomono = Roboto_Mono({
    weight: ['400', '600', '700',],
    subsets: ['latin'],
    display: 'swap',
})
export const inter = Inter({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
})