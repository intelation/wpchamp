import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`mainHeader ${isSticky ? 'sticky' : ''}`}>
      <div className="container-fluid d-flex align-items-center justify-content-between py-3">
        <Link className="d-flex align-items-center gap-2" href="/">
          
          <span className="poppins-semibold fs-5">WPChamp</span>
        </Link>
        <nav className="d-flex gap-4">
          <Link href="/">Home</Link>
          <Link href="https://github.com/wpchamp" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
