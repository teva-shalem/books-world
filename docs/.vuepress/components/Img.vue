<template>
<img class="img" :src="$withBase('images/' + path)">
</template>

<script lang="ts">
export default {
  props: {
    path: {type: String, required: true}
  },
}
</script>
<style lang="stylus">
img 
  max-width 100%
</style>