import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Checkbox } from '../ui/checkbox';
import { ArrowLeft, ArrowRight, CheckCircle2, Upload, Package } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

type ProductType = 'drip' | 'pack250' | 'pack500' | 'pack1kg' | 'capsules';

interface FormData {
  hasCNPJ: 'yes' | 'no' | null;
  document: string;
  brandExists: 'yes' | 'no' | null;
  brandName: string;
  products: {
    [key in ProductType]: number;
  };
}

interface PackagingDesign {
  product: ProductType;
  designType: 'upload' | 'template' | null;
  uploadedFile: string | null;
  selectedTemplate: number | null;
  logo: string | null;
}

export function WhiteLabelPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'form' | 'packaging' | 'preview'>('form');
  const [formData, setFormData] = useState<FormData>({
    hasCNPJ: null,
    document: '',
    brandExists: null,
    brandName: '',
    products: {
      drip: 0,
      pack250: 0,
      pack500: 0,
      pack1kg: 0,
      capsules: 0,
    },
  });

  const [packagingDesigns, setPackagingDesigns] = useState<PackagingDesign[]>([]);
  const [currentPackagingIndex, setCurrentPackagingIndex] = useState(0);

  const productLabels: Record<ProductType, string> = {
    drip: 'Drip Coffee',
    pack250: 'Pacote 250g',
    pack500: 'Pacote 500g',
    pack1kg: 'Pacote 1kg',
    capsules: 'Cápsulas',
  };

  const selectedProducts = Object.entries(formData.products)
    .filter(([_, qty]) => qty > 0)
    .map(([product]) => product as ProductType);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Initialize packaging designs for selected products
    const designs = selectedProducts.map(product => ({
      product,
      designType: null,
      uploadedFile: null,
      selectedTemplate: null,
      logo: null,
    }));
    
    setPackagingDesigns(designs);
    setStep('packaging');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'design' | 'logo') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const currentDesign = packagingDesigns[currentPackagingIndex];
        const updatedDesigns = [...packagingDesigns];
        
        if (type === 'design') {
          updatedDesigns[currentPackagingIndex] = {
            ...currentDesign,
            designType: 'upload',
            uploadedFile: reader.result as string,
          };
        } else {
          updatedDesigns[currentPackagingIndex] = {
            ...currentDesign,
            logo: reader.result as string,
          };
        }
        
        setPackagingDesigns(updatedDesigns);
      };
      reader.readAsDataURL(file);
    }
  };

  const selectTemplate = (templateId: number) => {
    const currentDesign = packagingDesigns[currentPackagingIndex];
    const updatedDesigns = [...packagingDesigns];
    updatedDesigns[currentPackagingIndex] = {
      ...currentDesign,
      designType: 'template',
      selectedTemplate: templateId,
    };
    setPackagingDesigns(updatedDesigns);
  };

  const canProceedToNextPackaging = () => {
    const current = packagingDesigns[currentPackagingIndex];
    if (!current.designType) return false;
    if (current.designType === 'template' && !current.logo) return false;
    return true;
  };

  const handleNextPackaging = () => {
    if (currentPackagingIndex < packagingDesigns.length - 1) {
      setCurrentPackagingIndex(currentPackagingIndex + 1);
    } else {
      setStep('preview');
    }
  };

  const currentDesign = packagingDesigns[currentPackagingIndex];

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
          
          <h1 className="text-neutral-900 mb-4">Sua marca de café começa aqui</h1>
          <p className="text-neutral-700">
            Personalize produtos, embalagens e identidade
          </p>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 max-w-2xl mx-auto">
            <div className={`flex items-center gap-2 ${step === 'form' ? 'text-amber-700' : 'text-neutral-400'}`}>
              <div className={`size-8 rounded-full flex items-center justify-center ${step === 'form' ? 'bg-amber-700 text-white' : 'bg-neutral-200'}`}>
                1
              </div>
              <span className="hidden sm:inline">Dados</span>
            </div>
            <div className="flex-1 h-1 bg-neutral-200">
              <div className={`h-full bg-amber-700 transition-all ${step !== 'form' ? 'w-full' : 'w-0'}`} />
            </div>
            <div className={`flex items-center gap-2 ${step === 'packaging' ? 'text-amber-700' : 'text-neutral-400'}`}>
              <div className={`size-8 rounded-full flex items-center justify-center ${step === 'packaging' ? 'bg-amber-700 text-white' : step === 'preview' ? 'bg-amber-700 text-white' : 'bg-neutral-200'}`}>
                2
              </div>
              <span className="hidden sm:inline">Embalagens</span>
            </div>
            <div className="flex-1 h-1 bg-neutral-200">
              <div className={`h-full bg-amber-700 transition-all ${step === 'preview' ? 'w-full' : 'w-0'}`} />
            </div>
            <div className={`flex items-center gap-2 ${step === 'preview' ? 'text-amber-700' : 'text-neutral-400'}`}>
              <div className={`size-8 rounded-full flex items-center justify-center ${step === 'preview' ? 'bg-amber-700 text-white' : 'bg-neutral-200'}`}>
                3
              </div>
              <span className="hidden sm:inline">Resumo</span>
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
                <CardTitle>Informações iniciais</CardTitle>
                <CardDescription>Preencha os dados para começar</CardDescription>
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

                  {/* Brand exists */}
                  <div className="space-y-4">
                    <Label>Sua marca já existe?</Label>
                    <RadioGroup
                      value={formData.brandExists || ''}
                      onValueChange={(value: 'yes' | 'no') => {
                        setFormData({ ...formData, brandExists: value, brandName: '' });
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="brand-yes" />
                        <Label htmlFor="brand-yes" className="cursor-pointer">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="brand-no" />
                        <Label htmlFor="brand-no" className="cursor-pointer">Não</Label>
                      </div>
                    </RadioGroup>

                    {formData.brandExists === 'yes' && (
                      <div>
                        <Label htmlFor="brandName">Nome da Marca</Label>
                        <Input
                          id="brandName"
                          value={formData.brandName}
                          onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                          placeholder="Digite o nome da sua marca"
                          required
                        />
                      </div>
                    )}
                  </div>

                  {/* Products */}
                  <div className="space-y-4">
                    <Label>Quais produtos você deseja ter na sua linha?</Label>
                    <div className="space-y-4">
                      {(Object.entries(productLabels) as [ProductType, string][]).map(([key, label]) => (
                        <div key={key} className="flex items-center gap-4">
                          <Checkbox
                            checked={formData.products[key] > 0}
                            onCheckedChange={(checked) => {
                              setFormData({
                                ...formData,
                                products: {
                                  ...formData.products,
                                  [key]: checked ? 100 : 0,
                                },
                              });
                            }}
                          />
                          <Label className="flex-1">{label}</Label>
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
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-700 hover:bg-amber-800"
                    disabled={
                      !formData.hasCNPJ ||
                      !formData.document ||
                      !formData.brandExists ||
                      selectedProducts.length === 0
                    }
                  >
                    Avançar
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Step 2: Packaging Design */}
      {step === 'packaging' && currentDesign && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-neutral-900">
                    Montador de Embalagens
                  </h2>
                  <span className="text-sm text-neutral-600">
                    Produto {currentPackagingIndex + 1} de {packagingDesigns.length}
                  </span>
                </div>
                <p className="text-neutral-600">
                  Personalize a embalagem do seu <strong>{productLabels[currentDesign.product]}</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Options */}
                <Card>
                  <CardHeader>
                    <CardTitle>Escolha o tipo de design</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Upload Design */}
                    <div className="space-y-3">
                      <h3 className="text-neutral-800">Enviar arte pronta</h3>
                      <Label
                        htmlFor="design-upload"
                        className="flex flex-col items-center gap-2 p-6 border-2 border-dashed border-neutral-300 rounded-lg cursor-pointer hover:border-amber-600 transition-colors"
                      >
                        <Upload className="size-8 text-neutral-400" />
                        <span className="text-sm text-neutral-600">
                          {currentDesign.uploadedFile ? 'Arte carregada' : 'Clique para fazer upload'}
                        </span>
                        {currentDesign.designType === 'upload' && (
                          <CheckCircle2 className="size-5 text-green-600" />
                        )}
                      </Label>
                      <Input
                        id="design-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, 'design')}
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-neutral-500">Ou</span>
                      </div>
                    </div>

                    {/* Select Template */}
                    <div className="space-y-3">
                      <h3 className="text-neutral-800">Escolher modelo básico</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4].map((templateId) => (
                          <button
                            key={templateId}
                            type="button"
                            onClick={() => selectTemplate(templateId)}
                            className={`p-4 border-2 rounded-lg hover:border-amber-600 transition-colors ${
                              currentDesign.selectedTemplate === templateId
                                ? 'border-amber-600 bg-amber-50'
                                : 'border-neutral-200'
                            }`}
                          >
                            <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded mb-2 flex items-center justify-center">
                              <Package className="size-8 text-amber-700" />
                            </div>
                            <p className="text-xs text-neutral-600">Template {templateId}</p>
                          </button>
                        ))}
                      </div>

                      {currentDesign.designType === 'template' && !currentDesign.logo && (
                        <div className="mt-4">
                          <Label htmlFor="logo-upload" className="mb-2 block">
                            Upload do logo da marca
                          </Label>
                          <Label
                            htmlFor="logo-upload"
                            className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-neutral-300 rounded-lg cursor-pointer hover:border-amber-600 transition-colors"
                          >
                            <Upload className="size-6 text-neutral-400" />
                            <span className="text-sm text-neutral-600">
                              Clique para fazer upload do logo
                            </span>
                          </Label>
                          <Input
                            id="logo-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, 'logo')}
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Right: Preview */}
                <Card>
                  <CardHeader>
                    <CardTitle>Preview</CardTitle>
                    <CardDescription>Visualize como ficará seu produto</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square bg-neutral-100 rounded-lg flex items-center justify-center p-8">
                      {!currentDesign.designType ? (
                        <div className="text-center text-neutral-400">
                          <Package className="size-16 mx-auto mb-4" />
                          <p>Selecione ou faça upload do design</p>
                        </div>
                      ) : currentDesign.designType === 'upload' && currentDesign.uploadedFile ? (
                        <img
                          src={currentDesign.uploadedFile}
                          alt="Preview da embalagem"
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : currentDesign.designType === 'template' ? (
                        <div className="relative w-full h-full">
                          <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-400 rounded-lg flex items-center justify-center">
                            {currentDesign.logo ? (
                              <img
                                src={currentDesign.logo}
                                alt="Logo"
                                className="max-w-[60%] max-h-[60%] object-contain"
                              />
                            ) : (
                              <div className="text-center text-amber-800">
                                <Package className="size-16 mx-auto mb-2" />
                                <p className="text-sm">Template {currentDesign.selectedTemplate}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Navigation */}
              <div className="flex gap-4 mt-8">
                {currentPackagingIndex > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPackagingIndex(currentPackagingIndex - 1)}
                  >
                    <ArrowLeft className="mr-2 size-4" />
                    Anterior
                  </Button>
                )}
                <Button
                  className="ml-auto bg-amber-700 hover:bg-amber-800"
                  onClick={handleNextPackaging}
                  disabled={!canProceedToNextPackaging()}
                >
                  {currentPackagingIndex < packagingDesigns.length - 1 ? 'Próximo produto' : 'Ver resumo'}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 3: Preview/Summary */}
      {step === 'preview' && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-neutral-900 mb-8">Resumo do Pedido</h2>

              {/* Customer Info */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Dados do Cliente</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    <strong>Documento:</strong> {formData.document}
                  </p>
                  {formData.brandName && (
                    <p>
                      <strong>Marca:</strong> {formData.brandName}
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Products */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Produtos Selecionados</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {packagingDesigns.map((design, index) => (
                      <div key={index} className="flex gap-6 pb-6 border-b last:border-0">
                        <div className="w-32 h-32 bg-neutral-100 rounded-lg flex-shrink-0 overflow-hidden">
                          {design.designType === 'upload' && design.uploadedFile ? (
                            <img
                              src={design.uploadedFile}
                              alt={productLabels[design.product]}
                              className="w-full h-full object-cover"
                            />
                          ) : design.designType === 'template' ? (
                            <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center p-2">
                              {design.logo && (
                                <img
                                  src={design.logo}
                                  alt="Logo"
                                  className="max-w-full max-h-full object-contain"
                                />
                              )}
                            </div>
                          ) : null}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-neutral-900 mb-2">{productLabels[design.product]}</h3>
                          <p className="text-sm text-neutral-600 mb-1">
                            Quantidade: {formData.products[design.product]} unidades
                          </p>
                          <p className="text-sm text-neutral-600">
                            Design: {design.designType === 'upload' ? 'Arte customizada' : `Template ${design.selectedTemplate}`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setStep('packaging');
                    setCurrentPackagingIndex(0);
                  }}
                >
                  <ArrowLeft className="mr-2 size-4" />
                  Editar embalagens
                </Button>
                <Button className="ml-auto bg-amber-700 hover:bg-amber-800">
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