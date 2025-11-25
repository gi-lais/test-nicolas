import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ArrowLeft, Award, Coffee, Package, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function CaseKurubiPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6 text-white hover:bg-white/10">
            <Link to="/">
              <ArrowLeft className="mr-2 size-4" />
              Voltar
            </Link>
          </Button>
          
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              Case de Sucesso
            </div>
            <h1 className="text-white mb-6">Café Kurubi</h1>
            <p className="text-amber-50 text-lg">
              Como uma marca nascida dentro do Grupo KRB se tornou referência em café especial 
              na região, provando a qualidade e expertise que entregamos em cada projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-amber-200">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 size-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="size-8 text-amber-700" />
                </div>
                <p className="text-neutral-900 mb-1">3 anos</p>
                <p className="text-sm text-neutral-600">No mercado</p>
              </CardContent>
            </Card>

            <Card className="text-center border-amber-200">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 size-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="size-8 text-amber-700" />
                </div>
                <p className="text-neutral-900 mb-1">5.000+</p>
                <p className="text-sm text-neutral-600">Clientes atendidos</p>
              </CardContent>
            </Card>

            <Card className="text-center border-amber-200">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 size-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Package className="size-8 text-amber-700" />
                </div>
                <p className="text-neutral-900 mb-1">15 produtos</p>
                <p className="text-sm text-neutral-600">Na linha completa</p>
              </CardContent>
            </Card>

            <Card className="text-center border-amber-200">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 size-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="size-8 text-amber-700" />
                </div>
                <p className="text-neutral-900 mb-1">4.8/5.0</p>
                <p className="text-sm text-neutral-600">Avaliação média</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-neutral-900 mb-8 text-center">A História do Café Kurubi</h2>
            
            <div className="space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-neutral-900 mb-4">Origem e Nascimento</h3>
                      <p className="text-neutral-700 mb-4">
                        O Café Kurubi nasceu em 2021 dentro da estrutura do Grupo KRB, com o objetivo 
                        de mostrar ao mercado a qualidade excepcional dos cafés produzidos nas fazendas 
                        próprias da Alta Mogiana.
                      </p>
                      <p className="text-neutral-700">
                        O nome "Kurubi" vem de uma homenagem às raízes da família, representando tradição 
                        e autenticidade - valores que permeiam cada xícara.
                      </p>
                    </div>
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1616672500662-86c0867923bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3NjM4NzAxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Fazenda KRB"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1 relative h-[300px] rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1648808694138-6706c5efc80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzODQ1MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Cafeteria Kurubi"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="order-1 md:order-2">
                      <h3 className="text-neutral-900 mb-4">Crescimento e Consolidação</h3>
                      <p className="text-neutral-700 mb-4">
                        Em poucos anos, o Café Kurubi conquistou clientes fiéis e se tornou referência 
                        regional em café especial. A combinação de origem rastreada, torra artesanal 
                        e embalagens modernas criou uma identidade forte no mercado.
                      </p>
                      <p className="text-neutral-700">
                        Hoje, o Kurubi está presente em cafeterias, restaurantes e lares, provando que 
                        é possível criar uma marca de sucesso com o suporte adequado.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Product Line */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-neutral-900 mb-4 text-center">Linha de Produtos</h2>
            <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
              Uma linha completa que atende diferentes momentos e preferências de consumo
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Drip Coffee',
                  desc: 'Praticidade sem abrir mão da qualidade. Perfeito para viagens e escritório.',
                  image: 'https://images.unsplash.com/photo-1708482333384-1423b44659d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBkcmlwJTIwYmFnfGVufDF8fHx8MTc2Mzg3MDE3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                },
                {
                  name: 'Pacotes Premium',
                  desc: 'Disponível em 250g, 500g e 1kg. Embalagem com válvula para preservar frescor.',
                  image: 'https://images.unsplash.com/photo-1762352492481-c13b18378f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwYWNrYWdpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzYzODQ2ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                },
                {
                  name: 'Cápsulas',
                  desc: 'Compatíveis com máquinas Nespresso. Conveniência com sabor autêntico.',
                  image: 'https://images.unsplash.com/photo-1723356745675-d88ec2c97e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjYXBzdWxlcyUyMG5lc3ByZXNzb3xlbnwxfHx8fDE3NjM4NzAxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                },
              ].map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-600">{product.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How KRB Made It Happen */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-neutral-900 mb-4 text-center">Como o Grupo KRB viabilizou isso</h2>
            <p className="text-neutral-600 text-center mb-12">
              Todos os elementos que tornaram o Kurubi um sucesso estão disponíveis para sua marca
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 size-12 bg-amber-700 rounded-lg flex items-center justify-center">
                    <Coffee className="size-6 text-white" />
                  </div>
                  <h3 className="text-neutral-900 mb-3">Origem e Qualidade</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">Café das fazendas próprias na Alta Mogiana</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">Rastreabilidade completa do grão</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">Certificações e controle de qualidade</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 size-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="size-6 text-white" />
                  </div>
                  <h3 className="text-neutral-900 mb-3">Torra Personalizada</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">Perfil de torra desenvolvido especialmente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">Mestres torradores experientes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">Padronização em cada lote</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 size-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <Package className="size-6 text-white" />
                  </div>
                  <h3 className="text-neutral-900 mb-3">Embalagem e Design</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">Embalagens modernas e atrativas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">Válvula desgaseificadora para frescor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">Identidade visual profissional</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 size-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Award className="size-6 text-white" />
                  </div>
                  <h3 className="text-neutral-900 mb-3">Escalabilidade</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">Começou pequeno e cresceu organicamente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">Estrutura preparada para atender demanda</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">Suporte contínuo do Grupo KRB</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto bg-neutral-900 text-white">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="mx-auto mb-6 size-16 bg-amber-600 rounded-full flex items-center justify-center">
                <Coffee className="size-8 text-white" />
              </div>
              <blockquote className="text-lg text-neutral-100 mb-6 italic">
                "O sucesso do Café Kurubi prova que quando você tem origem de qualidade, processo 
                profissional e identidade bem construída, é possível criar uma marca que se destaca 
                no mercado. E isso está ao alcance de qualquer pessoa com vontade de empreender."
              </blockquote>
              <p className="text-amber-400">Família KRB</p>
              <p className="text-sm text-neutral-400">Fundadores do Grupo KRB e Café Kurubi</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-700 to-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Sua marca pode ser o próximo case de sucesso</h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            O mesmo processo, qualidade e suporte que tornaram o Kurubi uma referência estão 
            disponíveis para sua marca. Comece hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/criar-marca">Criar minha marca agora</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-amber-900">
              <Link to="/contato">Falar com especialista</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
