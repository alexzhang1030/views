import { defineConfig } from 'astro/config'
import Unocss from 'unocss/astro'

// https://astro.build/config
import solidJs from '@astrojs/solid-js'

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [Unocss(), solidJs()],
  output: 'server',
  adapter: vercel(),
})
