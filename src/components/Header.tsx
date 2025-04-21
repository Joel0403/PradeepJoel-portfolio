
import { Award, Trophy } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-football-dark text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Award className="text-football-accent mr-2" size={32} />
            <div>
              <h1 className="text-xl font-bold">Kanagam Brothers</h1>
              <p className="text-xs text-football-primary">5-A-Side Football Tournament</p>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-football-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#rules" className="hover:text-football-accent transition-colors">Rules</a>
              </li>
              <li>
                <a href="#guidelines" className="hover:text-football-accent transition-colors">Guidelines</a>
              </li>
              <li>
                <a href="#register" className="hover:text-football-accent transition-colors">Register</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-football-accent transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-football-accent transition-colors">Contact</a>
              </li>
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <a href="#register" className="flex items-center bg-football-accent px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
              <Trophy className="mr-1" size={16} />
              Join Now
            </a>
          </div>
          
          <button className="md:hidden" onClick={toggleMenu}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`bg-white h-0.5 w-full block transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`bg-white h-0.5 w-full block transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white h-0.5 w-full block transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`py-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} md:hidden`}>
          <nav>
            <ul className="space-y-4">
              <li>
                <a href="#" className="block py-2 hover:text-football-accent transition-colors" onClick={toggleMenu}>Home</a>
              </li>
              <li>
                <a href="#rules" className="block py-2 hover:text-football-accent transition-colors" onClick={toggleMenu}>Rules</a>
              </li>
              <li>
                <a href="#guidelines" className="block py-2 hover:text-football-accent transition-colors" onClick={toggleMenu}>Guidelines</a>
              </li>
              <li>
                <a href="#register" className="block py-2 hover:text-football-accent transition-colors" onClick={toggleMenu}>Register</a>
              </li>
              <li>
                <a href="#faq" className="block py-2 hover:text-football-accent transition-colors" onClick={toggleMenu}>FAQ</a>
              </li>
              <li>
                <a href="#contact" className="block py-2 hover:text-football-accent transition-colors" onClick={toggleMenu}>Contact</a>
              </li>
            </ul>
          </nav>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <a href="#register" className="flex items-center justify-center bg-football-accent px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
              <Trophy className="mr-1" size={16} />
              Join Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
