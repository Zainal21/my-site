<template>
  <div class="py-3">
    <!-- Introduction -->
    <button
      class="focused-link w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-100 dark:bg-zinc-400 dark:text-zinc-900 p-0 mx-0 absolute top-3 right-3"
      aria-label="Switch Theme"
      title="Switch Theme"
      @click="toggleDark()"
    >
      <Icon v-if="isDark" name="heroicons:sun-solid" />
      <Icon v-if="!isDark" name="heroicons:moon-solid" />
    </button>
  </div>
  <hr
    class="hidden md:inline-block w-3/4 md:my-3 border-none bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent h-[1px] rounded-full"
  />
</template>

<script setup>
// dark theme attribute
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
