import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(
    window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

function Header() {
  const [marginBottomClass, setMarginBottomClass] = useState("mb-12");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setMarginBottomClass("mb-28");
    } else if (isMenuOpen) {
      setMarginBottomClass("mb-12");
    }
  };

  const isMediumOrLarger = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isMediumOrLarger) {
      setIsMenuOpen(false);
      setMarginBottomClass("mb-12");
    }
  }, [isMediumOrLarger]);

  return (
    <header
      className={`${marginBottomClass} mx-4 mt-4 md:mx-48 md:mt-16 flex flex-row justify-between items-center relative`}
    >
      <a
        href="/"
        className="font-pPins text-xl font-medium tracking-tighter nav-item headline"
      >
        Adeeb Khan
      </a>
      {/* Toggle button visible on smaller screens */}
      <button className="md:hidden block p-2" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {!isMenuOpen && (
        <div className="hidden md:flex flex flex-col md:flex-row gap-4 font-pPins text-gray-500">
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center nav-item font-medium text-black"
                : "flex items-center nav-item"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/projects"}
            className={({ isActive }) =>
              isActive
                ? "flex items-center nav-item font-medium text-black"
                : "flex items-center nav-item"
            }
          >
            Projects
          </NavLink>
          <a
            href="https://github.com/AdeebKhan25"
            className="flex items-center nav-item"
            target="_blank"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      )}
      <CSSTransition
        in={isMenuOpen}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
      >
        <div className="absolute top-full right-0 left-0 mt-2 font-pPins tex-gray-500">
          <div className="flex flex-col gap-2 p-2">
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center nav-item font-medium text-black"
                  : "flex items-center nav-item"
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/projects"}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center nav-item font-medium text-black"
                  : "flex items-center nav-item"
              }
            >
              Projects
            </NavLink>
            <a
              href="https://github.com/AdeebKhan25"
              className="flex items-center nav-item"
              target="_blank"
            >
              {" "}
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </CSSTransition>
    </header>
  );
}

export default Header;
