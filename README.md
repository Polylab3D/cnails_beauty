# 🏷️ MBWay White Label Template

Sistema white-label para páginas de pagamento MBWay. Permite criar sites personalizados para cada cliente alterando apenas um arquivo de configuração.

## 📋 O que é isto?

Um template reutilizável que gera páginas de pagamento MBWay personalizadas. O cliente lê uma etiqueta NFC (ou acede ao link direto), o site copia automaticamente o número MBWay e abre a app.

**Funcionalidades:**
- ✅ Copia o número MBWay automaticamente
- ✅ Abre a app MBWay diretamente no telemóvel
- ✅ Totalmente customizável (logo, cores, textos)
- ✅ Responsivo (funciona em qualquer dispositivo)
- ✅ Zero dependências externas (exceto ícones)

## 🚀 Como usar para um novo cliente

### 1. Copiar o template

Faz uma cópia desta pasta inteira para cada cliente:

```bash
cp -r mbway-whitelabel-template cliente-nome
cd cliente-nome
```

### 2. Personalizar o `config.js`

Abre o ficheiro `config.js` e edita as seguintes variáveis:

```javascript
const CONFIG = {
  business: {
    name: 'Nome do Cliente',        // Nome do negócio
    logoFile: 'logo.png',            // Nome do ficheiro do logo
  },
  
  mbway: {
    phoneDisplay: '912 345 678',     // Formato visual (com espaços)
    phoneValue: '912345678',         // Número real (sem espaços)
  },
  
  theme: {
    primaryColor: '#2E7D32',         // Cor do botão (verde MBWay por defeito)
    primaryColorHover: '#256427',    // Cor ao passar o rato
    backgroundColor: '#f5f5f5',      // Cor de fundo da página
    cardBackground: '#ffffff',       // Cor de fundo do card
  },
  
  text: {
    pageTitle: 'Pagamento MBWay',    // Título da aba do browser
    buttonText: 'Copiar e Abrir MB WAY',
    // ... outros textos
  },
};
```

### 3. Adicionar o logo do cliente

Substitui o ficheiro `logo.png` pelo logo do cliente. Formatos aceites: PNG, JPG, SVG.

**Dica:** O logo deve ser quadrado ou ter transparência nas bordas para melhor resultado visual.

### 4. Testar localmente

Abre o ficheiro `index.html` diretamente no browser ou usa um servidor local:

```bash
# Opção 1: Abrir diretamente
open index.html

# Opção 2: Servidor local simples (recomendado para testar em telemóvel)
python -m http.server 8000
# ou
npx serve
```

Depois acede a `http://localhost:8000` no browser.

### 5. Fazer deploy

#### **GitHub Pages (Grátis)**

```bash
# Criar repositório Git
git init
git add .
git commit -m "Adicionar site MBWay para [Cliente]"

# Criar repositório no GitHub
gh repo create cliente-mbway --public --source=. --push

# Ativar GitHub Pages
gh api repos/DONO/cliente-mbway/pages -X POST \
  --input - <<< '{"build_type":"legacy","source":{"branch":"main","path":"/"}}'
```

O site ficará disponível em: `https://DONO.github.io/cliente-mbway/`

#### **Netlify (Grátis, com HTTPS automático)**

1. Arrasta a pasta inteira para [app.netlify.com/drop](https://app.netlify.com/drop)
2. Ou liga ao repositório GitHub para deploy automático

#### **Vercel (Grátis, com HTTPS automático)**

```bash
npx vercel
```

## 📱 Como usar com NFC

1. Compra etiquetas NFC programáveis (Amazon, AliExpress)
2. Usa uma app de NFC (ex: **NFC Tools** - Android/iOS)
3. Programa a etiqueta com o URL do site do cliente
4. Cola a etiqueta no balcão, mesa, ou produto

**Fluxo do cliente:**
1. Aproxima o telemóvel da etiqueta NFC
2. Abre o site automaticamente
3. Clica no botão
4. App MBWay abre com o número já copiado
5. Confirma o pagamento

## 🎨 Personalização Avançada

### Alterar ícone do botão

No `index.html`, linha ~123, altera a classe do ícone:

```html
<i class="ti ti-wallet" ...></i>
<!-- Outros ícones disponíveis em: https://tabler.io/icons -->
```

### Adicionar Google Analytics

Adiciona antes do `</head>` no `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔧 Resolução de Problemas

### O número não é copiado
- Verifica que `phoneValue` no `config.js` não tem espaços
- Alguns browsers antigos não suportam `navigator.clipboard`

### A app MBWay não abre
- O deep link `mbway://` só funciona se a app estiver instalada
- Em iOS, pode haver um pequeno delay (é normal)

### O logo não aparece
- Verifica que o nome do ficheiro no `config.js` corresponde ao ficheiro real
- Usa caminhos relativos (ex: `logo.png`, não `/logo.png`)

## 📂 Estrutura de Ficheiros

```
mbway-whitelabel-template/
├── index.html       # Template HTML (não precisa editar)
├── config.js        # ⚡ FICHEIRO A EDITAR PARA CADA CLIENTE
├── logo.png         # Logo do cliente (substitui este ficheiro)
└── README.md        # Este ficheiro
```

## 💼 Workflow para Vários Clientes

```bash
# Template base
mbway-whitelabel-template/

# Cliente 1
cp -r mbway-whitelabel-template cliente1-mbway
cd cliente1-mbway
# Edita config.js + troca logo.png
# Deploy para cliente1.github.io ou cliente1.netlify.app

# Cliente 2
cp -r mbway-whitelabel-template cliente2-mbway
cd cliente2-mbway
# Edita config.js + troca logo.png
# Deploy para cliente2.github.io ou cliente2.netlify.app
```

## 📄 Licença

Livre para usar comercialmente. Sem restrições.

## 🆘 Suporte

Criado por **Polylab3D** (@polylab.pt)

Para questões ou melhorias, contacta via Instagram: [@polylab.pt](https://instagram.com/polylab.pt)
