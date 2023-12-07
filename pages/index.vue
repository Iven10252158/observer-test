<script setup lang="ts">
const { locale } = useI18n()
console.log('locale', locale)
const chooseLanguage = (lang:string) => {
  locale.value = lang
}
</script>

<template>
  <div class="flex flex-col items-center bg-white">
    <h1 class="mt-24 text-8xl font-medium text-blue-500">
      {{ $t('hello') }}
    </h1>
    <div class="flex gap-3 mt-3">
      <button class="border border-black px-2 py-1" @click="chooseLanguage('zh-tw')">
        繁體中文
      </button>
      <button class="border border-black px-2 py-1" @click="chooseLanguage('en')">
        英文
      </button>
    </div>
  </div>
  <!-- <NuxtWelcome /> -->
</template>
