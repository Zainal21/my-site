import React from "react";
import Container from "@/components/ui/container";
import PageTitle from "@/components/ui/page-title";
import MainWrapped from "@/components/base/main-wrapped";
import PageContent from "@/components/base/page-content";
import MetaTag from "@/components/base/meta-tag";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";

export default function uses() {
  return (
    <React.Fragment>
      <MetaTag title="Uses | Muhamadzain.dev" />
      <DefaultSeo {...SEO} />
      <MainWrapped>
        <PageContent>
          <Container className="mx-auto">
            <div className="py-8 lg:py-10 flex flex-col">
              <PageTitle title="/Uses 💻" />
              <div className="pr-2 pt-3">
                <span className="font-body lg:text-xl text-medium font-light text-primary dark:text-white">
                  This page lists my usual applications.
                </span>
              </div>
              <div className="pt-16 lg:pt-20">
                <h3 className="pb-8 font-body lg:text-2xl text-lg font-semibold text-primary dark:text-white">
                  Device
                </h3>
                <ul className="list-disc pl-10">
                  <li className="font-body lg:text-lg text-base font-light text-primary dark:text-white">
                    <span className="font-medium">
                      Lenovo Thinkpad T480s + Ubuntu OS
                    </span>{" "}
                    I with specifications (i5/16GB/256gb) for everything (work +
                    personal).
                  </li>
                  <li className="pt-5 font-body lg:text-lg text-basefont-light text-primary dark:text-white">
                    <span className="font-medium">Smartphone : </span>
                    <span className="text-green  hover:text-secondary dark:text-green-light dark:hover:text-secondary">
                      Xiaomi note 9
                    </span>
                    , for daily driver.
                  </li>
                </ul>
              </div>
              <div className="pt-16 lg:pt-20">
                <h3 className="pb-8 font-body lg:text-2xl  text-lg font-semibold text-primary dark:text-white">
                  Development Tools
                </h3>
                <ul className="list-disc pl-10">
                  <li className="font-body lg:text-lg text-medium font-light text-primary dark:text-white">
                    <span className="font-medium">Visual Studio Code</span> with
                    Halcyon Theme and Operator Mono Font for my main code editor
                    for work or to learn new things.
                  </li>
                  <li className="pt-5 font-body text-lg font-light text-primary dark:text-white">
                    <span className="font-medium">Android Studio : </span>
                    <span className="text-green  hover:text-secondary dark:text-green-light dark:hover:text-secondary">
                      code editor for android development, i ussually using
                      kotlin for my programming languange in android development
                    </span>
                  </li>
                  <li className="pt-5 font-body text-lg font-light text-primary dark:text-white">
                    <span className="font-medium">Database GUI : </span>
                    <span className="text-green  hover:text-secondary dark:text-green-light dark:hover:text-secondary">
                      ussually i use{" "}
                      <a
                        href="https://dbeaver.io/"
                        target="_blank"
                        className="font-bold hover:underline"
                        rel="noreferrer"
                      >
                        DBeaver
                      </a>{" "}
                      for my database management apps when using PostgreSQL, and{" "}
                      <a
                        href="https://www.phpmyadmin.net/"
                        className="font-bold hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        PhpMyAdmin
                      </a>{" "}
                      when i using MySQL
                    </span>
                  </li>
                  <li className="pt-5 font-body lg:text-lg text-medium font-light text-primary dark:text-white">
                    <span className="font-medium">Terminal : </span>
                    <span className="text-green  hover:text-secondary dark:text-green-light dark:hover:text-secondary">
                      ussually i{" "}
                      <a
                        href="https://ohmyz.sh/"
                        target="_blank"
                        className="font-bold hover:underline"
                        rel="noreferrer"
                      >
                        Oh My ZSH,
                      </a>
                      Oh My Zsh is a delightful, open source, community-driven
                      framework for managing your Zsh configuration
                    </span>
                  </li>
                  <li className="pt-5 font-body text-lg font-light text-primary dark:text-white">
                    <span className="font-medium">Others : </span>
                    <span className="text-green  hover:text-secondary dark:text-green-light dark:hover:text-secondary">
                      Notion, Discord, Insomnia for REST API Client, FileZilla,
                      Putty SSH client
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </PageContent>
      </MainWrapped>
    </React.Fragment>
  );
}
