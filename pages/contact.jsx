import Head from "next/head";
import MainWrapped from "@/components/base/main-wrapped";
import Container from "@/components/atoms/container";
import PageTitle from "@/components/atoms/page-title";

export default function Contact() {
  return (
    <Container className="mx-auto">
      <Head>
        <title>Contact | Muhamadzain.dev</title>
        <meta name="description" content="Coming Soon My Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainWrapped>
        <div className="content">
          <Container className="mx-auto">
            <div className="py-10 lg:py-10">
              <PageTitle title="/Contact Me" />
              <div className="pr-2 pt-3">
                <span className="font-body text-xl font-light text-primary dark:text-white">
                  Talk about business ? can contact me on various platforms to
                  discuss business with you
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
