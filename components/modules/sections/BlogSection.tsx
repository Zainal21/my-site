import { Heading, Text } from "@/components/design-system";
import { Post } from "@/types/posts";
import React from "react";
import { BlogCard } from "@/components/modules";

const BlogSection: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <section className="max-w-3xl p-4 mx-auto -mt-12 md:p-0 md:-mt-0 h-screen">
      <Heading className="mt-5">Blog ✏️</Heading>
      <div className="mt-5 prose max-w-none dark:text-white text-[#10161a]">
        <Text>
          Tweets in the form of my stories, experiences and knowledge that I can
          share.
        </Text>
        <div className="space-y-8">
          {posts?.map((post, index) => (
            <BlogCard post={post} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
