<template>
  <div>
    <div class="flex justify-between md:gap-2 items-center mb-5">
      <img
        :src="product.image || placeholder"
        :alt="product.name"
        class="h-[198px]"
        loading="lazy"
      />

      <div>
        <Button id="replace" text="Replace" classes="bg-primary-blue !h-8 !px-6" />
        <p class="text-black text-sm text-center pt-3 cursor-pointer">Clear</p>
      </div>
    </div>

    <!-- Title -->
    <div class="form-holder">
      <label for="image-title"> Image Title</label>
      <TextInput id="image-title" type="text" :value="product.name" readonly />
    </div>

    <!-- Alt Text -->
    <div class="form-holder">
      <label for="image-title"> Alt Text</label>
      <TextInput id="image-title" type="text" :value="product.name" readonly />
    </div>

    <!-- Link -->
    <div class="form-holder">
      <label for="image-title"> Link </label>
      <TextInput id="image-title" type="text" :value="product.image || placeholder" readonly />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { type Mock } from '@/types/global'
import Button from '@/components/Button/index.vue'
import TextInput from '@/components/TextInput/index.vue'

defineProps<{ product: Mock }>()
const placeholder = 'https://cdn.pixabay.com/photo/2013/07/13/09/51/drink-156144_1280.png'
</script>

<style scoped lang="scss">
.form-holder {
  @apply mb-4;

  label {
    @apply block text-[#6a6c6d] font-semibold pb-1 text-sm;
  }
}
</style>
