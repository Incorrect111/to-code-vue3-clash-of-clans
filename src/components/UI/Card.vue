<template>
  <div class="card">
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
