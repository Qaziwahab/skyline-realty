import React from 'react';
import { NavLink } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './IconComponents';

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-extrabold">
              Skyline<span className="text-primary">Realty</span>
            </h2>
            <p className="mt-2 text-gray-400 text-sm">Your trusted partner in finding the perfect home.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><NavLink to="/" className="text-base text-gray-400 hover:text-white">Home</NavLink></li>
              <li><NavLink to="/properties" className="text-base text-gray-400 hover:text-white">Properties</NavLink></li>
              <li><NavLink to="/about" className="text-base text-gray-400 hover:text-white">About</NavLink></li>
              <li><NavLink to="/contact" className="text-base text-gray-400 hover:text-white">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-primary">&#x1F4CD;</span>
                <span className="ml-3">123 Market St, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <span className="flex-shrink-0 h-6 w-6 text-primary">&#x2709;</span>
                <span className="ml-3">contact@skylinerealty.com</span>
              </li>
              <li className="flex items-center">
                <span className="flex-shrink-0 h-6 w-6 text-primary">&#x1F4DE;</span>
                <span className="ml-3">+1 (234) 567-890</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Follow Us</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Facebook</span><FacebookIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Instagram</span><InstagramIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><span className="sr-only">Twitter</span><TwitterIcon /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Skyline Realty. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">Built by wahab qazi with ♥️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;