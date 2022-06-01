import Head from "next/head";
import Container from "@/components/atoms/container";
import MainWrapped from "@/components/base/main-wrapped";

export default function About() {
  return (
    <Container className="mx-auto">
      <Head>
        <title>About | Coming Soon</title>
        <meta name="description" content="Coming Soon My Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainWrapped>
        <div className="content">
          <Container className="mx-auto">
            <div className="py-10 lg:py-10">
              <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
                /About Me
              </h1>
              <div className="pr-2 pt-3">
                <span className="font-body text-xl font-light text-primary dark:text-white">
                  This page lists my usual applications.
                </span>
              </div>

              <div className="pt-16 lg:pt-20">
                <h3 className="pb-8 font-body text-2xl font-semibold text-primary dark:text-white">
                  Device
                </h3>
                <ul className="list-disc pl-10">
                  <li className="font-body text-lg font-light text-primary dark:text-white">
                    <span className="font-medium">
                      Lenovo Thinkpad T460s + Ubuntu OS
                    </span>{" "}
                    I with specifications (i5/16GB/256gb) for everything (work +
                    personal).
                  </li>
                  <li className="pt-5 font-body text-lg font-light text-primary dark:text-white">
                    <span className="font-medium">Smartphone : </span>
                    <span className="text-green  hover:text-secondary dark:text-green-light dark:hover:text-secondary">
                      Xiaomi note 9
                    </span>
                    , for daily driver.
                  </li>
                </ul>
              </div>
              <div className="pt-16 lg:pt-20">
                <h3 className="pb-8 font-body text-2xl font-semibold text-primary dark:text-white">
                  Development Tools
                </h3>
                <ul className="list-disc pl-10">
                  <li className="font-body text-lg font-light text-primary dark:text-white">
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
                      >
                        DBeaver
                      </a>{" "}
                      for my database management apps when using PostgreSQL, and{" "}
                      <a
                        href="https://www.phpmyadmin.net/"
                        className="font-bold hover:underline"
                        target="_blank"
                      >
                        PhpMyAdmin
                      </a>{" "}
                      when i using MySQL
                    </span>
                  </li>
                  <li className="pt-5 font-body text-lg font-light text-primary dark:text-white">
                    <span className="font-medium">Terminal : </span>
                    <span className="text-green  hover:text-secondary dark:text-green-light dark:hover:text-secondary">
                      ussually i{" "}
                      <a
                        href="https://ohmyz.sh/"
                        target="_blank"
                        className="font-bold hover:underline"
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
        </div>
      </MainWrapped>
    </Container>
  );
}
