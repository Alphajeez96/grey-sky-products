<template>
  <div class="flex justify-between text-xs text-black px-4 relative pb-24">
    <p>
      Page
      <strong> {{ currentPage }} </strong>
      of <strong>{{ totalPages }}</strong>
    </p>

    <div class="relative">
      <button @click="isSort = !isSort">
        Sort by <strong>{{ sortValue }}</strong>
      </button>

      <div class="absolute top-6 -right-4">
        <DropDown :is-open="isSort" classes="w-32">
          <ul>
            <li v-for="(item, i) in sortData" :key="i" @click="handleSortClick(item)">
              {{ item }}
            </li>
          </ul>
        </DropDown>
      </div>
    </div>

    <!-- Per page Selector -->
    <section class="relative">
      <button class="flex items-center gap-3 font-bold" @click="isPerPage = !isPerPage">
        <span> {{ perPageValue }} </span>
        <Caret
          class="transform transition-transform origin-center duration-500"
          :class="{ 'rotate-x-180': isPerPage }"
        />
      </button>

      <div class="absolute top-6 -right-4">
        <DropDown :is-open="isPerPage" classes="w-24">
          <ul>
            <li v-for="(item, i) in perPageData" :key="i" @click="handleClick(item)">
              {{ item }}
            </li>
          </ul>
        </DropDown>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Caret from '@/components/Icons/Caret.vue'
import DropDown from '../DropDown.vue'

const perPageData: number[] = [10, 25, 50, 100]
const sortData: string[] = ['A-Z', 'Created Date']

const props = defineProps<{ count: number }>()
const emit = defineEmits(['perPageClick', 'sortClick'])

const isSort = ref(false)
const isPerPage = ref(false)
const perPageValue = ref(10)
const sortValue = ref('A-Z')
const currentPage = ref(1)
const totalPages = ref(2)

const handleClick = (value: number) => {
  perPageValue.value = value
  emit('perPageClick', value)
  isPerPage.value = false

  currentPage.value = 1
  totalPages.value = calculateTotalPages()
}

const handleSortClick = (value: string) => {
  sortValue.value = value
  emit('sortClick', value)
  isSort.value = false

  currentPage.value = 1
  totalPages.value = calculateTotalPages()
}

const calculateTotalPages = () => {
  return Math.ceil(props.count / perPageValue.value)
}
</script>

<style scoped lang="scss">
li {
  @apply text-xs font-medium px-4 py-2 cursor-pointer;

  &:hover {
    @apply bg-gray;
  }
}
</style>
