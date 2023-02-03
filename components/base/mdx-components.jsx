import styles from "@/styles/markdwwn-module.module.css";
import Link from "next/link";

const MDXComponents = {
  p: (props) => <p {...props} />,
  a: (props) => <Link {...props} />,
  h1: (props) => <h1 {...props} className={styles.postTitle} />,
};

export default MDXComponents;
