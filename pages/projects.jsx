import Head from "next/head";
import Container from "@/components/atoms/container";
import MainWrapped from "@/components/base/main-wrapped";
import PageTitle from "@/components/atoms/page-title";

export default function Projects() {
  return (
    <Container className="mx-auto">
      <Head>
        <title>Project | Muhamadzain.dev</title>
        <meta name="description" content="Coming Soon My Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainWrapped>
        <div
          className="content max-w-6xl"
          style={{
            height: "100vh",
          }}
        >
          <Container className="mx-auto">
            <div className="py-10 lg:py-10">
              <PageTitle title="/Projects" />
              <div className="pr-2 pt-3">
                <span className="font-body text-xl font-light text-primary dark:text-white">
                  A recent project to fill my spare time and to learn some new
                  technologies
                </span>
              </div>

              <div className="pt-16 lg:pt-20">
                <h3 className="pb-8 font-body text-2xl font-semibold text-primary dark:text-white">
                  Coming Soon
                </h3>
                <ul className="list-disc pl-10"></ul>
              </div>
            </div>
          </Container>
        </div>
      </MainWrapped>
    </Container>
  );
}
