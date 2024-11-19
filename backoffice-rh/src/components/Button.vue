<script setup lang="ts">
defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});
</script>

<template>
    <button>{{placeholder}}</button>
  <!-- <label :for="placeholder">
    <input type="checkbox" :name="placeholder" :id="placeholder" />
  </label> -->
</template>

<style scoped>
</style>
