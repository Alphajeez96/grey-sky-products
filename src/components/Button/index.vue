<template>
  <button
    :id="id"
    :type="type"
    class="button"
    :class="classes"
    :disabled="disabled"
    :aria-disabled="disabled"
    :aria-label="id"
  >
    <span v-if="text"> {{ text }}</span>
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Button {
  id: string
  text?: string
  classes?: string
  disabled?: boolean
  hasPattern?: boolean
  type?: 'button' | 'submit'
}

withDefaults(defineProps<Button>(), {
  id: 'button',
  disabled: false,
  type: 'button'
})
</script>

<style scoped lang="scss">
.button {
  @apply flex items-center justify-center px-4 text-xs text-white h-[38px] rounded relative outline-none focus:outline-none duration-300;

  &:hover {
    @apply opacity-75;
  }

  &:active {
    @apply opacity-60 outline-none;
  }

  &:disabled {
    @apply cursor-not-allowed opacity-50;
  }
}
</style>
