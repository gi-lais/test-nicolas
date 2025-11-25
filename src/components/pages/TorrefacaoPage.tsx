import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Textarea } from '../ui/textarea';
import { ArrowLeft, Flame, CheckCircle2, ThermometerSun, Package, Shield } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function TorrefacaoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    hasCNPJ: null as 'yes' | 'no' | null,
    document: '',
    kgAmount: '',
    hasSupplier: null as 'yes' | 'no' | null,
    observations: '',
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
                <h2 className="text-neutral-900 mb-4">Solicitação enviada com sucesso!</h2>
                <p className="text-neutral-600 mb-8">
                  Nossa equipe entrará em contato em breve para discutir os detalhes do seu projeto de torrefação.
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
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-12">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="mr-2 size-4" />
              Voltar
            </Link>
          </Button>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-neutral-900 mb-4">A torra perfeita para o seu café</h1>
              <p className="text-neutral-700">
                Controle total do perfil de torra com qualidade KRB. Nossa expertise garante 
                padronização e excelência em cada lote.
              </p>
            </div>
            <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1672570050756-4f1953bde478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHJvYXN0aW5nfGVufDF8fHx8MTc2Mzg0NDAwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Torrefação de café"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle>Solicitar Serviço de Torrefação</CardTitle>
                <CardDescription>Preencha os dados para receber nosso contato</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* CNPJ/CPF */}
                  <div className="space-y-4">
                    <Label>Tem CNPJ?</Label>
                    <RadioGroup
                      value={formData.hasCNPJ || ''}
                      onValueChange={(value: 'yes' | 'no') => {
                        setFormData({ ...formData, hasCNPJ: value, document: '' });
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="cnpj-yes" />
                        <Label htmlFor="cnpj-yes" className="cursor-pointer">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="cnpj-no" />
                        <Label htmlFor="cnpj-no" className="cursor-pointer">Não</Label>
                      </div>
                    </RadioGroup>

                    {formData.hasCNPJ && (
                      <div>
                        <Label htmlFor="document">
                          {formData.hasCNPJ === 'yes' ? 'CNPJ' : 'CPF'}
                        </Label>
                        <Input
                          id="document"
                          value={formData.document}
                          onChange={(e) => setFormData({ ...formData, document: e.target.value })}
                          placeholder={formData.hasCNPJ === 'yes' ? '00.000.000/0000-00' : '000.000.000-00'}
                          required
                        />
                      </div>
                    )}
                  </div>

                  {/* KG Amount */}
                  <div>
                    <Label htmlFor="kgAmount">Quantos KGs de café precisa que sejam torrados por mês?</Label>
                    <Input
                      id="kgAmount"
                      type="number"
                      value={formData.kgAmount}
                      onChange={(e) => setFormData({ ...formData, kgAmount: e.target.value })}
                      placeholder="Ex: 500"
                      required
                    />
                  </div>

                  {/* Has Supplier */}
                  <div className="space-y-4">
                    <Label>Já possui fornecedor de café verde?</Label>
                    <RadioGroup
                      value={formData.hasSupplier || ''}
                      onValueChange={(value: 'yes' | 'no') => {
                        setFormData({ ...formData, hasSupplier: value });
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="supplier-yes" />
                        <Label htmlFor="supplier-yes" className="cursor-pointer">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="supplier-no" />
                        <Label htmlFor="supplier-no" className="cursor-pointer">
                          Não (podemos fornecer)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Observations */}
                  <div>
                    <Label htmlFor="observations">Observações</Label>
                    <Textarea
                      id="observations"
                      value={formData.observations}
                      onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                      placeholder="Conte-nos mais sobre suas necessidades..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    disabled={
                      !formData.hasCNPJ ||
                      !formData.document ||
                      !formData.kgAmount ||
                      !formData.hasSupplier
                    }
                  >
                    Solicitar contato
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Como funciona o serviço de torrefação</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 size-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <ThermometerSun className="size-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-neutral-900 mb-1">Perfil de torra customizado</h3>
                      <p className="text-sm text-neutral-600">
                        Desenvolvemos o perfil ideal para cada tipo de café e objetivo final
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 size-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Shield className="size-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-neutral-900 mb-1">Rastreamento completo</h3>
                      <p className="text-sm text-neutral-600">
                        Cada lote é monitorado e documentado para garantir qualidade consistente
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 size-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Package className="size-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-neutral-900 mb-1">Opções de embalagem</h3>
                      <p className="text-sm text-neutral-600">
                        Embalamos seu café torrado com válvula desgaseificadora para preservar a qualidade
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Flame className="size-5 text-amber-700" />
                    Diferenciais KRB
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">
                        Mestres torradores com mais de 20 anos de experiência
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">
                        Equipamentos modernos com controle de temperatura preciso
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">
                        Testes sensoriais (cupping) de cada lote
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="size-5 text-amber-700 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-700">
                        Flexibilidade para pequenos e grandes volumes
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900 text-white">
                <CardHeader>
                  <CardTitle>Interessado em criar sua marca?</CardTitle>
                  <CardDescription className="text-neutral-300">
                    Além da torrefação, oferecemos serviço completo de white label
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="secondary" className="w-full">
                    <Link to="/criar-marca">Criar minha marca de café</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
