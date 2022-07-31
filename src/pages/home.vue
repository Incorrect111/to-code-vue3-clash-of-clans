<template>
  <div class="md-body">
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <Card :item="item" class="card">
      <template v-slot:body>
        {{ item.descr }}
      </template>
      <template v-slot:footer>
        <div class="card-stats">
          <CardStats :item="item" />
        </div>
      </template>
    </Card>
  </div>
  </div>
</template>

<script>
import items from '@/seeders/items.js'
import Card from '@/components/UI/Card.vue'
import CardStats from '@/components/UI/CardStats'

export default {
  components: { Card, CardStats, CardStats },

  data() {
    return {
      items: items
    }
  }
}
</script>
