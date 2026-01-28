// app/font.ts
import localFont from 'next/font/local'

export const customFont = localFont({
  src: [
    {
      path: '../public/fonts/e_font.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-custom',
})