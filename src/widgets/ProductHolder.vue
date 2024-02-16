<template>
  <div class="region-holder">
    <img :src="product.image || placeholder" :alt="product.name" class="h-6" loading="lazy" />

    <span class="pill" :style="{ background: currentColor }" @click="toggleColor"></span>

    <p class="text text-left">{{ product.name }}</p>
    <p class="text ml-auto">{{ formatDate(product?.date as number) }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { format } from 'date-fns'
import { type Mock } from '@/types/global'

const placeholder = 'https://cdn.pixabay.com/photo/2013/07/13/09/51/drink-156144_1280.png'

const props = defineProps<{ product: Mock }>()

const primaryColor = ref('')
const currentColor = ref('')
const colors = ['#518103', '#E4D33A', '#C63434']

onMounted(() => {
  primaryColor.value = colorAliaser(props.product?.status as string)
  currentColor.value = primaryColor.value
})

const formatDate = (timestamp: number) => {
  if (timestamp) {
    const date = new Date(timestamp)
    return format(date, 'dd/MM/yyyy')
  }
}

const toggleColor = () => {
  const currentIndex = colors.indexOf(currentColor.value)
  const nextIndex = (currentIndex + 1) % colors.length
  currentColor.value = colors[nextIndex]
}

const colorAliaser = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'green':
      return '#518103'

    case 'yellow':
      return '#E4D33A'

    case 'red':
      return '#C63434'

    default:
      return '#ececec'
  }
}
</script>

<style scoped lang="scss">
.region-holder {
  @apply flex items-center gap-2 w-11/12;

  .pill {
    @apply h-[9px] w-[9px] rounded-full;
  }

  .text {
    @apply text-black text-sm;
  }
}
</style>
