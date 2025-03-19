import { useState, useEffect } from "react";
import {
  IconCircleHelp,
  IconCross,
  IconFileUser,
  IconHamburger,
  IconHome,
  IconPaperPlane,
} from "@components/Icons";

const Navbar = ({
  bgNav,
  currentPath,
}: {
  bgNav: any;
  currentPath: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  type MenuItem = {
    page: string;
    path: string;
    icon: any;
  };

  const listMenu: MenuItem[] = [
    {
      page: "Home",
      path: "/",
      icon: <IconHome />,
    },
    {
      page: "Trip",
      path: "/trip",
      icon: <IconPaperPlane />,
    },
    {
      page: "About",
      path: "/about",
      icon: <IconFileUser />,
    },
    {
      page: "FAQ",
      path: "/faq",
      icon: <IconCircleHelp />,
    },
  ];

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const handleMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    isItemActive: boolean
  ) => {
    if (isItemActive) {
      e.preventDefault();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "sm:bg-deep-blue bg-white shadow-md"
          : isMenuOpen
          ? "bg-white"
          : `${bgNav ? "bg-transparent" : "bg-deep-blue"} sm:pt-6 pt-0`
      }`}
    >
      <div className="max-w-7xl mx-auto sm:px-12 px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center gap-x-2">
            <img
              src="/logo.png"
              alt="logo-icon"
              height={32}
              width={32}
              className={`h-10 w-10 rounded-full p-0.5 transition-all duration-300  ${
                isScrolled ? "sm:bg-white" : ""
              }`}
            />
            <span
              className={`text-xl font-bold hover:text-soft-turquoise hover:cursor-pointer after:content-[''] after:block after:border-b-2 after:transition-all after:duration-300 after:scale-x-0 after:origin-center hover:after:scale-x-100 ${
                isScrolled
                  ? "sm:text-white text-deep-blue"
                  : isMenuOpen
                  ? "text-deep-blue"
                  : "text-white"
              }`}
            >
              Badak Gunung
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-auto flex items-center space-x-4 uppercase">
              {listMenu.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  // onClick={(e) => handleMenuClick(e, isActive(item.path))}
                  className={`px-3 py-2 rounded-md font-medium inline-flex items-center gap-x-1 ${
                    isActive(item.path)
                      ? "text-soft-turquoise hover:cursor-not-allowed"
                      : "hover:text-soft-turquoise text-white"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span
                    className={`after:content-[''] after:block after:border-b-2 after:transition-all after:duration-300 ${
                      isActive(item.path)
                        ? "after:scale-x-100"
                        : "after:scale-x-0 after:origin-center hover:after:scale-x-100"
                    }`}
                  >
                    {item.page}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled
                  ? "text-deep-blue"
                  : isMenuOpen
                  ? "text-deep-blue"
                  : "text-white"
              }`}
            >
              {isMenuOpen ? <IconCross /> : <IconHamburger />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col">
              {listMenu.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  // onClick={(e) => handleMenuClick(e, isActive(item.path))}
                  className={`px-3 py-2 rounded-md text-base font-semibold  uppercase inline-flex items-center gap-x-1 bg-deep-blue ${
                    isActive(item.path)
                      ? "bg-soft-turquoise text-black hover:cursor-not-allowed"
                      : "text-white"
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.page}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
