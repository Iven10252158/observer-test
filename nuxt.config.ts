// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: true,
  runtimeConfig: {
    public: {
      sdkKey: 'RJZCjllKTtzHMamLlsm0'
    }
  },
  modules: [
    ['@pinia/nuxt', {
      autoImports: [
        'defineStore',
        ['defineStore', 'definePiniaStore']
      ]
    }],
    '@unocss/nuxt',
    'nuxt-svgo',
    '@nuxt/devtools',
    '@vueuse/nuxt'
  ],
  imports: {
    dirs: ['stores']
  },
  css: [
    '@unocss/reset/tailwind.css'
  ]
})
