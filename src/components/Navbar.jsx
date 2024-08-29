import { useState,useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Change this value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`z-10 backdrop:blur-lg border-b-2 border-gray-200 p-6 flex items-center justify-between ${isScrolled&&'bg-green-600 !text-white drop-shadow-2xl'} sticky top-0 transition`}>
      <h1 className={`${isScrolled?'text-white':'text-green-500'} font-bold text-xl cursor-pointer tracking-wider`}>
        jobquest
      </h1>
      <div>
        <ul className="flex gap-12  items-center font-bold">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Jobs</li>
          <li className="cursor-pointer">FAQ</li>
        </ul>
      </div>

      <div className="flex gap-4 items-center">
        <a href="/login">
          Login
        </a>
        <a
          href="/signup"
          className="px-4 py-2 rounded-full bg-black text-white"
        >
          <button>Sign up</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
