import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Package, Flame, Gift, ArrowRight, CheckCircle2, Users, Award } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { BenefitsSection } from '../BenefitsSection';

export function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-amber-100 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-neutral-900 mb-6">
                Transformamos sua ideia em café
              </h1>
              <p className="text-neutral-700 mb-8">
                White Label • Torrefação • Café Personalizado
              </p>
              
              <div className="space-y-4" id="servicos">
                <p className="text-neutral-600">O que você precisa?</p>
                <div className="flex flex-col gap-4">
                  <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800 w-full sm:w-auto">
                    <Link to="/criar-marca">Criar minha marca de café</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50 w-full sm:w-auto">
                    <Link to="/torrefacao">Torrar meu café</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50 w-full sm:w-auto">
                    <Link to="/eventos">Café personalizado para meu evento</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0aW5nfGVufDF8fHx8MTc2Mzg0NDAwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Café sendo torrado"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quem é o Grupo KRB */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-neutral-900 mb-6">Quem é o Grupo KRB</h2>
            <p className="text-neutral-700 text-lg">
              Produzimos cafés especiais da plantação à xícara. Controle total do processo para entregar qualidade, consistência e sabor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-amber-200">
              <CardHeader>
                <div className="mx-auto mb-4 size-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="size-8 text-amber-700" />
                </div>
                <CardTitle>525 hectares</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">Fazendas próprias na Alta Mogiana com café de qualidade premium</p>
              </CardContent>
            </Card>

            <Card className="text-center border-amber-200">
              <CardHeader>
                <div className="mx-auto mb-4 size-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Package className="size-8 text-amber-700" />
                </div>
                <CardTitle>18.000 sacas/ano</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">Capacidade de produção para atender demandas de todos os tamanhos</p>
              </CardContent>
            </Card>

            <Card className="text-center border-amber-200">
              <CardHeader>
                <div className="mx-auto mb-4 size-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <Flame className="size-8 text-amber-700" />
                </div>
                <CardTitle>Torrefação própria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600">Controle completo do processo com perfil de torra personalizado</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/sobre">
                Conheça nosso processo <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* O que fazemos - 3 pilares */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-neutral-900 mb-4">O que fazemos</h2>
            <p className="text-neutral-600">Três formas de transformar café em sucesso</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* White Label */}
            <Card className="hover:shadow-xl transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="mb-4 size-16 bg-amber-700 rounded-lg flex items-center justify-center">
                  <Package className="size-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-amber-700 transition-colors">
                  White Label
                </CardTitle>
                <CardDescription>Crie sua marca de café do zero</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Produtos completos: drip coffee, pacotes e cápsulas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Personalize embalagens com sua identidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Café premium da Alta Mogiana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Para pessoas físicas ou jurídicas</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link to="/criar-marca">Começar agora</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Torrefação */}
            <Card className="hover:shadow-xl transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="mb-4 size-16 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Flame className="size-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-orange-600 transition-colors">
                  Torrefação
                </CardTitle>
                <CardDescription>Torramos seu café com perfeição</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Perfil de torra profissional e personalizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Rastreamento completo do processo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Padronização de qualidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Você fornece o café verde ou nós fornecemos</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link to="/torrefacao">Solicitar orçamento</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Eventos */}
            <Card className="hover:shadow-xl transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="mb-4 size-16 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Gift className="size-8 text-white" />
                </div>
                <CardTitle className="group-hover:text-emerald-600 transition-colors">
                  Café Personalizado
                </CardTitle>
                <CardDescription>Seu evento, seu rótulo</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Para casamentos, eventos corporativos e mais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Café Kurubi premium em rótulos personalizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Arte pronta para aplicar seu logo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Lembrança especial para seus convidados</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Link to="/eventos">Criar rótulo personalizado</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case de Sucesso - Café Kurubi */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1648808694138-6706c5efc80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzODQ1MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Café Kurubi"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-4">
                Case de Sucesso
              </div>
              <h2 className="text-neutral-900 mb-6">Café Kurubi</h2>
              <p className="text-neutral-700 mb-6">
                O Café Kurubi nasceu dentro da estrutura do Grupo KRB e hoje é referência na região. 
                Este é um exemplo perfeito do conhecimento e qualidade que entregamos: do cultivo na 
                fazenda até a xícara do consumidor.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-neutral-800">Origem rastreada</p>
                    <p className="text-sm text-neutral-600">Fazendas próprias na Alta Mogiana</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-neutral-800">Linha completa de produtos</p>
                    <p className="text-sm text-neutral-600">Drip coffee, pacotes e cápsulas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-6 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-neutral-800">Branding consolidado</p>
                    <p className="text-sm text-neutral-600">Identidade forte e reconhecida no mercado</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
                  <Link to="/case-kurubi">Ver case completo</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/criar-marca">Quero criar minha marca também</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Como funciona o processo */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-neutral-900 mb-4">Como funciona</h2>
            <p className="text-neutral-600">Simples e rápido</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Escolha o serviço', desc: 'White Label, Torrefação ou Evento' },
                { step: '02', title: 'Selecione produtos', desc: 'Drip coffee, pacotes ou cápsulas' },
                { step: '03', title: 'Personalize', desc: 'Arte, logo e identidade visual' },
                { step: '04', title: 'Produzimos e entregamos', desc: 'Receba pronto para usar' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 size-16 bg-amber-700 text-white rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                  <h3 className="text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
              <Link to="/criar-marca">Começar projeto</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-neutral-900 mb-4">Marcas que confiam</h2>
            <p className="text-neutral-600">Empresas e eventos que criaram seus cafés com a KRB</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mx-auto mb-4 size-16 bg-amber-100 rounded-full flex items-center justify-center">
                <Users className="size-8 text-amber-700" />
              </div>
              <p className="text-neutral-900 mb-2">50+ marcas</p>
              <p className="text-sm text-neutral-600">Já criadas e lançadas no mercado</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 size-16 bg-amber-100 rounded-full flex items-center justify-center">
                <Package className="size-8 text-amber-700" />
              </div>
              <p className="text-neutral-900 mb-2">500+ eventos</p>
              <p className="text-sm text-neutral-600">Cafés personalizados entregues</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 size-16 bg-amber-100 rounded-full flex items-center justify-center">
                <Flame className="size-8 text-amber-700" />
              </div>
              <p className="text-neutral-900 mb-2">100 ton/mês</p>
              <p className="text-sm text-neutral-600">Capacidade de torrefação</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 size-16 bg-amber-100 rounded-full flex items-center justify-center">
                <Award className="size-8 text-amber-700" />
              </div>
              <p className="text-neutral-900 mb-2">30+ anos</p>
              <p className="text-sm text-neutral-600">De experiência no mercado</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-amber-700 to-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Fale com um especialista</h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para te ajudar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contato">Entrar em contato</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}