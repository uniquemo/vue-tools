<template>
  <h3>{{ msg }}</h3>
  <button type='button' @click='count++'>count is: {{ count }}</button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
button {
  font-size: 14px;
}
</style>
