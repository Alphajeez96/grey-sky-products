<template>
  <main>
    <h1 class="header">Products</h1>
    <section class="holder">
      <!-- Search Product Region -->
      <div class="form-holder">
        <TextInput
          id="find-product"
          type="text"
          placeholder="Find a Product"
          v-model="searchQuery"
        />

        <div>
          <Button id="search" text="Search" classes="bg-primary-blue w-[72px]" />
        </div>
      </div>

      <!--  Add Product Region -->
      <div class="form-holder">
        <TextInput id="add-product" type="text" placeholder="Product Name" v-model="name" />

        <div>
          <Button id="add-product" text="Add Product" classes="bg-primary-green w-[103px]" />
        </div>
      </div>

      <!-- Accordion Here -->
      <template v-if="!!filteredData.length">
        <div class="accordion-holder transparent-scrollbar">
          <Accordion
            class="mb-5"
            v-for="(product, index) in filteredData"
            :key="index"
            :_uid="index"
          >
            <template #title>
              <ProductHolder :product="product" />
            </template>

            <template #content>
              <ProductDetails :product="product" />
            </template>
          </Accordion>
        </div>
      </template>

      <template v-else>
        <p class="text-black text-center py-12 font-medium">No record found</p>
      </template>
    </section>

    <!-- Pagination Here -->
    <section class="pt-4">
      <AppFooter
        :count="filteredData.length"
        @perPageClick="(value: number) => (perPage = value)"
        @sortClick="(value: string) => (sortValue = value)"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import testData from '@/lib/mock'
import Button from '@/components/Button/index.vue'
import TextInput from '@/components/TextInput/index.vue'
import Accordion from '@/components/Accordion/index.vue'
import ProductHolder from '@/widgets/ProductHolder.vue'
import ProductDetails from '@/widgets/ProductDetails.vue'
import AppFooter from '@/components/Partials/AppFooter.vue'

const name = ref('')
const perPage = ref(10)
const sortValue = ref('A-Z')
const searchQuery = ref('')

const sortedData = computed(() => {
  const sorted = [...testData]

  if (sortValue.value === 'A-Z') {
    sorted.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sortValue.value === 'Created Date') {
    sorted.sort((a, b) => {
      const dateA = a.date ? new Date(a.date) : null
      const dateB = b?.date ? new Date(b.date) : null

      return (dateA?.getTime() ?? 0) - (dateB?.getTime() ?? 0)
    })
  }

  return sorted.slice(0, perPage.value)
})

const filteredData = computed(() => {
  const filtered = sortedData.value.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
  return filtered.slice(0, perPage.value)
})
</script>

<style scoped lang="scss">
main {
  @apply w-full md:w-[643px] mx-auto;
  .header {
    @apply text-black font-bitter font-medium text-2xl;
  }

  .holder {
    @apply mt-5 p-4 md:p-6 bg-white rounded-lg border border-gray;

    .form-holder {
      @apply flex items-center gap-2 w-full pb-3;
    }
  }

  .accordion-holder {
    @apply mt-5 overflow-auto;
    height: calc(100vh - 25rem);
  }
}
</style>
