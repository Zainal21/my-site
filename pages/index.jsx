import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/container";
import MainWrapped from "@/components/base/main-wrapped";
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
              <h1 className="pt-3 font-body lg:text-4xl text-2xl font-semibold text-primary text-gray-200 ">
                Hi,👋 I’m Muhamad Zainal Arifin.
              </h1>
              <p className="pt-3 font-body lg:text-xl text-medium text-medium font-light text-primary text-gray-200">
                20 y.o, A Software Engineer. Mostly code in PHP and Javascript
                but sometime in Kotlin.
              </p>
            </div>
          </div>
          <div className=" border-grey-lighter py-16 lg:py-20 px-6">
            <div className="flex items-center pb-6">
              <h3 className="ml-3 font-body text-2xl font-semibold text-primary text-gray-200">
                About Me.
              </h3>
            </div>
            <div>
              <p className="font-body lg:text-medium text-base font-normal text-primary text-gray-200">
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
                <a className="hover:underline mt-20 text-primary text-gray-200 text-medium font-semibold">
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
