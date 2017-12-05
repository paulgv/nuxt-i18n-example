<template>
  <span class="lang-switcher">
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="switchLocalePath(locale.code)">
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
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    }
  }
}
</script>
