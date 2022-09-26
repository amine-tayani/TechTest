import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <h1>hello world</h1>
      <div className="nav-wrapper">
        <Link href="/" className="brand-logo">
          Logo
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
