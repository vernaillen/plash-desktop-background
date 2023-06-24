import { defineConfig } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

import presetUno from '@unocss/preset-uno'

export default defineConfig({
    presets: [
        presetUno(),
        presetWebFonts({
            provider: 'google',
            extendTheme: true,
            fonts: {
                sans: ['Inter:200,300,400,500,700,800,900'],
                mono: ['Roboto Mono'],
            }
        }),
    ],
})