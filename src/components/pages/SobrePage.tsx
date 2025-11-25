import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ArrowLeft, Heart, Leaf, Users, Target, Award, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function SobrePage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-900 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6 text-white hover:bg-white/10">
            <Link to="/">
              <ArrowLeft className="mr-2 size-4" />
              Voltar
            </Link>
          </Button>
          
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Sobre o Grupo KRB</h1>
            <p className="text-amber-50 text-lg">
              Uma história de três gerações dedicadas ao café, da terra à xícara. 
              Tradição familiar combinada com inovação e excelência.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-neutral-900 mb-8 text-center">Nossa História</h2>
            
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1616672500662-86c0867923bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3NjM4NzAxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Fazenda Caxambu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-neutral-900 mb-4">Das Raízes à Excelência</h3>
                  <p className="text-neutral-700 mb-4">
                    O Grupo KRB nasceu do amor da família pelo café e pela terra. Com mais de 30 anos 
                    de história, iniciamos nosso trabalho nas fazendas da região da Alta Mogiana, 
                    uma das mais prestigiadas regiões produtoras de café do Brasil.
                  </p>
                  <p className="text-neutral-700 mb-4">
                    Nossa jornada começou com a Fazenda Caxambu e a Fazenda Pedregulho, totalizando 
                    525 hectares de terras dedicadas ao cultivo de cafés especiais. Ao longo dos anos, 
                    expandimos nossas operações para incluir torrefação própria e, mais recentemente, 
                    serviços de white label.
                  </p>
                  <p className="text-neutral-700">
                    Hoje, somos um grupo completo que domina toda a cadeia produtiva do café, 
                    permitindo controle total sobre a qualidade - do plantio à xícara.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-neutral-900 mb-4 text-center">Nossos Valores</h2>
            <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
              Princípios que guiam cada decisão e cada grão de café que produzimos
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-amber-200">
                <CardHeader>
                  <div className="mx-auto mb-4 size-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <Heart className="size-8 text-amber-700" />
                  </div>
                  <CardTitle>Paixão pelo Café</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">
                    Cada grão é tratado com dedicação e respeito, desde o plantio até a torra
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-amber-200">
                <CardHeader>
                  <div className="mx-auto mb-4 size-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="size-8 text-green-700" />
                  </div>
                  <CardTitle>Sustentabilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">
                    Práticas agrícolas responsáveis que respeitam a natureza e as futuras gerações
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-amber-200">
                <CardHeader>
                  <div className="mx-auto mb-4 size-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="size-8 text-blue-700" />
                  </div>
                  <CardTitle>Excelência</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">
                    Compromisso constante com a mais alta qualidade em todos os processos
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-amber-200">
                <CardHeader>
                  <div className="mx-auto mb-4 size-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="size-8 text-purple-700" />
                  </div>
                  <CardTitle>Família</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">
                    Valores familiares que se estendem a colaboradores, parceiros e clientes
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-amber-200">
                <CardHeader>
                  <div className="mx-auto mb-4 size-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="size-8 text-orange-700" />
                  </div>
                  <CardTitle>Inovação</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">
                    Tradição aliada à tecnologia e processos modernos de produção
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-amber-200">
                <CardHeader>
                  <div className="mx-auto mb-4 size-16 bg-red-100 rounded-full flex items-center justify-center">
                    <Target className="size-8 text-red-700" />
                  </div>
                  <CardTitle>Parceria</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">
                    Seu sucesso é o nosso sucesso. Trabalhamos juntos em cada projeto
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-neutral-900 mb-12 text-center">Nossa Estrutura Completa</h2>

            <div className="space-y-8">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1616672500662-86c0867923bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3NjM4NzAxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Fazendas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-neutral-900 mb-4">Fazendas Próprias</h3>
                    <p className="text-neutral-700 mb-4">
                      <strong>Fazenda Caxambu e Fazenda Pedregulho</strong>
                    </p>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• 525 hectares cultivados</li>
                      <li>• Região da Alta Mogiana, SP</li>
                      <li>• Produção de 18.000 sacas/ano</li>
                      <li>• Variedades selecionadas de arábica</li>
                      <li>• Altitude ideal para cafés especiais</li>
                      <li>• Certificações de qualidade e origem</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto order-2 md:order-1">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0aW5nfGVufDF8fHx8MTc2Mzg0NDAwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Torrefação"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 order-1 md:order-2">
                    <h3 className="text-neutral-900 mb-4">Indústria de Torrefação</h3>
                    <p className="text-neutral-700 mb-4">
                      <strong>Tecnologia de ponta e expertise artesanal</strong>
                    </p>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Capacidade de 100 toneladas/mês</li>
                      <li>• Equipamentos modernos com controle preciso</li>
                      <li>• Mestres torradores certificados</li>
                      <li>• Perfis de torra personalizados</li>
                      <li>• Laboratório de análise sensorial (cupping)</li>
                      <li>• Embalagem com válvula desgaseificadora</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1648808694138-6706c5efc80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYzODQ1MDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Café Kurubi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-neutral-900 mb-4">Café Kurubi</h3>
                    <p className="text-neutral-700 mb-4">
                      <strong>Nossa marca própria e vitrine de qualidade</strong>
                    </p>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Referência em café especial da região</li>
                      <li>• Linha completa de produtos</li>
                      <li>• Drip coffee, pacotes e cápsulas</li>
                      <li>• Presente em cafeterias e restaurantes</li>
                      <li>• Case de sucesso do white label</li>
                      <li>• Prova da qualidade que entregamos</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-neutral-900 mb-4 text-center">Impacto Social</h2>
            <p className="text-neutral-600 text-center mb-12">
              Nosso compromisso vai além do café. Impactamos positivamente a comunidade local.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <div className="mb-4 size-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="size-6 text-green-700" />
                  </div>
                  <CardTitle>Geração de Empregos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 mb-4">
                    Mais de 50 famílias dependem diretamente das operações do Grupo KRB, 
                    incluindo trabalho nas fazendas, torrefação e áreas administrativas.
                  </p>
                  <p className="text-neutral-700">
                    Oferecemos condições dignas de trabalho, treinamentos constantes e 
                    oportunidades de crescimento profissional.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <div className="mb-4 size-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Heart className="size-6 text-amber-700" />
                  </div>
                  <CardTitle>Desenvolvimento Local</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 mb-4">
                    Apoiamos iniciativas locais de educação, esporte e cultura, 
                    contribuindo para o desenvolvimento da região da Alta Mogiana.
                  </p>
                  <p className="text-neutral-700">
                    Parcerias com escolas, associações e projetos comunitários fazem 
                    parte do nosso compromisso com a comunidade.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-neutral-900 mb-6">Nossa Cultura</h2>
            <p className="text-neutral-700 text-lg mb-8">
              "No Grupo KRB, acreditamos que café é mais do que uma bebida - é conexão, 
              é tradição, é momento. Por isso, tratamos cada projeto como se fosse nosso próprio 
              negócio, com dedicação e compromisso total."
            </p>
            <p className="text-neutral-600 mb-8">
              Seja você um empreendedor iniciante ou uma marca estabelecida buscando parceria 
              de torrefação, aqui você encontrará não apenas fornecedor, mas um verdadeiro parceiro 
              de negócio comprometido com seu sucesso.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-700 to-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Faça parte da nossa história</h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Toda grande marca tem uma grande história. Vamos construir a sua juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/criar-marca">Criar minha marca</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-amber-900">
              <Link to="/contato">Falar com a gente</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
