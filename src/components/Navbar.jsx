const Navbar = () => {
  return (
    <nav className="border-b-2 border-gray-200 p-6 flex items-center justify-between">
      <h1 className="text-green-500 font-bold text-xl cursor-pointer tracking-wider">
        jobquest
      </h1>
      <div>
        <ul className="flex gap-12 text-gray-400 items-center font-bold">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Jobs</li>
          <li className="cursor-pointer">FAQ</li>
        </ul>
      </div>

      <div className="flex gap-4 items-center">
        <a href="/login" className="text-gray-400">
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
