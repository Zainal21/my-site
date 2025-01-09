import { Heading, LinkTarget, Text } from "@/components/design-system";
import { Post } from "@/types/posts";
import React from "react";
import { BlogCard } from "@/components/modules";

interface BlogSectionProps {
  posts: Post[];
  isLimited?: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({
  posts,
  isLimited = false,
}) => {
  const limitedPosts = isLimited ? posts.slice(0, 5) : posts;

  return (
    <section className="flex flex-col mb-12 mt-1">
      <Heading className="mt-5">
        {isLimited ? "Latest Blog ✏️" : "Blog ✏️"}
      </Heading>
      <div className="mt-5 prosedark:text-gray-100 text-[#10161a]">
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
