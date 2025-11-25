import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductMockupProps {
  productType: 'drip' | 'pack250' | 'pack500' | 'pack1kg' | 'capsules';
  logo?: string | null;
  customArt?: string | null;
  templateId?: number | null;
  className?: string;
}

export function ProductMockup({ 
  productType, 
  logo, 
  customArt, 
  templateId,
  className = '' 
}: ProductMockupProps) {
  // Mockup mais realista com perspectiva 3D
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full h-full">
        {/* Background/Shadow */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl" />
        
        {/* Product Container */}
        <div className="relative w-full h-full flex items-center justify-center p-8">
          {/* Custom Art */}
          {customArt ? (
            <div className="relative transform perspective-1000 rotate-y-5">
              <img
                src={customArt}
                alt="Produto personalizado"
                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))',
                }}
              />
            </div>
          ) : templateId ? (
            /* Template com Logo */
            <div className="relative w-full max-w-[280px] aspect-[3/4] transform perspective-1000 rotate-y-5">
              {/* Packaging Base */}
              <div 
                className="w-full h-full rounded-lg relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, 
                    ${getTemplateColor(templateId).from} 0%, 
                    ${getTemplateColor(templateId).to} 100%)`,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                
                {/* Logo Area */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  {logo ? (
                    <img
                      src={logo}
                      alt="Logo"
                      className="max-w-full max-h-full object-contain"
                      style={{
                        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
                      }}
                    />
                  ) : (
                    <div className="text-center">
                      <div className="size-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">☕</span>
                      </div>
                      <p className="text-white/80 text-sm">Seu logo aqui</p>
                    </div>
                  )}
                </div>

                {/* Product Type Label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/20 backdrop-blur-sm rounded px-3 py-1.5">
                    <p className="text-white text-xs text-center">
                      {getProductLabel(productType)}
                    </p>
                  </div>
                </div>

                {/* Realistic details */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full backdrop-blur-sm" />
              </div>
              
              {/* Shadow */}
              <div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/20 rounded-full blur-xl"
              />
            </div>
          ) : (
            /* Empty State */
            <div className="text-center text-neutral-400">
              <div className="size-24 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">📦</span>
              </div>
              <p>Escolha um design para visualizar</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function getTemplateColor(templateId: number) {
  const colors = [
    { from: '#92400e', to: '#78350f' }, // Brown/Coffee
    { from: '#b45309', to: '#92400e' }, // Orange/Amber
    { from: '#065f46', to: '#064e3b' }, // Green/Emerald
    { from: '#1e40af', to: '#1e3a8a' }, // Blue
  ];
  return colors[(templateId - 1) % colors.length];
}

function getProductLabel(productType: string): string {
  const labels: Record<string, string> = {
    drip: 'Drip Coffee',
    pack250: '250g',
    pack500: '500g',
    pack1kg: '1kg',
    capsules: 'Cápsulas',
  };
  return labels[productType] || productType;
}
