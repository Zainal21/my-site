import { Heading, Text } from "@/components/design-system";
import { Post } from "@/types/posts";
import React from "react";
import { BlogCard } from "..";

const BlogSection: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <section className="max-w-3xl p-4 mx-auto -mt-12 md:p-0 md:-mt-0 h-full">
      <Heading className="mt-5">Blog 📖</Heading>
      <div className="mt-5 prose max-w-none dark:text-white text-black">
        <Text>This page contains a current my notes.</Text>
        <div className="space-y-8">
          {posts?.map((post) => (
            <BlogCard post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;