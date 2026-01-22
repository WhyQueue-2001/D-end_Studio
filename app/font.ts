// app/font.ts
import localFont from 'next/font/local'

export const customFont = localFont({
  src: [
    {
      path: '../public/fonts/font1.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-custom',
})