"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";  
const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl">MyLogo</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#services" className="hover:text-gray-300">Services</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
            <a href="/dashboard">Dashboard</a>
          </div>
        


          <div className="flex flex-row gap-x-4">
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200" onClick={(e) => router.push("/signup")}>Signup</button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200" onClick={(e) => router.push("/login")}>
              Login
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-blue-500">
          <a href="#home" className="block px-3 py-2 rounded hover:bg-blue-600">Home</a>
          <a href="#about" className="block px-3 py-2 rounded hover:bg-blue-600">About</a>
          <a href="#services" className="block px-3 py-2 rounded hover:bg-blue-600">Services</a>
          <a href="#contact" className="block px-3 py-2 rounded hover:bg-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
