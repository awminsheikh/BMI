import NAVIGATION from "./navigation";
const Nav = () => {
  return (
    <div
      className="w-full h-16 fixed top-0 left-0 right-0 shadow-xl z-10
    flex-between px-6 text-white font-semibold animate-fadeIn"
    >
      <div className="cursor-pointer hover:text-blue-300 transition-colors">
        Alisan KhodaYarlou
      </div>
      <nav>
        <ul className="flex space-x-6">
          {NAVIGATION.map((nav) => (
            <li
              key={nav.id}
              className="hover:text-blue-300 cursor-pointer transition-colors hoverUnderline"
            >
              <a href={nav.to}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
