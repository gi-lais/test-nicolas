import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ArrowLeft, ArrowRight, CheckCircle2, Upload, Gift, Heart, Briefcase, PartyPopper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Checkbox } from '../ui/checkbox';

type ProductType = 'drip' | 'pack250' | 'pack500' | 'pack1kg';
type EventType = 'casamento' | 'corporativo' | 'aniversario' | 'fitness' | 'lazer' | 'outro';

interface FormData {
  hasCNPJ: 'yes' | 'no' | null;
  document: string;
  eventType: EventType | '';
  customEventType: string;
  products: {
    [key in ProductType]: number;
  };
}

interface LabelDesign {
  product: ProductType;
  selectedArt: number | null;
  logo: string | null;
}

const productLabels: Record<ProductType, string> = {
  drip: 'Sachê de Drip Coffee',
  pack250: 'Pacote 250g',
  pack500: 'Pacote 500g',
  pack1kg: 'Pacote 1kg',
};

const eventTypeLabels: Record<EventType, string> = {
  casamento: 'Casamento',
  corporativo: 'Evento Corporativo',
  aniversario: 'Aniversário',
  fitness: 'Evento Fitness',
  lazer: 'Evento de Lazer',
  outro: 'Outro',
};

const eventIcons: Record<EventType, any> = {
  casamento: Heart,
  corporativo: Briefcase,
  aniversario: PartyPopper,
  fitness: Gift,
  lazer: Gift,
  outro: Gift,
};

