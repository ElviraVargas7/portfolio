const NavLinks = ({
  mobile,
  closeMenu,
}: {
  mobile?: boolean;
  closeMenu?: () => void;
}) => {
  return (
    <>
      {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          onClick={closeMenu}
          className={`dark:text-[#FFB8DB] hover:bg-[#dd73a8] hover:text-white px-3 py-2 ${
            mobile ? "w-full" : "rounded-md"
          }`}
        >
          {link}
        </a>
      ))}
      <a
        href="#"
        onClick={closeMenu}
        className={`text-gray-800 dark:text-[#FFB8DB] px-4 py-2 hover:bg-[#9b0b53] hover:text-[#FFB8DB] ${
          mobile ? "" : "bg-[#c7417b] rounded-md"
        }`}
      >
        Resume
      </a>
    </>
  );
};

export default NavLinks;
