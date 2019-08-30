<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-i18n-example
      </h1>
      <h2 class="subtitle">
        {{ $t('homepage.subtitle') }}
      </h2>
      <div class="links">
        <a href="https://github.com/nuxt-community/nuxt-i18n" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 80px;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 35px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

@media (max-width: 991px) {
  .title {
    font-size: 50px;
  }

  .subtitle {
    font-size: 30px;
  }
}

@media (max-width: 767px) {
  .title {
    font-size: 30px;
  }

  .subtitle {
    font-size: 20px;
  }
}
</style>
