# Grupo KRB - Site Institucional e White Label

Site completo do Grupo KRB para venda de serviços de white label de café, torrefação e café personalizado para eventos.

## 🚀 Deploy no Vercel

### ⚠️ IMPORTANTE: Arquivos Necessários

Certifique-se de fazer upload de TODOS estes arquivos para o GitHub:

**Arquivos de Configuração (obrigatórios):**
- `package.json` - Dependências do projeto
- `vite.config.ts` - Configuração do Vite
- `tsconfig.json` - Configuração do TypeScript
- `tsconfig.node.json` - Configuração do TypeScript para Node
- `index.html` - Página HTML principal
- `main.tsx` - Ponto de entrada do React
- `.gitignore` - Arquivos ignorados pelo Git

**Pastas e Componentes:**
- Todos os arquivos em `/components/`
- Todos os arquivos em `/styles/`
- `App.tsx`

### Passo a Passo Completo

1. **Faça upload de TODOS os arquivos no GitHub** (incluindo os novos arquivos de configuração)
2. No Vercel, **importe o repositório do GitHub**
3. Configuração automática do Vercel:
   ```
   Framework Preset: Vite
   Build Command: vite build
   Output Directory: dist
   Install Command: npm install
   ```
4. Clique em **Deploy**
5. Aguarde 2-3 minutos
6. Site no ar! 🎉

### Se o deploy falhar

Se aparecer erro `vite: command not found`:
- Verifique se o arquivo `package.json` está no repositório
- No Vercel, vá em: Settings → General → Build & Development Settings
- Certifique-se que:
  - Build Command: `npm run build` ou `vite build`
  - Output Directory: `dist`
  - Install Command: `npm install`

## 🛠️ Tecnologias Utilizadas

- **React** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes
- **React Router** - Navegação
- **Lucide React** - Ícones
- **Sonner** - Notificações
- **React Hook Form** - Formulários

## 📦 Estrutura do Projeto

```
/
├── App.tsx                 # Componente principal e rotas
├── components/
│   ├── Header.tsx          # Navegação principal
│   ├── Footer.tsx          # Rodapé
│   ├── BenefitsSection.tsx # Seção de benefícios
│   ├── ProductMockup.tsx   # Preview de produtos
│   ├── pages/              # Páginas do site
│   │   ├── HomePage.tsx
│   │   ├── WhiteLabelPage.tsx
│   │   ├── TorrefacaoPage.tsx
│   │   ├── EventosPage.tsx
│   │   ├── CaseKurubiPage.tsx
│   │   ├── SobrePage.tsx
│   │   └── ContatoPage.tsx
│   └── ui/                 # Componentes shadcn/ui
├── styles/
│   └── globals.css         # Estilos globais e Tailwind
└── README.md
```

## 🎯 Funcionalidades

### 1. White Label - Criar Marca de Café
- Formulário multi-step
- Seleção de produtos (drip coffee, pacotes, cápsulas)
- Upload de logo
- Escolha de templates ou arte customizada
- Preview em tempo real
- Validação de CPF/CNPJ

### 2. Torrefação
- Formulário para serviço de torrefação
- Opção de fornecer café verde ou usar o do grupo
- Especificações de torra

### 3. Café para Eventos
- Personalização de rótulos
- Usa a marca Café Kurubi
- Ideal para casamentos e eventos corporativos

### 4. Páginas Institucionais
- Sobre o Grupo KRB
- Case de Sucesso: Café Kurubi
- Contato

## 📝 Notas Importantes

- As imagens usam Unsplash através do componente ImageWithFallback
- Formulários possuem validação completa
- Site totalmente responsivo (mobile-first)
- Não coleta dados reais (versão demonstração)

## 🔧 Configuração Local (Opcional)

Se quiser rodar localmente antes de fazer deploy:

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📞 Contato

Site desenvolvido para o Grupo KRB - Cafés Especiais da Alta Mogiana

---

**Pronto para fazer deploy no Vercel!** 🚀