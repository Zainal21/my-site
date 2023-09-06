<!-- Landing Page -->
<template>
  <main id="home">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />
    <AppNav />
    <div class="p-8">
      <ProfileCard />
      <section class="p-8">
        <h1 class="font-semibold text-2xl mb-6">
          Hi, my name is Muhamad Zain 👋
        </h1>
        <p class="text-sm leading-relaxed">
          I'm a Software Engineer based in Jakarta, Indonesia, with a deep
          passion for programming. Over the years, I've honed my skills and
          expertise, and my current focus is on backend development and DevOps
          practices. With a strong foundation in creating web and mobile
          applications, I'm now dedicated to crafting robust backend systems and
          implementing efficient DevOps workflows. Here, I share my experiences,
          insights, and projects that showcase my commitment to these exciting
          fields.
        </p>
      </section>
      <!-- Skills -->
      <section class="p-8">
        <h2 class="font-semibold text-sm leading-relaxed mb-2 py-2">Skills</h2>
        <ul class="p-0">
          <li
            v-for="skill in skills"
            :key="skill"
            class="px-3 py-1 inline-block dark:border dark:border-green-500 bg-green-300 dark:bg-transparent text-zinc-800 dark:text-green-500 font-medium rounded-full text-sm mr-1 mb-1"
          >
            {{ skill }}
          </li>
        </ul>
      </section>

      <!-- Status -->
      <section class="p-8">
        <h2 class="font-semibold text-sm leading-relaxed mb-2 py-2">
          Currently
        </h2>
        <div class="columns-1 lg:columns-2 gap-6">
          <statusCard
            v-for="(content, type) in currently"
            :key="type"
            :status-type="type"
            :status-content="content"
          />
        </div>
      </section>
      <!-- book marks -->
      <section class="p-8">
        <h2 class="font-semibold text-sm leading-relaxed mb-2 py-2">
          Latest Bookmarks
        </h2>
        <template v-if="pending">
          <PickSkeleton v-for="skeleton in skeletons" :key="skeleton" />
        </template>
        <template v-else>
          <BookmarkCard
            v-for="bookmark in bookmarks.slice(1, 5)"
            :key="bookmark.link"
            :bookmark="bookmark"
          />
        </template>
      </section>
      <AppFooter />
    </div>
  </main>
</template>

<script setup>
import BookmarkCard from "~/components/cards/BookmarkCard.vue";

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

const skills = ref([
  "Laravel",
  "Vue.JS",
  "Codeigniter",
  "Git",
  "HTML",
  "CSS",
  "SQL",
  "Node.js",
  "Kotlin",
  "Express.js",
  "Jenkins",
  "Docker",
  "Docker Swarm",
]);

const currently = {
  Learning: "Kubernetes",
  Reading: "The Pragmatic Programmer",
  Listening: "Jadi Developer Tanpa Background IT Ala Diva Fathan Margono",
  Playing: "Hindia - Dehidrasi",
};

// Skeletons
const skeletons = [...Array(5).fill(Math.random())];

const { pending, data: bookmarks } = await useLazyFetch("/api/bookmarks");
</script>
