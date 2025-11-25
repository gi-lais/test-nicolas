import { Card, CardContent } from './ui/card';
import { CheckCircle2, Package, Leaf, Clock, Award, Users } from 'lucide-react';

interface Benefit {
  icon: any;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Package,
    title: 'Pedido mínimo acessível',
    description: 'A partir de 100 unidades. Ideal para quem está começando ou testando o mercado.',
  },
  {
    icon: Leaf,
    title: 'Origem rastreada',
    description: 'Café das nossas fazendas próprias na Alta Mogiana. Qualidade e origem garantidas.',
  },
  {
    icon: Clock,
    title: 'Entrega em 20-30 dias',
    description: 'Da aprovação final até a entrega. Processo ágil e profissional.',
  },
  {
    icon: Award,
    title: 'Controle de qualidade',
    description: 'Análise sensorial de cada lote. Padrão Kurubi em todas as marcas.',
  },
  {
    icon: Users,
    title: 'Consultoria inclusa',
    description: 'Não é só self-service. Nossa equipe te acompanha do design à entrega.',
  },
  {
    icon: CheckCircle2,
    title: 'Estrutura completa',
    description: 'Fazenda, torrefação e embalagem. Tudo integrado para garantir consistência.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-neutral-900 mb-4">Por que escolher o Grupo KRB</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Não somos apenas fornecedores. Somos parceiros no seu sucesso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-neutral-200 hover:border-amber-300 hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="mb-4 size-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Icon className="size-6 text-amber-700" />
                  </div>
                  <h3 className="text-neutral-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-neutral-600">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