export function EventosPage() {
  const [step, setStep] = useState<'form' | 'products' | 'art' | 'logo' | 'preview'>('form');
  const [formData, setFormData] = useState<FormData>({
    hasCNPJ: null,
    document: '',
    eventType: '',
    customEventType: '',
    products: {
      drip: 0,
      pack250: 0,
      pack500: 0,
      pack1kg: 0,
    },
  });

  const [labelDesigns, setLabelDesigns] = useState<LabelDesign[]>([]);
  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);

  const selectedProducts = Object.entries(formData.products)
    .filter(([_, qty]) => qty > 0)
    .map(([product]) => product as ProductType);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('products');
  };

  const handleProductsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const designs = selectedProducts.map(product => ({
      product,
      selectedArt: null,
      logo: null,
    }));
    
    setLabelDesigns(designs);
    setCurrentDesignIndex(0);
    setStep('art');
  };

  const selectArt = (artId: number) => {
    const updatedDesigns = [...labelDesigns];
    updatedDesigns[currentDesignIndex] = {
      ...updatedDesigns[currentDesignIndex],
      selectedArt: artId,
    };
    setLabelDesigns(updatedDesigns);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedDesigns = [...labelDesigns];
        updatedDesigns[currentDesignIndex] = {
          ...updatedDesigns[currentDesignIndex],
          logo: reader.result as string,
        };
        setLabelDesigns(updatedDesigns);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNextArt = () => {
    if (currentDesignIndex < labelDesigns.length - 1) {
      setCurrentDesignIndex(currentDesignIndex + 1);
    } else {
      setStep('logo');
      setCurrentDesignIndex(0);
    }
  };

  const handleNextLogo = () => {
    if (currentDesignIndex < labelDesigns.length - 1) {
      setCurrentDesignIndex(currentDesignIndex + 1);
    } else {
      setStep('preview');
    }
  };

  const currentDesign = labelDesigns[currentDesignIndex];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 py-12">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="mr-2 size-4" />
              Voltar
            </Link>
          </Button>
          
          <h1 className="text-neutral-900 mb-4">Seu evento merece um café único</h1>
          <p className="text-neutral-700">
            Crie rótulos personalizados usando o Café Kurubi premium
          </p>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 max-w-4xl mx-auto overflow-x-auto">
            <div className={`flex items-center gap-2 flex-shrink-0 ${step === 'form' ? 'text-emerald-700' : 'text-neutral-400'}`}>
              <div className={`size-8 rounded-full flex items-center justify-center ${step === 'form' ? 'bg-emerald-700 text-white' : 'bg-neutral-200'}`}>
                1
              </div>
              <span className="hidden sm:inline text-sm">Dados</span>
            </div>
            <div className="flex-1 h-1 bg-neutral-200 min-w-[20px]">
              <div className={`h-full bg-emerald-700 transition-all ${step !== 'form' ? 'w-full' : 'w-0'}`} />
            </div>
            <div className={`flex items-center gap-2 flex-shrink-0 ${step === 'products' ? 'text-emerald-700' : 'text-neutral-400'}`}>
              <div className={`size-8 rounded-full flex items-center justify-center ${['products', 'art', 'logo', 'preview'].includes(step) ? 'bg-emerald-700 text-white' : 'bg-neutral-200'}`}>
                2
              </div>
              <span className="hidden sm:inline text-sm">Produtos</span>
            </div>
            <div className="flex-1 h-1 bg-neutral-200 min-w-[20px]">
              <div className={`h-full bg-emerald-700 transition-all ${['art', 'logo', 'preview'].includes(step) ? 'w-full' : 'w-0'}`} />
            </div>
            <div className={`flex items-center gap-2 flex-shrink-0 ${step === 'art' ? 'text-emerald-700' : 'text-neutral-400'}`}>
              <div className={`size-8 rounded-full flex items-center justify-center ${['art', 'logo', 'preview'].includes(step) ? 'bg-emerald-700 text-white' : 'bg-neutral-200'}`}>
                3
              </div>
              <span className="hidden sm:inline text-sm">Arte</span>
            </div>
            <div className="flex-1 h-1 bg-neutral-200 min-w-[20px]">
              <div className={`h-full bg-emerald-700 transition-all ${['logo', 'preview'].includes(step) ? 'w-full' : 'w-0'}`} />
            </div>
            <div className={`flex items-center gap-2 flex-shrink-0 ${step === 'logo' ? 'text-emerald-700' : 'text-neutral-400'}`}>
              <div className={`size-8 rounded-full flex items-center justify-center ${['logo', 'preview'].includes(step) ? 'bg-emerald-700 text-white' : 'bg-neutral-200'}`}>
                4
              </div>
              <span className="hidden sm:inline text-sm">Logo</span>
            </div>
            <div className="flex-1 h-1 bg-neutral-200 min-w-[20px]">
              <div className={`h-full bg-emerald-700 transition-all ${step === 'preview' ? 'w-full' : 'w-0'}`} />
            </div>
            <div className={`flex items-center gap-2 flex-shrink-0 ${step === 'preview' ? 'text-emerald-700' : 'text-neutral-400'}`}>
              <div className={`size-8 rounded-full flex items-center justify-center ${step === 'preview' ? 'bg-emerald-700 text-white' : 'bg-neutral-200'}`}>
                5
              </div>
              <span className="hidden sm:inline text-sm">Preview</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 1: Form */}
      {step === 'form' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Dados do Evento</CardTitle>
                <CardDescription>Informe os dados básicos sobre seu evento</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
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

                  {/* Event Type */}
                  <div className="space-y-4">
                    <Label htmlFor="eventType">Tipo de evento</Label>
                    <Select
                      value={formData.eventType}
                      onValueChange={(value: EventType) => {
                        setFormData({ ...formData, eventType: value, customEventType: '' });
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de evento" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(eventTypeLabels).map(([key, label]) => (
                          <SelectItem key={key} value={key}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {formData.eventType === 'outro' && (
                      <div>
                        <Label htmlFor="customEventType">Qual tipo de evento?</Label>
                        <Input
                          id="customEventType"
                          value={formData.customEventType}
                          onChange={(e) => setFormData({ ...formData, customEventType: e.target.value })}
                          placeholder="Digite o tipo do seu evento"
                          required
                        />
                      </div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-700 hover:bg-emerald-800"
                    disabled={
                      !formData.hasCNPJ ||
                      !formData.document ||
                      !formData.eventType ||
                      (formData.eventType === 'outro' && !formData.customEventType)
                    }
                  >
                    Continuar para escolha de produtos
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Step 2: Product Selection */}
      {step === 'products' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Escolha os Produtos</CardTitle>
                <CardDescription>
                  Selecione os produtos com Café Kurubi premium para seu evento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProductsSubmit} className="space-y-6">
                  <div className="space-y-4">
                    {(Object.entries(productLabels) as [ProductType, string][]).map(([key, label]) => (
                      <div key={key} className="flex items-center gap-4 p-4 border rounded-lg">
                        <Checkbox
                          checked={formData.products[key] > 0}
                          onCheckedChange={(checked) => {
                            setFormData({
                              ...formData,
                              products: {
                                ...formData.products,
                                [key]: checked ? 50 : 0,
                              },
                            });
                          }}
                        />
                        <div className="flex-1">
                          <Label className="cursor-pointer">{label}</Label>
                          <p className="text-sm text-neutral-500">Café Kurubi Premium</p>
                        </div>
                        {formData.products[key] > 0 && (
                          <Input
                            type="number"
                            min="1"
                            value={formData.products[key]}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                products: {
                                  ...formData.products,
                                  [key]: parseInt(e.target.value) || 0,
                                },
                              });
                            }}
                            className="w-24"
                            placeholder="Qtd"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-700 hover:bg-emerald-800"
                    disabled={selectedProducts.length === 0}
                  >
                    Avançar para escolher a arte
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Step 3: Art Selection */}
      {step === 'art' && currentDesign && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-neutral-900">Escolha da Arte do Rótulo</h2>
                  <span className="text-sm text-neutral-600">
                    Produto {currentDesignIndex + 1} de {labelDesigns.length}
                  </span>
                </div>
                <p className="text-neutral-600">
                  Selecione a arte para o <strong>{productLabels[currentDesign.product]}</strong>
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((artId) => (
                  <button
                    key={artId}
                    type="button"
                    onClick={() => selectArt(artId)}
                    className={`aspect-square p-4 border-2 rounded-lg hover:border-emerald-600 transition-colors ${
                      currentDesign.selectedArt === artId
                        ? 'border-emerald-600 bg-emerald-50'
                        : 'border-neutral-200'
                    }`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-emerald-200 to-emerald-400 rounded flex items-center justify-center">
                      {currentDesign.selectedArt === artId && (
                        <CheckCircle2 className="size-8 text-emerald-700" />
                      )}
                      {currentDesign.selectedArt !== artId && (
                        <span className="text-emerald-800">Arte {artId}</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-4">
                {currentDesignIndex > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentDesignIndex(currentDesignIndex - 1)}
                  >
                    <ArrowLeft className="mr-2 size-4" />
                    Anterior
                  </Button>
                )}
                <Button
                  className="ml-auto bg-emerald-700 hover:bg-emerald-800"
                  onClick={handleNextArt}
                  disabled={!currentDesign.selectedArt}
                >
                  {currentDesignIndex < labelDesigns.length - 1 ? 'Próximo produto' : 'Aplicar logo'}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 4: Logo Upload */}
      {step === 'logo' && currentDesign && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-neutral-900">Upload do Logo</h2>
                  <span className="text-sm text-neutral-600">
                    Produto {currentDesignIndex + 1} de {labelDesigns.length}
                  </span>
                </div>
                <p className="text-neutral-600">
                  Faça upload do logo para o <strong>{productLabels[currentDesign.product]}</strong>
                </p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <Label
                      htmlFor="logo-upload"
                      className="flex flex-col items-center gap-4 p-12 border-2 border-dashed border-neutral-300 rounded-lg cursor-pointer hover:border-emerald-600 transition-colors"
                    >
                      {currentDesign.logo ? (
                        <div className="text-center">
                          <img
                            src={currentDesign.logo}
                            alt="Logo"
                            className="max-w-[200px] max-h-[200px] object-contain mx-auto mb-4"
                          />
                          <p className="text-sm text-emerald-600">Logo carregado com sucesso!</p>
                          <p className="text-xs text-neutral-500 mt-2">Clique para trocar</p>
                        </div>
                      ) : (
                        <>
                          <Upload className="size-12 text-neutral-400" />
                          <div className="text-center">
                            <p className="text-neutral-600">Clique para fazer upload do logo</p>
                            <p className="text-sm text-neutral-500 mt-1">PNG ou JPG</p>
                          </div>
                        </>
                      )}
                    </Label>
                    <Input
                      id="logo-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleLogoUpload}
                    />

                    {currentDesign.logo && (
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                        <p className="text-sm text-emerald-800">
                          Seu logo será aplicado automaticamente na arte escolhida
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4 mt-8">
                {currentDesignIndex > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentDesignIndex(currentDesignIndex - 1)}
                  >
                    <ArrowLeft className="mr-2 size-4" />
                    Anterior
                  </Button>
                )}
                <Button
                  className="ml-auto bg-emerald-700 hover:bg-emerald-800"
                  onClick={handleNextLogo}
                  disabled={!currentDesign.logo}
                >
                  {currentDesignIndex < labelDesigns.length - 1 ? 'Próximo produto' : 'Visualizar produtos'}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 5: Preview */}
      {step === 'preview' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-neutral-900 mb-8">Seus Produtos Personalizados</h2>

              {/* Event Info */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {formData.eventType && eventIcons[formData.eventType as EventType] && 
                      (() => {
                        const Icon = eventIcons[formData.eventType as EventType];
                        return <Icon className="size-6 text-emerald-700" />;
                      })()
                    }
                    {formData.eventType === 'outro' ? formData.customEventType : eventTypeLabels[formData.eventType as EventType]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">
                    Documento: {formData.document}
                  </p>
                </CardContent>
              </Card>

              {/* Products Preview */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {labelDesigns.map((design, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="aspect-square bg-gradient-to-br from-emerald-200 to-emerald-400 rounded-lg mb-4 flex items-center justify-center p-8">
                        {design.logo && (
                          <img
                            src={design.logo}
                            alt="Logo no produto"
                            className="max-w-[70%] max-h-[70%] object-contain"
                          />
                        )}
                      </div>
                      <h3 className="text-neutral-900 mb-2">{productLabels[design.product]}</h3>
                      <p className="text-sm text-neutral-600 mb-1">
                        Quantidade: {formData.products[design.product]} unidades
                      </p>
                      <p className="text-sm text-neutral-600">
                        Arte: Design {design.selectedArt}
                      </p>
                      <p className="text-sm text-emerald-700 mt-2">
                        Com Café Kurubi Premium
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setStep('art');
                    setCurrentDesignIndex(0);
                  }}
                >
                  <ArrowLeft className="mr-2 size-4" />
                  Editar artes
                </Button>
                <Button className="ml-auto bg-emerald-700 hover:bg-emerald-800">
                  Enviar para orçamento
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
