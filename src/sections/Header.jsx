import {Link} from "react-scroll";

const NavLink = ({name}) => (
  <Link className="uppercase transition-colors duration-500 cursor-pointer max-lg:my-4 max-lg:h5 text-p4 hover:text-p1 base-bold">
    {name}
  </Link>
);

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full py-10">
        <div className="container flex items-center h-14 max-lg:px-5">
          <a href="/" className="flex-1 cursor-pointer lg:hidden z-2">
            <img src="/images/xora.svg" height={55} width={115} alt="logo" />
          </a>
          <div className="w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2">
            <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden max-md:px-4 sidebar-before">
              <nav className="max-lg:relative max-lg:mx-auto max-lg:z-2">
                <ul className="flex max-lg:block max-lg:px-12">
                  <li className="nav-li">
                    <NavLink name="features"></NavLink>
                    <div className="dot"></div>
                    <NavLink name="pricing"></NavLink>
                  </li>

                  <li className="nav-logo">
                    <Link>
                      <img
                        src="/images/xora.svg"
                        width={160}
                        height={55}
                        alt="Logo"
                      />
                    </Link>
                  </li>

                  <li className="nav-li">
                    <NavLink name="faq"></NavLink>
                    <div className="dot"></div>
                    <NavLink name="download"></NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
