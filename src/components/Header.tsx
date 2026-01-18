import { Link } from "react-router";

function Header() {
  return (
    <header className="mx-auto max-w-7xl px-12 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl text-white font-bold">
          Husni <span className="text-red-500">Rama</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm tracking-widest text-white">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>

          {/* Hire Me Button */}
          <a
            href="#"
            className="rounded-full border-2 border-red-500 px-5 py-2 font-semibold hover:bg-red-500 transition"
          >
            HIRE ME
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
