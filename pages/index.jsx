import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/container";
import MainWrapped from "@/components/base/main-wrapped";
import StoryIcon from "../public/assets/icon-story.png";
import MetaTag from "@/components/base/meta-tag";
import ReadingListSection from "@/components/modules/reading-list-section";
import SEO from "next-seo.config";
import { DefaultSeo } from "next-seo";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <MetaTag title="Muhamadzain.dev - Software Engineer" />
      <DefaultSeo {...SEO} />
      <MainWrapped>
        <Container className="mt-30">
          <div className="border-b mx-auto">
            <div className="py-10  px-6">
              <h1 className="pt-3 font-body lg:text-4xl text-2xl font-semibold text-primary dark:text-white ">
                Hi,👋 I’m Muhamad Zainal Arifin.
              </h1>
              <p className="pt-3 font-body lg:text-2xl text-medium font-light text-primary dark:text-white">
                20 y.o, A Software Engineer. Mostly code in PHP and Javascript
                but sometime in Kotlin.
              </p>
            </div>
          </div>
          <div className=" border-grey-lighter py-16 lg:py-20 px-6">
            <div className="flex items-center pb-6">
              <Image src={StoryIcon} alt="icon story" />
              <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
                About Me.
              </h3>
            </div>
            <div>
              <p className="font-body text-medium font-normal text-primary dark:text-white">
                I&apos;m currently working fulltime Software Enginner at a
                company in Yogyakarta{" "}
                <span className="font-medium hover:underline">(CIKAJOGJA)</span>
                . Born in{" "}
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
          {/* <ContributionSection /> */}
          <ReadingListSection />
          {/* <ImageGallerySection /> */}
        </Container>
      </MainWrapped>
    </React.Fragment>
  );
}
