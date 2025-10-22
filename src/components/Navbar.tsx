import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkBase =
    'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors';
  const linkInactive = 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800';
  const linkActive = 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white';

  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-base font-semibold text-gray-900 dark:text-gray-100">Demo</span>
            <div className="hidden md:flex md:items-center md:gap-1">
              <NavLink
                to="/"
                end
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
              >
                Tab One
              </NavLink>
              <NavLink
                to="/tab-2"
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
              >
                Tab Two
              </NavLink>
              <NavLink
                to="/tab-3"
                className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
              >
                Tab Three
              </NavLink>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex items-center rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <svg
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M3 5h14v2H3V5Zm0 4h14v2H3V9Zm0 4h14v2H3v-2Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="border-t border-gray-200 px-4 pb-3 pt-2 dark:border-gray-800 md:hidden">
          <div className="flex flex-col gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
              onClick={() => setOpen(false)}
            >
              Tab One
            </NavLink>
            <NavLink
              to="/tab-2"
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
              onClick={() => setOpen(false)}
            >
              Tab Two
            </NavLink>
            <NavLink
              to="/tab-3"
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
              onClick={() => setOpen(false)}
            >
              Tab Three
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

