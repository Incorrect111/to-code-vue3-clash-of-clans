<template>
  <h1>hello home</h1>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <Card :item="item" class="card">
      {{ item.descr }}
    </Card>
  </div>
</template>

<script>
import Card from '@/components/UI/Card.vue'
export default {
  components: { Card },

  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Archer',
          descr: 'Description for Archer',
          level: 4
        },
        {
          id: 2,
          title: 'Wizard',
          descr: 'Description for Wizard',
          level: 5
        }
      ]
    }
  }
}
</script>
