import clsx from "clsx";
import {useState} from "react";
import {Link} from "react-scroll";

const NavLink = ({name}) => (
  <Link className="uppercase transition-colors duration-500 cursor-pointer max-lg:my-4 max-lg:h5 text-p4 hover:text-p1 base-bold">
    {name}
  </Link>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full py-10">
        <div className="container flex items-center h-14 max-lg:px-5">
          <a href="/" className="flex-1 cursor-pointer lg:hidden z-2">
            <img src="/images/xora.svg" height={55} width={115} alt="logo" />
          </a>
          <div
            className={clsx(
              "w-full max-lg:opacity-0 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 transform transition-all duration-500 ease-in-out",
              open ? "max-lg:opacity-100" : "max-lg:opacity-0"
            )}
          >
            <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
              <nav className="max-lg:relative max-lg:m-auto max-lg:z-2">
                <ul className="flex max-lg:block max-lg:px-12">
                  <li className="nav-li">
                    <NavLink name="features"></NavLink>
                    <div className="dot"></div>
                    <NavLink name="pricing"></NavLink>
                  </li>

                  <li className="nav-logo">
                    <Link
                      to="hero"
                      offset={-100}
                      spy
                      smooth
                      className={clsx(
                        "max-lg:hidden transition-transform duration-500 cursor-pointer"
                      )}
                    >
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
              <div className="absolute block lg:hidden top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                <img
                  src="/images/bg-outlines.svg"
                  width={960}
                  height={380}
                  className="relative z-2"
                  alt=""
                />
                <img
                  src="/images/bg-outlines-fill.png"
                  width={960}
                  height={380}
                  className="absolute inset-0 mix-blend-soft-light opacity-5"
                  alt=""
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center border-2 rounded-full lg:hidden size-10 z-2 border-s4/25"
          >
            <img
              src={`/images/${open ? "close" : "magic"}.svg`}
              alt="hamburger"
              className="object-contain size-1/2"
            />
          </button>
        </div>
      </header>
    </>
  );
}
