import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import logo from '../assets/logo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const togglePagesDropdown = () => setIsPagesDropdownOpen(!isPagesDropdownOpen);

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Listing', href: '/listing' },
  { name: 'Pricing', href: '/pricing' },
  { 
    name: 'Pages', 
    href: '#',
    hasDropdown: true,
    dropdownItems: [
      { name: 'About Us', href: '/about' },
      { name: 'Terms and Conditions', href: '/terms' }
    ]
  },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQs', href: '/faq' },
  { name: 'Contact', href: '/contact' }
];


  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
             <img src={logo} alt="logo"/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={togglePagesDropdown}
                      className="flex items-center text-gray-700 hover:text-[#ff9800] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isPagesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isPagesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-50">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                              location.pathname === dropdownItem.href
                                ? 'bg-[#ff9800]-50 text-[#ff9800]-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-[#ff9800] bg-[#ff9800]-50'
                        : 'text-gray-700 hover:text-orange-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
  <Link
    to="/login"
    className="bg-[#ff9800] hover:bg-orange-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 flex items-center"
  >
    <User className="h-4 w-4 mr-2" />
    Login
  </Link>
</div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={togglePagesDropdown}
                      className="flex items-center w-full text-gray-700 hover:text-[#ff9800] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isPagesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isPagesDropdownOpen && (
                      <div className="pl-4">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                              location.pathname === dropdownItem.href
                                ? 'text-[#ff9800] bg-[#ff9800]-50'
                                : 'text-gray-600 hover:text-orange-600 hover:bg-gray-50'
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-[#ff9800] bg-[#ff9800]-50'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
<div className="pt-4 pb-3 border-t border-gray-100">
  <Link
    to="/login"
    className="bg-[#ff9800] hover:bg-orange-700 text-white w-full px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center"
  >
    <User className="h-4 w-4 mr-2" />
    Login
  </Link>
</div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;