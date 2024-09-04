import React from 'react';

interface HeaderAdminProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const HeaderAdmin: React.FC<HeaderAdminProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-50 flex w-full bg-white shadow-md dark:bg-gray-800">
      <div className="flex flex-grow items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <div className="flex items-center gap-2 lg:hidden">
          {/* Hamburger Toggle BTN */}
          <button
            aria-controls="sidebar"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="relative z-40 p-2 text-gray-600 dark:text-gray-300"
          >
            {sidebarOpen ? (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          {/* Hamburger Toggle BTN */}
        </div>

        <div className="hidden sm:block">
          <form action="https://formbold.com/s/unique_form_id" method="POST" className="relative">
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white pl-10 pr-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
            <button type="submit" className="absolute left-2 top-1/2 -translate-y-1/2">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm8.5 10.5L17 16m-3 0l-2.5-2.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
