<template>
  <main class="bookmarks">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />
    <AppNav class="md:flex flex-col" />
    <section id="picks-container" class="h-screen p-8">
      <h1 class="font-bold text-2xl mb-6">Bookmarks</h1>
      <blockquote>Content from across the web I found interesting.</blockquote>
      <br />
      <template v-if="pending">
        <PickSkeleton v-for="skeleton in skeletons" :key="skeleton" />
      </template>
      <template v-else>
        <BookmarkCard
          v-for="bookmark in bookmarks"
          :key="bookmark.link"
          :bookmark="bookmark"
        />
      </template>
    </section>
    <AppFooter />
  </main>
</template>

<script setup>
import BookmarkCard from "../components/cards/BookmarkCard.vue";

const seoMeta = {
  title: "Muhamad Zain - Software Enginner",
  description: "👨‍💻 Coding life in PHP, JavaScript, and TypeScript 🚀",
  image: "/og-image.png",
  page: "",
};

useServerSeoMeta({
  title: seoMeta.title,
  ogTitle: seoMeta.title,
  twitterTitle: seoMeta.title,
  description: seoMeta.description,
  ogDescription: seoMeta.description,
  twitterDescription: seoMeta.description,
  ogImage: seoMeta.image,
  twitterImage: seoMeta.image,
  ogType: "website",
  ogLocale: "en_US",
  twitterCard: "summary_large_image",
});

// Skeletons
const skeletons = [...Array(5).fill(Math.random())];

const { pending, data: bookmarks } = await useLazyFetch("/api/bookmarks");
</script>
