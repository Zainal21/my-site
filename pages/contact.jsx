import MainWrapped from "@/components/base/main-wrapped";
import Container from "@/components/ui/container";
import PageTitle from "@/components/ui/page-title";
import PageContent from "@/components/base/page-content";
import MetaTag from "@/components/base/meta-tag";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import LinktreeCard from "@/components/base/contacts/linktree-card";
import linktree from "../data/linktree.json";
export default function Contact() {
  return (
    <Container className="mx-auto">
      <MetaTag title="Contact | Muhamadzain.dev" />
      <DefaultSeo {...SEO} />
      <MainWrapped>
        <PageContent>
          <Container className="mx-auto">
            <div className="py-10 lg:py-10">
              <PageTitle title="/Contact Me" />
              <div className="pr-2 pt-3">
                <span className="font-body text-xl font-light text-primary text-white">
                  Talk about business ? can contact me on various platforms to
                  discuss
                </span>
              </div>
              <div className="pt-16 lg:pt-20">
                <div className="container mx-auto">
                  {linktree.map((item, index) => (
                    <LinktreeCard
                      key={index}
                      classname={item.color}
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
    </Container>
  );
}
