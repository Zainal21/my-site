<template>
  <main id="projects">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />
    <AppNav class="md:flex flex-col" />
    <section id="blog-container" class="p-8">
      <h1 class="font-bold text-2xl mb-6">Bookmarks</h1>
      <blockquote>Content from across the web I found interesting.</blockquote>
      <br />
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <template v-if="pending">
          <BlogSkeleton v-for="skeleton in skeletons" :key="skeleton" />
        </template>
        <template v-else>
          <BlogCard
            v-for="blogPost in blogPosts"
            :key="blogPost._id"
            :tags="blogPost.tags"
            :blogTitle="blogPost.longTitle || blogPost.title"
            :title="blogPost.title"
            :url="blogPost._path"
            :pubDate="blogPost.updated"
            :coverImage="blogPost.image"
          />
        </template>
      </div>
    </section>
    <AppFooter />
  </main>
</template>

<script setup>
const seoMeta = {
  title: "Muhamad Zain - Software Enginner",
  description: "👨‍💻 Coding life in PHP, JavaScript, and TypeScript 🚀",
  image: "/og-image.png",
  page: "resume",
};

const skeletons = [...Array(5).fill(Math.random())];

const { pending, data: blogPosts } = await useLazyAsyncData("blog", () =>
  queryContent("/blog").find()
);
</script>
