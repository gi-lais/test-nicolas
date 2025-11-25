# 🚀 Guia de Deploy no Vercel - Passo a Passo

## ⚠️ IMPORTANTE: Copie os arquivos CORRETAMENTE

O erro que você está tendo geralmente acontece quando:

1. O arquivo foi copiado com formatação errada
2. Há caracteres especiais invisíveis
3. O arquivo não está na raiz do projeto

## ✅ SOLUÇÃO: Copiar arquivos do jeito certo

### Opção 1: Copiar o conteúdo manualmente (RECOMENDADO)

Para cada arquivo de configuração:

#### 1. package.json

Crie um arquivo chamado exatamente `package.json` (sem .txt no final) e cole este conteúdo:

```json
{
  "name": "grupo-krb",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0",
    "lucide-react": "^0.446.0",
    "sonner": "^1.5.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.2",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-context-menu": "^2.2.1",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.2",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "input-otp": "^1.2.4",
    "react-day-picker": "^8.10.1",
    "react-resizable-panels": "^2.1.2",
    "recharts": "^2.12.7",
    "vaul": "^0.9.2"
  },
  "devDependencies": {
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "typescript": "^5.5.4",
    "vite": "^5.4.3",
    "tailwindcss": "^4.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47"
  }
}
```

**IMPORTANTE:**

- Certifique-se que o arquivo está na RAIZ do projeto (mesma pasta que App.tsx)
- NÃO salve como .txt
- Use um editor de texto simples (Notepad, VS Code, etc)

---

#### 2. Outros arquivos essenciais

Verifique se você tem estes arquivos na raiz (mesma pasta que package.json):

✅ **index.html**
✅ **main.tsx**
✅ **vite.config.ts**
✅ **tsconfig.json**

---

## 🔧 Configuração no Vercel

Depois de fazer upload dos arquivos corretos:

1. **Delete o projeto anterior no Vercel** (se houver)
2. **Crie um novo projeto**
3. **Importe o repositório do GitHub**
4. **Configure assim:**

```
Framework Preset: Vite
Root Directory: ./
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 18.x
```

5. **Deploy!**

---

## 🆘 Se AINDA der erro

### Erro: "command not found"

**Causa:** Arquivo package.json com formatação errada

**Solução:**

1. No GitHub, APAGUE o package.json atual
2. Crie um NOVO arquivo chamado package.json
3. Cole o conteúdo acima DIRETO no editor do GitHub
4. Commit
5. No Vercel, clique em "Redeploy"

---

### Erro: "Cannot find module"

**Causa:** Estrutura de pastas errada

**Solução:**
Verifique se a estrutura está assim:

```
seu-repositorio/
├── package.json          ← Na raiz!
├── index.html            ← Na raiz!
├── main.tsx              ← Na raiz!
├── App.tsx               ← Na raiz!
├── vite.config.ts        ← Na raiz!
├── tsconfig.json         ← Na raiz!
├── components/           ← Pasta
│   └── ...
└── styles/               ← Pasta
    └── globals.css
```

---

### Erro: "Failed to compile"

**Causa:** Falta algum arquivo ou dependência

**Solução:**

1. Certifique-se que TODOS os 6 arquivos de configuração estão no GitHub
2. Verifique se não há erros de sintaxe nos arquivos .tsx

---

## 📋 Checklist Final

Antes de fazer deploy, confirme:

- [ ] package.json está na RAIZ (não em subpasta)
- [ ] package.json não tem extensão .txt
- [ ] index.html está na raiz
- [ ] main.tsx está na raiz
- [ ] Todos os arquivos foram commitados no GitHub
- [ ] Repositório público ou Vercel tem acesso
- [ ] Tentou fazer "Redeploy" após corrigir

---

## ✅ Quando funcionar

Você verá no Vercel:

```
Building...
✓ Installing dependencies
✓ Running build
✓ Uploading
✓ Deployed to https://seu-site.vercel.app
```

🎉 **Sucesso!**

---

## 💡 Dica Extra

Se quiser testar localmente antes:

```bash
npm install
npm run build
```

Se funcionar localmente, funcionará no Vercel!