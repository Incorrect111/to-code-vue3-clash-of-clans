<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr" />
      <h1 class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>
      <CardStats :item="item" />
      <div>
        <router-link to="/" class="btn btnPrimary">Back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items'
import CardStats from '@/components/UI/CardStats'

export default {
  data() {
    return {
      item: null,
      alias: null
    }
  },
  components: {
    CardStats
  },

  created() {
    te
    const alias = this.$route.params.itemAlias
    const item = items.find(item => item.alias === alias)

    if (!item) {
      this.$router.push('/notFound')
    }

    this.alias = alias
    this.item = item
  }
}
</script>

<style lang="scss">
.wrapper-person {
  text-align: center;
  .card-stats {
    margin: 30px 0;
    border-radius: 14px;
  }
}
</style>
