<template>
  <main>
    <h1 class="header">Products</h1>
    <section class="holder"></section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  @apply text-black font-bitter font-medium text-2xl;
}

.holder {
  @apply mt-5 bg-white rounded-lg border border-gray h-12;
}
</style>
