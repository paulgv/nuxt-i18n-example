<template>
  <div>
    <header>
      <nav>
        <nuxt-link :to="localePath('index')">
          {{ $t('home') }}
        </nuxt-link>
        <nuxt-link :to="localePath('posts')">
          {{ $t('posts') }}
        </nuxt-link>
        <nuxt-link :to="localePath('about')">
          {{ $t('about') }}
        </nuxt-link>
        <LangSwitcher />
      </nav>
    </header>
    <nuxt />
    <div v-if="$nuxtI18nVersion" class="version">
      nuxt-i18n v{{ $nuxtI18nVersion }}
    </div>
  </div>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher'

export default {
  components: {
    LangSwitcher
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  padding-bottom: 30px;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.nuxt-progress {
  z-index: 10;
}

h1 {
  text-align: left;
  margin-bottom: 20px;
}

p {
  text-align: left;
}

header {
  width: 100%;
  background: #3b8070;
  color: #fff;
  padding: 15px;
  margin-bottom: 20px;
  text-align: right;
}

header a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 15px;
}

@media (max-width: 767px) {
  header a {
    display: block;
    padding: 10px 0;
    text-align: center;
  }
}

.container {
  min-height: 85vh;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

<style scoped>
.version {
  margin-top: 30px;
  text-align: center;
}
</style>
