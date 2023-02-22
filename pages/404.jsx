import React from "react";

import MainWrapped from "@/components/base/main-wrapped";
import Container from "@/components/ui/container";
import PageTitle from "@/components/ui/page-title";
import PageContent from "@/components/base/page-content";
import MetaTag from "@/components/base/meta-tag";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import { Fragment } from "react";

export default function Custom404() {
  return (
    <Fragment>
      <MetaTag title="404 | Muhamadzain.dev" />
      <DefaultSeo {...SEO} />
      <MainWrapped>
        <PageContent>
          <Container className="mx-auto">
            <div className="py-10 lg:py-10">
              <PageTitle title="/404 ❌" />
              <div className="pr-2 pt-3">
                <span className="font-body lg:text-xl text-medium font-light text-primary text-white">
                  404 - Page Not Found
                </span>
              </div>
            </div>
          </Container>
        </PageContent>
      </MainWrapped>
    </Fragment>
  );
}
