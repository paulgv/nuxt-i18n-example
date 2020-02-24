import packageJson from '../package.json'

export default (_, inject) => {
  inject('nuxtI18nVersion', packageJson.dependencies['nuxt-i18n'])
}
