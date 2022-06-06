import Head from "next/head";
import Container from "@/components/atoms/container";
import MainWrapped from "@/components/base/main-wrapped";
import PageTitle from "@/components/atoms/page-title";

export default function index() {
  const posts = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  return (
    <Container className="mx-auto ">
      <Head>
        <title>About | Coming Soon</title>
        <meta name="description" content="Coming Soon My Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainWrapped>
        <div className="content max-w-6xl">
          <div className="container mx-auto">
            <div className="py-10 lg:py-10 flex flex-col">
              <PageTitle title="/Blogs" />
              <div className="pt-3">
                <span className="font-body text-xl font-light text-primary dark:text-white">
                  tweets in the form of my stories, experiences and knowledge
                  that I can share
                </span>
              </div>
              <div className="pt-16 lg:pt-20 relative">
                <div className="pt-2 lg:pt-4">
                  <ul className="mx-4 space-y-4">
                    {posts.map((item, index) => (
                      <li
                        key={index}
                        className=" flex flex-col p-4 sm:hover:bg-gray-800 sm:rounded-xl bg-gray-800"
                      >
                        <h4 className="mb-2 text-xl py-4 font-bold line-clamp-3 text-white hover:underline">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Consequuntur, ab?
                        </h4>
                        <p className="mb-4 max-w-2xl text-neutral-400 line-clamp-3 text-base">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Officiis illo dolorem praesentium. Praesentium
                          nesciunt similique recusandae dolore quod aperiam
                          tenetur saepe minima delectus tempora, beatae autem
                          alias reiciendis maiores? Ex?
                        </p>
                        <div className="flex items-center mb-2 space-x-2"></div>
                        <span className="text-medium text-neutral-400">
                          May 16, 2022
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainWrapped>
    </Container>
  );
}
