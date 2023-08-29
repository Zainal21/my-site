import Link from "next/link";
import Container from "@/components/ui/container";
import MainWrapped from "@/components/base/main-wrapped";
import MetaTag from "@/components/base/meta-tag";
import ReadingListSection from "@/components/modules/reading-list-section";
import RecentPlaylist from "@/components/modules/recent-playlist";
import SEO from "next-seo.config";
import { DefaultSeo } from "next-seo";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <MetaTag title="Muhamadzain.dev - Software Engineer" />
      <DefaultSeo {...SEO} />
      <MainWrapped>
        <Container className="mt-30">
          <div className="border-b mx-auto">
            <div className="py-8 px-2">
              <h1 className="pt-3 font-body lg:text-2xl text-lg font-semibold text-primary text-gray-200 ">
                Hi,👋 I’m Muhamad Zainal Arifin.
              </h1>
              <p className="pt-3 font-body lg:text-lg text-sm text-medium font-light text-primary text-gray-200">
                A Software Engineer. Mostly code in PHP and Javascript but
                sometime in Kotlin.
              </p>
            </div>
          </div>
          <div className=" border-grey-lighter py-6 lg:py-15 px-6 lg:text-lg text-sm">
            <div>
              <p className="font-body  font-normal text-primary text-gray-200">
                I&apos;m currently working fulltime Software Enginner at a
                company in Jakarta. Born in{" "}
                <a
                  href="https://www.karanganyarkab.go.id"
                  target="_blank"
                  className="font-medium hover:underline"
                  rel="noreferrer"
                >
                  Karanganyar,{" "}
                </a>
                Central Java, Indonesia Graduated Software Engineering student
                from{" "}
                <a
                  href="https://www.smkn2kra.sch.id"
                  className="font-medium hover:underline"
                  rel="noreferrer"
                >
                  (Vocational High School / SMK Negeri) 2 Karanganyar,{" "}
                </a>
                Software Engineering graduated who is interested in the world of
                technology, especially in the world of programming, and a
                sofware engineer who is quite experienced in creating,
                developing web-based and mobile-based applications.
              </p>
              <p className="mt-4">
                I created a{" "}
                <Link href="/uses">
                  <a className="text-white hover:underline font-semibold">
                    /uses
                  </a>
                </Link>{" "}
                page that lists the applications I normally use.
              </p>
              <br />
              <Link href="/about">
                <a className="hover:underline mt-20 text-primary text-gray-200 text-medium font-semibold">
                  More About Me.
                </a>
              </Link>
            </div>
          </div>
          {/* recent playlist */}
          {/* <RecentPlaylist /> */}
          {/* end recent playlist */}
          {/* reading list section */}
          <ReadingListSection />
          {/* end readling list section */}
        </Container>
      </MainWrapped>
    </Fragment>
  );
}
