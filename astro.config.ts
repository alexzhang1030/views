import { defineConfig } from 'astro/config'
import Unocss from 'unocss/astro'

import solidJs from '@astrojs/solid-js'

export default defineConfig({
  integrations: [Unocss(), solidJs()],
})
