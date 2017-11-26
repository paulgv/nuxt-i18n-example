<template>
  <span class="lang-switcher">
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="getSwitchLocaleRoute(locale.code)">
      {{ locale.name }}
    </nuxt-link>
  </span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LangSwitcher',
  computed: {
    ...mapState('i18n', [
      'locales',
      'currentLocale'
    ]),
    showLocales () {
      return this.locales.filter(locale => locale.code !== this.currentLocale)
    }
  }
}
</script>
