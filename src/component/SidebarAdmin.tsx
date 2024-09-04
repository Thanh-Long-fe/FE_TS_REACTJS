import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Logo from '../public/img/logo.svg';

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex flex-col bg-gray-800 text-white w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-64">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <NavLink to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-32 h-auto" />
        </NavLink>
        <button aria-controls="sidebar" className="lg:hidden p-2 rounded-md hover:bg-gray-700">
          <svg className="w-6 h-6 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18">
            <path d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Sidebar Menu */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="mt-2">
          {/* Dashboard Menu Item */}
          <li>
            <NavLink
              to="/dashboard"
              className={`flex items-center gap-3 p-4 rounded-md text-gray-200 hover:bg-gray-700 transition-colors ${pathname.includes('dashboard') ? 'bg-gray-700' : ''}`}
            >
              <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3 13h18v2H3zm0-4h18v2H3zm0-4h18v2H3zm0 12h18v2H3z" />
              </svg>
              Dashboard
            </NavLink>
          </li>

          {/* Product Menu Item */}
          <li>
            <NavLink
              to="/product"
              className={`flex items-center gap-3 p-4 rounded-md text-gray-200 hover:bg-gray-700 transition-colors ${pathname.includes('product') ? 'bg-gray-700' : ''}`}
            >
              <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21 20H3V6h18v14zm0-16H3V4h18v2z" />
              </svg>
              Product
            </NavLink>
          </li>

          {/* Size Menu Item */}
          <li>
            <NavLink
              to="/size"
              className={`flex items-center gap-3 p-4 rounded-md text-gray-200 hover:bg-gray-700 transition-colors ${pathname.includes('size') ? 'bg-gray-700' : ''}`}
            >
              <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 5v14M5 12h14" />
              </svg>
              Size
            </NavLink>
          </li>

          {/* Order Menu Item */}
          <li>
            <NavLink
              to="/order"
              className={`flex items-center gap-3 p-4 rounded-md text-gray-200 hover:bg-gray-700 transition-colors ${pathname.includes('order') ? 'bg-gray-700' : ''}`}
            >
              <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 6H4v2h16V6zm0 4H4v2h16v-2zm0 4H4v2h16v-2zM4 14h16v2H4v-2z" />
              </svg>
              Order
            </NavLink>
          </li>

          {/* Voucher Menu Item */}
          <li>
            <NavLink
              to="/voucher"
              className={`flex items-center gap-3 p-4 rounded-md text-gray-200 hover:bg-gray-700 transition-colors ${pathname.includes('voucher') ? 'bg-gray-700' : ''}`}
            >
              <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 4H4v16h16V4zm-2 14H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V8h12v2z" />
              </svg>
              Voucher
            </NavLink>
          </li>

          {/* Category Menu Item */}
          <li>
            <NavLink
              to="/category"
              className={`flex items-center gap-3 p-4 rounded-md text-gray-200 hover:bg-gray-700 transition-colors ${pathname.includes('category') ? 'bg-gray-700' : ''}`}
            >
              <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6 21h12v-2H6v2zm0-4h12v-2H6v2zm0-4h12v-2H6v2zm0-4h12V7H6v2z" />
              </svg>
              Category
            </NavLink>
          </li>

          {/* User Menu Item */}
          <li>
            <NavLink
              to="/user"
              className={`flex items-center gap-3 p-4 rounded-md text-gray-200 hover:bg-gray-700 transition-colors ${pathname.includes('user') ? 'bg-gray-700' : ''}`}
            >
              <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z" />
              </svg>
              User
            </NavLink>
          </li>

          {/* Payment Menu Item */}
          <li>
            <NavLink
              to="/payment"
              className={`flex items-center gap-3 p-4 rounded-md text-gray-200 hover:bg-gray-700 transition-colors ${pathname.includes('payment') ? 'bg-gray-700' : ''}`}
            >
              <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" />
              </svg>
              Payment
            </NavLink>
          </li>

          {/* Reviews Menu Item */}
          <li>
            <NavLink
              to="/reviews"
              className={`flex items-center gap-3 p-4 rounded-md text-gray-200 hover:bg-gray-700 transition-colors ${pathname.includes('reviews') ? 'bg-gray-700' : ''}`}
            >
              <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M2 21h20v-2H2v2zm0-4h20v-2H2v2zm0-4h20v-2H2v2zm0-4h20V7H2v2z" />
              </svg>
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
