import en from '../lang/en-US.js'
import fr from '../lang/fr-FR.js'
import es from '../lang/es-ES.js'

export const API_ROOT = 'https://jsonplaceholder.typicode.com/'

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      name: 'Français'
    },
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Español'
    }
  ],
  defaultLocale: 'en',
  routes: {
    about: {
      fr: '/a-propos',
      en: '/about-us'
    },
    posts: {
      fr: '/articles'
    },
    'post/_id': {
      fr: '/article/:id?',
      es: '/articulo/:id?'
    },
    'dynamicNested/_category': {
      fr: 'imbrication-dynamique/:category'
    }
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, fr, es }
  }
}
