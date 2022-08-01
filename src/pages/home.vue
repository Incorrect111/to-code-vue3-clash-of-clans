<template>
  <carousel :settings="settings" :breakpoints="breakPoints">
    <slide class="card__wrapper" v-for="item in items" :key="item.id">
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
    </slide>

    <!-- addons -->
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import items from '@/seeders/items.js'
import Card from '@/components/UI/Card.vue'
import CardStats from '@/components/UI/CardStats'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components: {
    Card,
    CardStats,
    Carousel,
    Slide,
    Navigation
  },

  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 1,
        wrapAround: true,
        snapAlign: 'center'
      }
    }
  }
}
</script>
