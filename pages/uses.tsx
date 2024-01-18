import { NextPage } from "next";
import { HomePageLayout } from "@/layouts/HomePageLayout";
import { Animate, SeoMeta } from "@/components/design-system/utils";
import { Heading, Text } from "@/components/design-system";

const Uses: NextPage = () => {
  return (
    <>
      <SeoMeta
        description={"Uses - Muhamad Zainal Arifin"}
        title={"Muhamad Zain - Software Engineer"}
      />
      <HomePageLayout>
        <Animate>
          <section className="max-w-3xl p-4 mx-auto -mt-12 md:p-0 md:-mt-0">
            <Heading className="mt-5">Uses 💻</Heading>
            <div className="mt-5 prose max-w-none dark:text-white text-black">
              <Text>
                This page contains a list of applications that I usually use.
              </Text>
              <h2 className="dark:text-white text-black">Development Tools</h2>
              <ul>
                <li className=" dark:text-white text-black">
                  <strong className="dark:text-white text-black">
                    Editor:{" "}
                  </strong>{" "}
                  <a
                    href="https://code.visualstudio.com/"
                    className="dark:text-white text-black"
                    target="_blank"
                  >
                    Visual Studio Code
                  </a>{" "}
                  With{" "}
                  <a
                    className="dark:text-white text-black"
                    href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl"
                    target="_blank"
                  >
                    Night Owl Theme
                  </a>
                  .
                </li>
                <li>
                  <strong className="dark:text-white text-black">Font: </strong>{" "}
                  <a
                    className="dark:text-white text-black"
                    href="https://github.com/keyding/Operator-Mono"
                    target="_blank"
                  >
                    Operator Mono
                  </a>{" "}
                </li>
                <li>
                  <strong className="dark:text-white text-black">
                    Git Client:{" "}
                  </strong>{" "}
                  <a
                    className="dark:text-white text-black"
                    href="https://www.sublimemerge.com/"
                    target="_blank"
                  >
                    Sublime Merge
                  </a>
                </li>
                <li>
                  <strong className="dark:text-white text-black">
                    Android Text Editor:{" "}
                  </strong>{" "}
                  <a
                    className="dark:text-white text-black"
                    href="https://developer.android.com/studio"
                    target="_blank"
                  >
                    Android Studio
                  </a>
                </li>
                <li>
                  <strong className="dark:text-white text-black">
                    Database Management:{" "}
                  </strong>{" "}
                  <a
                    className="dark:text-white text-black"
                    href="https://dbeaver.io/"
                    target="_blank"
                  >
                    DBeaver
                  </a>
                </li>
                <li>
                  <strong className="dark:text-white text-black">
                    REST API Testing:{" "}
                  </strong>{" "}
                  <a
                    className="dark:text-white text-black"
                    href="https://www.postman.com/"
                    target="_blank"
                  >
                    Postman
                  </a>
                </li>
                <li>
                  <strong className="dark:text-white text-black">
                    Container App Manage:{" "}
                  </strong>{" "}
                  <a
                    className="dark:text-white text-black"
                    href="https://www.docker.com/products/docker-desktop"
                    target="_blank"
                  >
                    Docker Desktop
                  </a>
                </li>
              </ul>
              <h2 className="dark:text-white text-dark">Workstation</h2>
              <ul>
                <li>
                  <a
                    className="dark:text-white text-black"
                    href="https://ibox.co.id/product/MBA-M1-IB-CON"
                    target="_blank"
                  >
                    <strong className="dark:text-white text-black">
                      Macbook Air 13" M1 2020 8/256
                    </strong>
                  </a>{" "}
                  Main Weapon for my work
                </li>
                <li>
                  <a
                    className="dark:text-white text-black"
                    href="https://apps.apple.com/us/app/be-focused-focus-timer/id973130201"
                    target="_blank"
                  >
                    <strong>Be Focused - Focus Timer</strong>
                  </a>{" "}
                </li>
                <li>
                  <a
                    className="dark:text-white text-black"
                    href="https://www.samsung.com/id/monitors/flat/sr35-24-inch-ips-fhd-1080p-freesync-ls24r350fzexxd/"
                    target="_blank"
                  >
                    <strong>Samsung LED S24R350</strong>
                  </a>{" "}
                  IPS Monitor from Samsung
                </li>
                <li>
                  <a
                    className="dark:text-white text-black"
                    href="https://rexus.id/produk/keyboard-rexus-daiva-d68sf-max/"
                    target="_blank"
                  >
                    <strong>Keyboard Rexus RX -D68SF</strong>
                  </a>{" "}
                  Mechanical Keyboard with blue switch
                </li>
                <li>
                  <a
                    className="dark:text-white text-black"
                    href="https://www.notion.so/"
                    target="_blank"
                  >
                    <strong>Notion</strong>
                  </a>{" "}
                  Journaling, Write Todo List, etc
                </li>
              </ul>
            </div>
          </section>
        </Animate>
      </HomePageLayout>
    </>
  );
};

export default Uses;
