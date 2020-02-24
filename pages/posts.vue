<template>
  <section class="container">
    <div v-if="posts">
      <h1>{{ $t('posts') }}</h1>
      <ul class="posts">
        <li v-for="post in showPosts" :key="`post-${post.id}`">
          <div class="id">
            {{ post.id }}
          </div>
          <div class="title">
            <nuxt-link
              :to="localePath({
                name: 'post-id',
                params: { id: post.id }
              })"
            >
              {{ post.title }}
            </nuxt-link>
          </div>
        </li>
      </ul>
      <ul class="pagination">
        <li v-for="(page, i) in pagination" :key="`pagination-item-${i}`">
          <nuxt-link
            :to="localePath({
              name: 'posts',
              query: {
                page: i + 1
              }
            })"
          >
            {{ i + 1 }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ app }) {
    try {
      const response = await app.$axios.get('posts')
      const posts = response.data
      return { posts }
    } catch (error) {
      return {}
    }
  },
  data: () => ({
    postsPerPage: 15
  }),
  computed: {
    currentPage () {
      return this.$route.query.page || 1
    },
    showPosts () {
      const start = (this.currentPage - 1) * this.postsPerPage
      const end = (this.currentPage) * this.postsPerPage
      return this.posts.slice(start, end)
    },
    pagination () {
      const pagesCount = Math.ceil(this.posts.length / this.postsPerPage)
      return Array.from(Array(pagesCount).keys())
    }
  }
}
</script>

<style scoped>
.container > div {
  width: 100%;
}

.posts {
  list-style: none;
  margin-bottom: 30px;
  padding: 0;
}

.posts li {
  display: flex;
  border: 1px solid #3b8070;
  margin-bottom: 10px;
}

.posts li div {
  display: flex;
  align-items: center;
}

.posts li .id {
  flex: 1 10%;
  padding: 10px 0;
  border-right: 1px solid #3b8070;
  background: #3b8070;
  color: #fff;
  justify-content: center;
}

.posts li .title {
  flex: 1 90%;
  padding-left: 10px;
  text-transform: uppercase;
  text-align: left;
}

.posts li .title a {
  text-decoration: none;
  color: #3b8070;
}

.pagination {
  list-style: none;
  text-align: center;
  padding: 0;
}

.pagination li {
  display: inline-block;
}

.pagination li a {
  display: block;
  text-decoration: none;
  border: 1px solid #3b8070;
  border-left: none;
  padding: 5px 10px;
  color: #3b8070;
}

.pagination li:first-of-type a {
  border-left: 1px solid #3b8070;
}
</style>
