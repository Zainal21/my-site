import { Animate, SeoMeta } from "@/components/design-system/utils";
import { ActivitySection } from "@/components/modules";
import { HomePageLayout } from "@/layouts/HomePageLayout";

export default function ServerErrorPage(): React.JSX.Element {
  return (
    <>
      <SeoMeta
        description={"Activity - Muhamad Zainal Arifin"}
        title={"Muhamad Zain - Software Engineer"}
      />
      <HomePageLayout>
        <Animate>
          <ActivitySection />
        </Animate>
      </HomePageLayout>
    </>
  );
}
