import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { ArrowLeft, Mail, Phone, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';

export function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center">
              <CardContent className="pt-12 pb-12">
                <div className="mx-auto mb-6 size-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="size-10 text-green-600" />
                </div>
                <h2 className="text-neutral-900 mb-4">Mensagem enviada com sucesso!</h2>
                <p className="text-neutral-600 mb-8">
                  Obrigado pelo contato. Nossa equipe responderá em breve, geralmente em até 24 horas úteis.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button asChild variant="outline">
                    <Link to="/">Voltar para início</Link>
                  </Button>
                  <Button asChild className="bg-amber-700 hover:bg-amber-800">
                    <Link to="/criar-marca">Criar minha marca</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-12">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="mr-2 size-4" />
              Voltar
            </Link>
          </Button>
          
          <h1 className="text-neutral-900 mb-4">Fale Conosco</h1>
          <p className="text-neutral-700 max-w-2xl">
            Estamos prontos para te ajudar. Entre em contato para tirar dúvidas, 
            solicitar orçamento ou conhecer melhor nossos serviços.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Envie sua mensagem</CardTitle>
                <CardDescription>Preencha o formulário e entraremos em contato</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Sobre o que você quer falar?"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-nos mais sobre sua necessidade..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800">
                    Enviar mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                  <CardDescription>Outras formas de entrar em contato</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 size-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Phone className="size-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-neutral-900 mb-1">Telefone</h3>
                      <a href="tel:+551234567890" className="text-neutral-600 hover:text-amber-700">
                        (12) 3456-7890
                      </a>
                      <p className="text-sm text-neutral-500 mt-1">
                        Seg-Sex: 8h às 18h
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 size-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="size-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-neutral-900 mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/5512345678900"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-amber-700"
                      >
                        (12) 3456-7890
                      </a>
                      <p className="text-sm text-neutral-500 mt-1">
                        Resposta rápida
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 size-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Mail className="size-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-neutral-900 mb-1">E-mail</h3>
                      <a href="mailto:contato@grupokrb.com.br" className="text-neutral-600 hover:text-amber-700">
                        contato@grupokrb.com.br
                      </a>
                      <p className="text-sm text-neutral-500 mt-1">
                        Resposta em até 24h
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 size-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <MapPin className="size-6 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-neutral-900 mb-1">Endereço</h3>
                      <p className="text-neutral-600">
                        Fazenda Caxambu<br />
                        Região da Alta Mogiana<br />
                        São Paulo, Brasil
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-700 to-amber-900 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Quer começar agora?</CardTitle>
                  <CardDescription className="text-amber-100">
                    Crie sua marca de café em poucos cliques
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild variant="secondary" className="w-full">
                    <Link to="/criar-marca">Criar minha marca de café</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-amber-900">
                    <Link to="/torrefacao">Solicitar serviço de torrefação</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-amber-900">
                    <Link to="/eventos">Café para meu evento</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-neutral-50">
                <CardHeader>
                  <CardTitle>FAQ Rápido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-neutral-900 mb-1">Qual o pedido mínimo?</h3>
                    <p className="text-sm text-neutral-600">
                      Depende do tipo de produto. Entre em contato para discutir seu projeto.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-neutral-900 mb-1">Quanto tempo leva?</h3>
                    <p className="text-sm text-neutral-600">
                      Da aprovação até a entrega: 15-30 dias úteis em média.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-neutral-900 mb-1">Posso visitar as fazendas?</h3>
                    <p className="text-sm text-neutral-600">
                      Sim! Agende uma visita através dos nossos canais de contato.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="py-12 bg-neutral-100">
        <div className="container mx-auto px-4">
          <h2 className="text-neutral-900 mb-6 text-center">Localização</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-neutral-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-neutral-500">
                <MapPin className="size-16 mx-auto mb-4" />
                <p>Mapa da região da Alta Mogiana</p>
                <p className="text-sm mt-2">São Paulo, Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
