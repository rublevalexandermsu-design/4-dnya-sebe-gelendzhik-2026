import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Программы', path: '/catalog' },
    { name: 'Библиотека', path: '/library' },
    { name: 'Материалы', path: '/materials' },
    { name: 'Лекции', path: '/lectures' },
    { name: 'О Татьяне', path: '/about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/75 backdrop-blur-2xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Link to="/" className="font-headline italic text-2xl text-primary tracking-tight">Татьяна Мунн</Link>
          
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-primary ${location.pathname === link.path ? 'text-primary border-b border-primary/40 pb-1' : 'text-on-surface-variant'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <Link to="/login" className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-on-surface transition-colors font-bold">Вход</Link>
          <Link to="/dashboard" className="bg-primary text-on-primary px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold premium-glow hover:scale-105 transition-all flex items-center gap-2">
            <User size={14} />
            <span className="hidden sm:inline">Кабинет</span>
          </Link>
          
          <button className="lg:hidden text-on-surface" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-xs uppercase tracking-widest font-bold text-on-surface-variant hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-xs uppercase tracking-widest font-bold text-on-surface-variant"
            >
              Вход
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
