<template>
  <input
    :id="id"
    :type="type"
    :value="modelValue"
    class="text-input"
    :class="classes"
    :disabled="disabled"
    :readonly="readonly"
    :aria-labelledby="id"
    :placeholder="placeholder"
    v-bind="$attrs"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
interface TextInput {
  id: string
  placeholder?: string
  type: 'text' | 'email' | 'password' | 'number'
  modelValue?: string | number
  classes?: string
  disabled?: boolean
  readonly?: boolean
}

const emit = defineEmits(['update:modelValue'])

withDefaults(defineProps<TextInput>(), {
  placeholder: 'placeholder',
  type: 'text',
  disabled: false,
  readonly: false
})

const handleInput = (event: Event) => {
  if (event.target) {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
  }
}
</script>

<style scoped lang="scss">
.text-input {
  @apply h-[38px] border w-full border-gray rounded p-3 text-sm text-black font-medium transition-all duration-300;

  &:hover {
    @apply border border-black rounded;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    @apply text-[#939597] font-normal;

    &:hover {
      @apply opacity-80 text-black;
    }
  }
}
</style>
