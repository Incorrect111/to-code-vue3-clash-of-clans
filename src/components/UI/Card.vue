<template>
  <div class="card">
    <div v-if="item.img" class="card-img-wrapper">
      <img class="card-img" :src="item.img" :alt="item.title" />
    </div>
    <span class="card-name">{{ item.level }} lvl</span>
    <span class="card-title">{{ item.title }}</span>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
