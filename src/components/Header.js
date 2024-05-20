import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href={"/"}>Home</Link>
      <nav>
        <ul>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
