const NavBar = () => {
  return (
    <nav className="relative">
      <div className="fixed top-0 right-0 left-0 z-50">
        <div className="grid grid-cols-1 md:grid-cols-3 backdrop-blur-md bg-white/75 dark:bg-black/75 border-b border-gray-200 dark:border-gray-800 px-16 py-2">
          <p className="col-span-1 text-[#c7417b] dark:text-[#c7417b] font-bold text-4xl">
            EVB
          </p>

          <div className="col-span-2 flex flex-row gap-3 justify-evenly items-center text-gray-800 dark:text-gray-200 font-medium">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a
              href="#"
              className="bg-[#c7417b] text-white px-4 py-2 rounded-md"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
