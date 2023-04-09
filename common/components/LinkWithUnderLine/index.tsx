import Link, { type LinkProps } from "next/link";

export type Props = {
  children?: JSX.Element | string;
} & LinkProps;

const LinkWithUnderline = ({ children, ...props }: Props) => {
  return (
    <Link
      {...props}
      className={
        "relative outline-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[10%] after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 hover:after:scale-x-100 focus:after:scale-x-100 dark:after:bg-current"
      }
    >
      {children}
    </Link>
  );
};

export default LinkWithUnderline;
