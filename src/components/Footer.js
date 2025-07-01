import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mainFooter py-4">
      <div className="container text-center">
        <p className="poppins-semibold mb-2">WPChamp</p>
        <div className="d-flex justify-content-center gap-4 mb-2">
          <Link href="/">Home</Link>
          <Link href="https://github.com/wpchamp" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </div>
        <p className="small">&copy; {new Date().getFullYear()} WPChamp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
