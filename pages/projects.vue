<template>
  <main id="projects">
    <Title>{{ seoMeta.title }}</Title>
    <Meta name="description" :content="seoMeta.description" />
    <AppNav class="md:flex flex-col" />
    <section id="bookmark-container" class="p-8">
      <h1 class="font-bold text-2xl mb-6 px-2">Projects</h1>
      <blockquote class="px-2">
        My individual's notable work and accomplishments.
      </blockquote>
      <div class="my-4 w-full p-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ProjectCard
          img-url="https://raw.githubusercontent.com/Zainal21/anggit-febriyanto-indri-wedding-site/main/screenshot/screenshot-result.png"
          project-title="Wedding Invitation"
          project-description="Showcasing a modern and elegant design with features
        such as RSVP management, event details, and photo galleries"
          project-url="https://demo-anggit-febriyanto-weeding.vercel.app"
          :tags="['Gatsby', 'Supabase']"
        />
        <ProjectCard
          img-url="content/school-compro.png"
          project-title="SMKN 2 Karanganyar"
          project-description="A school's company profile website, showcasing essential information about the institution, its history, mission, and educational offerings"
          project-url="#"
          :tags="['Laravel', 'Next.JS', 'Chakra UI']"
        />
        <ProjectCard
          img-url="https://raw.githubusercontent.com/erpeel-a/Sistem-Pengaduan-Sekolah-SMKN2Karanganyar-Frontend/main/images/mockup.png"
          project-title="Pengaduan Sekolah"
          project-description="A platform for reporting school-related issues swiftly and effectively, promoting a responsive and accountable school community."
          project-url="https://pengaduan-smkn2kra.netlify.app"
          :tags="['Laravel', 'Next.JS', 'Chakra UI']"
        />
        <ProjectCard
          img-url="content/jtlexpress.png"
          project-title="JTL Express"
          project-description="JTLEXpress app with features: instant tariff checks, real-time AWB tracking, and relevant news updates for streamlined logistics management."
          project-url="https://jtlexpress.co.id"
          :tags="['Kotlin', 'Lumen', 'Codeigniter 3']"
        />
        <ProjectCard
          img-url="content/wedding-site.png"
          project-title="Wedding Invitation #2"
          project-description="Showcasing a modern and elegant design with features
        such as RSVP management, event details, and photo galleries"
          project-url="#"
          :tags="['Laravel']"
        />
        <ProjectCard
          img-url="content/password-strength.png"
          project-title="Password Strength Checker"
          project-description="A Password Strength Checker tool that assesses the security of your passwords, helping you create strong and secure login credentials"
          project-url="#"
          :tags="['Vue.JS']"
        />
      </div>
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
</script>
