import { Link } from 'react-router-dom';
import { Coffee, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="size-6 text-amber-600" />
              <span className="text-white">Grupo KRB</span>
            </div>
            <p className="text-sm text-neutral-400">
              Transformamos sua ideia em café. Do grão à embalagem.
            </p>
          </div>

          {/* Links - Serviços */}
          <div>
            <h3 className="text-white mb-4">Serviços</h3>
            <div className="flex flex-col gap-2">
              <Link to="/criar-marca" className="text-sm hover:text-amber-600 transition-colors">
                Criar Minha Marca
              </Link>
              <Link to="/torrefacao" className="text-sm hover:text-amber-600 transition-colors">
                Torrar Meu Café
              </Link>
              <Link to="/eventos" className="text-sm hover:text-amber-600 transition-colors">
                Café Personalizado para Eventos
              </Link>
            </div>
          </div>

          {/* Links - Institucional */}
          <div>
            <h3 className="text-white mb-4">Institucional</h3>
            <div className="flex flex-col gap-2">
              <Link to="/sobre" className="text-sm hover:text-amber-600 transition-colors">
                Sobre o Grupo KRB
              </Link>
              <Link to="/case-kurubi" className="text-sm hover:text-amber-600 transition-colors">
                Case Café Kurubi
              </Link>
              <Link to="/contato" className="text-sm hover:text-amber-600 transition-colors">
                Contato
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white mb-4">Contato</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+551234567890" className="flex items-center gap-2 text-sm hover:text-amber-600 transition-colors">
                <Phone className="size-4" />
                (12) 3456-7890
              </a>
              <a href="mailto:contato@grupokrb.com.br" className="flex items-center gap-2 text-sm hover:text-amber-600 transition-colors">
                <Mail className="size-4" />
                contato@grupokrb.com.br
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                <span>Alta Mogiana, SP<br />Fazenda Caxambu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-sm text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Grupo KRB. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
