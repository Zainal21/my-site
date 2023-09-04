<!-- Landing Page -->
<template>
  <main id="home" class="[&>*]:mb-6 last:[&>*]:mb-0">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />
    <AppNav />
    <ProfileCard />
    <section>
      <h1 class="font-semibold text-2xl mb-6">
        Hi, my name is Muhamad Zain 👋
      </h1>
      <p class="text-md">
        I'm currently working fulltime Software Enginner at a company in
        Jakarta. Born in Karanganyar, Central Java, Indonesia. Interested in the
        world of technology, especially in the world of programming, and a
        sofware engineer who is quite experienced in creating, developing
        web-based and mobile-based applications.
      </p>
    </section>
    <!-- Skills -->
    <section>
      <h2 class="font-semibold text-xl mb-2 py-2">Skills</h2>
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
    <section>
      <h2 class="font-semibold text-xl mb-2 py-2">Currently</h2>
      <div class="columns-1 lg:columns-2 gap-6">
        <statusCard
          v-for="(content, type) in currently"
          :key="type"
          :status-type="type"
          :status-content="content"
        />
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
</script>
