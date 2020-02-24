import { API_ROOT, I18N } from './config'

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#fff' },
  modules: [
    ['nuxt-i18n', I18N],
    [
      '@nuxtjs/axios',
      {
        baseURL: API_ROOT
      }
    ]
  ],
  plugins: [
    { src: '~/plugins/version' }
  ]
}
