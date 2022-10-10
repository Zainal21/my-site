import cn from "classnames";

export default function Container({ className, children }) {
  return <div className={cn(`container`, className)}>{children}</div>;
}
