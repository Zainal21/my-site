import Container from "@/components/ui/container";
import MainWrapped from "@/components/base/main-wrapped";
import PageTitle from "@/components/ui/page-title";
import PageContent from "@/components/base/page-content";
import MetaTag from "@/components/base/meta-tag";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import Link from "next/link";
import { Fragment } from "react";

export default function About() {
  return (
    <Fragment>
      <MetaTag title="About | Muhamadzain.dev" />
      <DefaultSeo {...SEO} />
      <MainWrapped>
        <PageContent>
          <Container className="mx-auto">
            <div className="py-10 lg:py-10">
              <PageTitle title="/About Me 😃" />
              <div className="pr-2 pt-3">
                <span className="font-body lg:text-xl text-lg font-light text-primary dark:text-white">
                  This page is more about me
                </span>
              </div>
              <div className="pt-16 lg:pt-20">
                <p className="font-body lg:text-lg text-medium font-normal text-primary text-gray-200">
                  I&apos;m currently working fulltime Software Enginner at a
                  company in Yogyakarta. Born in{" "}
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
                    VHS 2 Karanganyar{" "}
                  </a>
                  Software Engineering graduated who is interested in the world
                  of technology, especially in the world of programming, and a
                  sofware engineer who is quite experienced in creating,
                  developing web-based and mobile-based applications. Recently,
                  the focus has been on coding using Javascript with JAMStack
                  (Javascript, API, Markup) and Some Web Development Technology
                  such as NodeJS, Laravel, Typescript, React, ExpressJS etc.
                </p>
                <p className="mt-8 lg:text-lg text-mediums">
                  I created a{" "}
                  <Link href="/uses">
                    <a className="text-white  hover:underline font-semibold">
                      /uses
                    </a>
                  </Link>{" "}
                  page that lists the applications I normally use.
                </p>
                <div className="pt-10 lg:pt-20">
                  <h3 className="pb-8 font-body lg:text-2xl text-lg font-semibold text-primary dark:text-white">
                    Work Experience 👨‍💻
                  </h3>
                  <ul className="list-disc pl-10">
                    <li className="font-body lg:text-lg text-base font-light text-primary dark:text-white">
                      Fulltime Software Engineer at{" "}
                      <a
                        href="https://cikajogja.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-white hover:underline"
                      >
                        Cikajogja.com
                      </a>{" "}
                      (Juny 2021 - Present)
                    </li>
                    <li className="pt-5 font-body lg:text-lg text-basefont-light text-primary dark:text-white">
                      Web Developer Intern at{" "}
                      <a
                        href="https://kadangkoding.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-white hover:underline"
                      >
                        CV. Kadang Koding Indonesia
                      </a>{" "}
                      (January 2020 - April 2020)
                    </li>
                  </ul>
                </div>
                <div className="pt-16 lg:pt-20">
                  <h3 className="pb-8 font-body lg:text-2xl text-lg font-semibold text-primary dark:text-white">
                    Community Experience 💻
                  </h3>
                  <ul className="list-disc pl-10">
                    <li className="font-body lg:text-lg text-base font-light text-primary dark:text-white">
                      Co-organizer of{" "}
                      <a
                        href="https://rplskandakra.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-white hover:underline"
                      >
                        RPL Skandakra Dev Community{" "}
                      </a>
                      (Internal Community in my School)
                    </li>
                  </ul>
                </div>
                <p className="mt-10">
                  Read more about me or my experience on{" "}
                  <a
                    href="https://www.linkedin.com/in/muhammad-zainal-arifin"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-white hover:underline"
                  >
                    LinkedIn
                  </a>{" "}
                </p>
                <br />
              </div>
            </div>
          </Container>
        </PageContent>
      </MainWrapped>
    </Fragment>
  );
}
