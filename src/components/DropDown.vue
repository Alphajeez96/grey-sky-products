<template>
  <transition name="fade-up">
    <div class="holder" :class="classes" v-if="isOpen">
      <slot />
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{ isOpen: boolean; classes?: string }>()
</script>

<style scoped lang="scss">
.holder {
  @apply bg-white rounded-lg border border-gray py-2;
}
</style>
