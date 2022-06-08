import MainWrapped from "@/components/base/main-wrapped";
import Container from "@/components/ui/container";
import PageTitle from "@/components/ui/page-title";
import PageContent from "@/components/base/page-content";
import MetaTag from "@/components/base/meta-tag";
export default function Contact() {
  return (
    <Container className="mx-auto">
      <MetaTag title="Contact | Muhamadzain.dev" />
      <MainWrapped>
        <PageContent>
          <Container className="mx-auto">
            <div className="py-10 lg:py-10">
              <PageTitle title="/Contact Me" />
              <div className="pr-2 pt-3">
                <span className="font-body text-xl font-light text-primary dark:text-white">
                  Talk about business ? can contact me on various platforms to
                  discuss
                </span>
              </div>
              <div className="pt-16 lg:pt-20">
                <h3 className="pb-8 font-body text-2xl font-semibold text-primary dark:text-white">
                  Coming Soon
                </h3>
                <ul className="list-disc pl-10"></ul>
              </div>
            </div>
          </Container>
        </PageContent>
      </MainWrapped>
    </Container>
  );
}
