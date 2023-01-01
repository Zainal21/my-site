// import { getPosts, getBlogFromSlug } from "@/lib/utils";

// export const getStaticPaths = async () => {
//   const blogs = await getPosts(1);
//   const paths = blogs.map((blog) => ({
//     params: { slug: blog.slug },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   console.log(params);
//   const blog = await getBlogFromSlug(params?.slug);
//   return { props: { blog } };
// };

const BlogItem = ({ blog }) => {
  //   const result = blog.frontmatter;
  //   console.log(result);
  return <div>tetst</div>;
};
export default BlogItem;
