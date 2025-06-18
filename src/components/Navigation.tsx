
import { Link } from "react-router-dom";
import { Search, User, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-black">Every</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/newsletters" className="text-gray-700 hover:text-black transition-colors">
              Newsletters
            </Link>
            <Link to="/writers" className="text-gray-700 hover:text-black transition-colors">
              Writers
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black transition-colors">
              About
            </Link>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition-colors" />
              <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition-colors" />
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-black"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/newsletters" className="text-gray-700 hover:text-black transition-colors">
                Newsletters
              </Link>
              <Link to="/writers" className="text-gray-700 hover:text-black transition-colors">
                Writers
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-black transition-colors">
                About
              </Link>
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors w-fit">
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
