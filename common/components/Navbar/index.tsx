import { Logo } from "@/components/Icons";
import Button from "@/components/Button";
import LinkWithUnderline from "@/components/LinkWithUnderLine";
import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      label: "About",
      href: "/",
    },
    {
      label: "Pricing",
      href: "/",
    },
    {
      label: "Contact",
      href: "/",
    },
    {
      label: "Help",
      href: "/",
    },
  ];
  return (
    <nav className="wrapper flex justify-between gap-4 py-4">
      <Link href={"/"}>
        <Logo />
      </Link>

      <ul className="flex items-center gap-9 font-semibold text-slate-400">
        {links.map((link, index) => (
          <li key={index} className="hidden md:block">
            <LinkWithUnderline href={link.href}>{link.label}</LinkWithUnderline>
          </li>
        ))}
        <li className="ml-6">
          <Button intent={"outline"}>Get in touch</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
