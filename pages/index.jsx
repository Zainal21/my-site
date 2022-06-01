import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/atoms/container";
import MainWrapped from "@/components/base/main-wrapped";
import StoryIcon from "../public/assets/icon-story.png";

export default function Home() {
  return (
    <Container className="mx-auto">
      <Head>
        <title>Muhamadzain.dev - Software Engineer</title>
        <meta name="description" content="Coming Soon My Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainWrapped>
        <Container className="mt-20">
          <div className="border-b mx-auto">
            <div className="py-10 lg:py-10">
              <h1 className="pt-3 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
                Hi,👋 I’m Muhamad Zainal Arifin.
              </h1>
              <p className="pt-3 font-body text-2xl font-light text-primary dark:text-white">
                20 y.o, A Software Engineer. Mostly code in PHP and Javascript
                but sometime in Kotlin.
              </p>
            </div>
          </div>
          <div className=" border-grey-lighter py-16 lg:py-20">
            <div className="flex items-center pb-6">
              <Image src={StoryIcon} alt="icon story" />
              <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
                About Me.
              </h3>
            </div>
            <div>
              <p className="font-body text-xl font-normal text-primary dark:text-white">
                I&apos;m currently working fulltime Software Enginner at a
                company in Yogyakarta{" "}
                <span className="font-medium hover:underline">(CIKAJOGJA)</span>
                . Born in
                <a
                  href="https://www.karanganyarkab.go.id"
                  target="_blank"
                  className="font-medium hover:underline"
                  rel="noreferrer"
                >
                  Karanganyar,
                </a>
                Central Java, Indonesia Graduated Software Engineering student
                from{" "}
                <a
                  href="https://www.smkn2kra.sch.id"
                  className="font-medium hover:underline"
                  rel="noreferrer"
                >
                  VHS 2 Karanganyar{" "}
                </a>
                Software Engineering graduated who is interested in the world of
                technology, especially in the world of programming, and a
                sofware engineer who is quite experienced in creating,
                developing web-based and mobile-based applications.
              </p>
              <br />
              <Link href="/about">
                <a className="hover:underline mt-20 text-primary dark:text-white text-xl font-semibold">
                  More About Me.
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </MainWrapped>
    </Container>
  );
}
