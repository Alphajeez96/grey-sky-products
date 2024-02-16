<template>
  <div class="border-b border-[#F0F2F4] pb-3 duration-300 w-full md:w-[48%] lg:w-full">
    <button
      class="flex items-center w-full"
      :aria-expanded="isOpen"
      :aria-controls="`collapse${_uid}`"
    >
      <slot name="title" />
      <span class="ml-auto" @click="toggleAccordion()">
        <Caret
          class="transform transition-transform origin-center duration-500"
          :class="{ 'rotate-x-180': isOpen }"
        />
      </span>
    </button>

    <Transition name="fade-up" mode="in-out">
      <div v-show="isOpen" :id="`collapse${_uid}`" class="pt-4 transition-all duration-500">
        <slot name="content" />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Caret from '@/components/Icons/Caret.vue'

defineProps<{ _uid?: number }>()
const isOpen = ref(false)

const toggleAccordion = () => {
  isOpen.value = !isOpen.value
}
</script>
