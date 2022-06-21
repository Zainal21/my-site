import Container from "@/components/ui/container";
import MainWrapped from "@/components/base/main-wrapped";
import PageTitle from "@/components/ui/page-title";
import PageContent from "@/components/base/page-content";
import MetaTag from "@/components/base/meta-tag";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <MetaTag title="About | Muhamadzain.dev" />
      <DefaultSeo {...SEO} />
      <MainWrapped>
        <PageContent>
          <Container className="mx-auto">
            <div className="py-10 lg:py-10">
              <PageTitle title="/About Me" />
              <div className="pr-2 pt-3">
                <span className="font-body lg:text-xl text-medium font-light text-primary dark:text-white">
                  This page is more about me 😃
                </span>
              </div>
              <div className="pt-16 lg:pt-20">
                <p className="font-body lg:text-medium text-base font-normal text-primary text-gray-200">
                  I&apos;m currently working fulltime Software Enginner at a
                  company in Yogyakarta{" "}
                  <span className="font-medium hover:underline">
                    (CIKAJOGJA)
                  </span>
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
                  Software Engineering graduated who is interested in the world
                  of technology, especially in the world of programming, and a
                  sofware engineer who is quite experienced in creating,
                  developing web-based and mobile-based applications.
                </p>
                <p className="mt-8">
                  I created a{" "}
                  <Link href="/uses">
                    <a className="text-white hover:underline font-semibold">
                      /uses
                    </a>
                  </Link>{" "}
                  page that lists the applications I normally use.
                </p>
                <br />
              </div>
            </div>
          </Container>
        </PageContent>
      </MainWrapped>
    </React.Fragment>
  );
}
