import MainWrapped from "@/components/base/main-wrapped";
import Container from "@/components/ui/container";
import PageTitle from "@/components/ui/page-title";
import PageContent from "@/components/base/page-content";
import MetaTag from "@/components/base/meta-tag";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import LinktreeCard from "@/components/base/contacts/linktree-card";
import linktree from "../data/linktree.json";
import { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <MetaTag title="Contact | Muhamadzain.dev" />
      <DefaultSeo {...SEO} />
      <MainWrapped>
        <PageContent>
          <Container className="mx-auto">
            <div className="py-10 lg:py-10">
              <PageTitle title="/Linktree ☎️" />
              <div className="pr-2 pt-3">
                <span className="font-body lg:text-xl text-medium font-light text-primary text-white">
                  Talk about business ? can contact me on various platforms to
                  discuss
                </span>
              </div>
              <div className="pt-16 lg:pt-20">
                <div className="container mx-auto">
                  {linktree.map((item, index) => (
                    <LinktreeCard
                      key={index}
                      name={item.name}
                      link={item.redirect}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </PageContent>
      </MainWrapped>
    </Fragment>
  );
}
