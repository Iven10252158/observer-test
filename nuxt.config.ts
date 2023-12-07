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
    'nuxt-icons',
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@nuxtjs/i18n'
  ],
  i18n: {
    strategy: 'no_prefix',
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'zh-tw',
        iso: 'zh-TW',
        file: 'zh-tw.json'
      }
    ],
    defaultLocale: 'zh-tw'
  },
  imports: {
    dirs: ['stores']
  },
  css: [
    '@unocss/reset/tailwind.css'
  ]
})
