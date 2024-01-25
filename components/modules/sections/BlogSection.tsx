import { Heading, LinkTarget, Text } from "@/components/design-system";
import { Post } from "@/types/posts";
import React from "react";
import { BlogCard } from "@/components/modules";

const BlogSection: React.FC<{ posts: Post[]; isLimited?: boolean }> = ({
  posts,
  isLimited = false,
}) => {
  const limitedPosts = isLimited ? posts.slice(0, 5) : posts;

  return (
    <section className="max-w-3xl p-4 mx-auto -mt-12 md:p-0 md:-mt-0 h-screen">
      <Heading className="mt-5">
        {isLimited ? "Latest Blog ✏️" : "Blog ✏️"}
      </Heading>
      <div className="mt-5 prose max-w-none dark:text-white text-[#10161a]">
        <Text>
          Tweets in the form of my stories, experiences and knowledge that I can
          share.{" "}
          {isLimited && <LinkTarget href="/blog">See More Blog</LinkTarget>}
          {""}
        </Text>

        <div className="space-y-8">
          {limitedPosts?.map((post, index) => (
            <BlogCard post={post} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
