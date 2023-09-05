<template>
  <main id="projects">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />
    <AppNav class="md:flex flex-col" />
    <section class="my-4 w-full p-8">
      <h3 class="text-2xl text-left font-bold mb-6">Coming Soon</h3>
    </section>
  </main>
</template>

<script setup>
const seoMeta = {
  title: "Muhamad Zain - Software Enginner",
  description: "👨‍💻 Coding life in PHP, JavaScript, and TypeScript 🚀",
  image: "/og-image.png",
  page: "resume",
};
</script>
