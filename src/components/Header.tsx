import { Link } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Coffee className="size-8 text-amber-700" />
            <span className="text-amber-900">Grupo KRB</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-neutral-700 hover:text-amber-700 transition-colors">
              Início
            </Link>
            <Link to="/sobre" className="text-neutral-700 hover:text-amber-700 transition-colors">
              Sobre
            </Link>
            <Link to="/case-kurubi" className="text-neutral-700 hover:text-amber-700 transition-colors">
              Case Kurubi
            </Link>
            <Link to="/contato" className="text-neutral-700 hover:text-amber-700 transition-colors">
              Contato
            </Link>
            <Button asChild className="bg-amber-700 hover:bg-amber-800">
              <Link to="/#servicos">O que você precisa?</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-6 text-neutral-700" />
            ) : (
              <Menu className="size-6 text-neutral-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <Link
              to="/"
              className="text-neutral-700 hover:text-amber-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className="text-neutral-700 hover:text-amber-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              to="/case-kurubi"
              className="text-neutral-700 hover:text-amber-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Case Kurubi
            </Link>
            <Link
              to="/contato"
              className="text-neutral-700 hover:text-amber-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
            <Button asChild className="bg-amber-700 hover:bg-amber-800">
              <Link to="/#servicos" onClick={() => setMobileMenuOpen(false)}>
                O que você precisa?
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
