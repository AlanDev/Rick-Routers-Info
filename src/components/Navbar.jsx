import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#a9d3e9] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 text-white text-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
            className="h-12 w-20"
            alt="RickAndMorty logo"
          />
          <span className="text-white text-3xl font-black">Rick And Morty</span>
        </Link>
        <ul className="flex space-x-4 ">
          <li>
            <Link to="/" className='hover:text-gray-200'>Home</Link>
          </li>
          <li>
            <Link to="/characters"className='hover:text-gray-200' >Characters</Link>
          </li>
          <li>
            <Link to="/locations"className='hover:text-gray-200'>Locations</Link>
          </li>
          <li>
            <Link to="/episodes"className='hover:text-gray-200'>Episodes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar