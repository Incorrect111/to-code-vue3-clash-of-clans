<template>
  <h1>hello home</h1>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <Card :item="item" class="card">
      {{ item.descr }}
    </Card>
  </div>
</template>

<script>
import items from '@/seeders/items.json'
import Card from '@/components/UI/Card.vue'
export default {
  components: { Card },

  data() {
    return {
     items: items
    }
  }
}
</script>
