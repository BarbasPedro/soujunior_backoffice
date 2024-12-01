<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits<{
  (e: 'change', value: boolean): void
}>();

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('change', target.checked);
};
</script>

<template>
  <label :for="label">
    <input 
      type="checkbox" 
      :name="label" 
      :id="label" 
      :checked="checked"
      @change="handleChange"
    >
    {{label}}
  </label>
</template>

<style scoped>
input {
  margin-right: 8px;
}
</style>
