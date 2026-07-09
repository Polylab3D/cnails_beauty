# 🎨 Landing Page Personalizável - Guia Completo

Landing page estilo Linktree que você pode personalizar para qualquer cliente. Este guia ensina tanto a edição rápida pelo `config.js` quanto a edição direta do HTML/CSS/JS.

---

## 📚 **Índice**

1. [Arquivos do Projeto](#arquivos-do-projeto)
2. [Método Rápido: Editar config.js](#método-rápido-editar-configjs)
3. [Método Avançado: Editar HTML/CSS/JS](#método-avançado-editar-htmlcssjs)
4. [Como Criar para um Novo Cliente](#como-criar-para-um-novo-cliente)
5. [Referência Rápida](#referência-rápida)

---

## 📁 **Arquivos do Projeto**

```
landing-page/
├── index.html          # Estrutura e estilos da página
├── config.js          # Configuração rápida (textos, links, cores)
├── logo.svg           # Logo do cliente
└── README.md          # Este arquivo
```

**O que cada arquivo faz:**
- `index.html` - Contém toda a estrutura HTML, estilos CSS (dentro das tags `<style>`) e lógica JavaScript
- `config.js` - Arquivo de configuração simples para personalizar textos, links e cores
- `logo.svg` - Imagem do logo (pode ser .svg, .png, .jpg)

---

## ⚡ **Método Rápido: Editar config.js**

Para mudanças rápidas, edite apenas o `config.js`:

### 1. Informações do Cliente

```javascript
business: {
    name: 'Nome do Negócio',           // Título principal
    bio: 'Descrição curta',            // Texto abaixo do título
    logoFile: 'logo.svg',              // Nome do arquivo do logo
}
```

### 2. Links/Botões

```javascript
links: [
    {
        text: 'Texto do Botão',        // O que aparece no botão
        url: 'https://...',            // Para onde o botão leva
        icon: 'calendar'               // Ícone (ver https://tabler.io/icons)
    }
]
```

**Para adicionar botão:** Copie um bloco `{ }` e cole embaixo  
**Para remover botão:** Delete o bloco `{ }` completo

### 3. Cores e Fontes

```javascript
theme: {
    'bg-color': '#c7b093',             // Fundo da página
    'link-bg': '#ffffff',              // Fundo dos botões
    'link-text': '#888888',            // Texto dos botões
    'font-primary': 'Montserrat, sans-serif',   // Fonte principal
}
```

---

## 🔧 **Método Avançado: Editar HTML/CSS/JS**

### **Entendendo a Estrutura do index.html**

O `index.html` tem 3 partes principais:

```html
<!DOCTYPE html>
<html>
<head>
    <!-- 1. CONFIGURAÇÕES E ESTILOS -->
    <style>
        /* CSS aqui */
    </style>
</head>
<body>
    <!-- 2. CONTEÚDO HTML -->
    <div class="container">
        <!-- Elementos da página -->
    </div>

    <!-- 3. LÓGICA JAVASCRIPT -->
    <script src="config.js"></script>
    <script>
        // JavaScript aqui
    </script>
</body>
</html>
```

---

### **🎨 Editando CSS (Estilos)**

O CSS está dentro da tag `<style>` no `<head>`. Cada bloco controla um elemento:

#### **Exemplo 1: Mudar tamanho do logo**

Encontre este bloco no CSS:

```css
.profile-image {
    width: 350px;              /* Largura */
    height: 350px;             /* Altura */
    /* ... outras propriedades ... */
}
```

**Para mudar o tamanho:** Altere os valores de `width` e `height`.

#### **Exemplo 2: Mudar cor de fundo**

```css
body {
    background: #c7b093;       /* Cor de fundo */
}
```

**Dica:** Use um seletor de cores online para pegar o código hexadecimal (#XXXXXX).

#### **Exemplo 3: Arredondar botões**

```css
.link-btn {
    border-radius: 12px;       /* 0px = quadrado, 12px = arredondado */
}
```

#### **Exemplo 4: Mudar espaçamento entre elementos**

```css
.profile-image {
    margin-bottom: 0.5rem;     /* Espaço abaixo do logo */
}

.title {
    margin-bottom: 0.5rem;     /* Espaço abaixo do título */
}
```

**Unidades CSS:**
- `px` - Pixels (fixo)
- `rem` - Relativo ao tamanho da fonte (1rem ≈ 16px)
- `%` - Porcentagem do elemento pai

---

### **📝 Editando HTML (Estrutura)**

O HTML define a estrutura da página. Está dentro da tag `<body>`.

#### **Estrutura Atual:**

```html
<div class="container">
    <!-- Logo -->
    <div class="profile-image">
        <img id="logo" src="" alt="" />
    </div>

    <!-- Título -->
    <h1 class="title" id="business-name">CN Beauty Lounge</h1>

    <!-- Bio -->
    <p class="bio" id="bio-text">Nails & Makeup Artist</p>

    <!-- Botões (preenchidos via JS) -->
    <div class="links" id="links-container"></div>

    <!-- Ícones sociais (preenchidos via JS) -->
    <div class="social-links" id="social-links"></div>

    <!-- Footer -->
    <div class="footer">
        <p id="footer-text">© 2026 PolyLAB 3D</p>
    </div>
</div>
```

#### **Como funciona:**

- `<div>` - Container/caixa para agrupar elementos
- `class="..."` - Nome da classe CSS que estiliza o elemento
- `id="..."` - Identificador único usado pelo JavaScript
- `<h1>` - Título principal
- `<p>` - Parágrafo
- `<img>` - Imagem

**Nota importante:** Os botões e ícones sociais são criados dinamicamente pelo JavaScript (lê do config.js).

---

### **⚙️ Editando JavaScript (Lógica)**

O JavaScript está dentro da tag `<script>` no final do HTML.

#### **O que o JavaScript faz:**

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // 1. Aplica as cores/fontes do config.js
    Object.entries(CONFIG.theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value);
    });

    // 2. Atualiza textos
    document.getElementById('business-name').textContent = CONFIG.business.name;
    document.getElementById('bio-text').textContent = CONFIG.business.bio;

    // 3. Cria os botões dinamicamente
    CONFIG.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = 'link-btn';
        // ... cria o botão completo
        linksContainer.appendChild(a);
    });
});
```

#### **Conceitos Básicos de JavaScript:**

**1. Selecionar um elemento:**
```javascript
const elemento = document.getElementById('nome-do-id');
const elemento = document.querySelector('.nome-da-classe');
```

**2. Mudar texto:**
```javascript
elemento.textContent = 'Novo texto';
```

**3. Mudar estilo:**
```javascript
elemento.style.color = '#ff0000';           // Cor vermelha
elemento.style.fontSize = '24px';           // Tamanho da fonte
```

**4. Criar elemento novo:**
```javascript
const div = document.createElement('div');   // Cria <div>
div.textContent = 'Conteúdo';               // Adiciona texto
document.body.appendChild(div);             // Adiciona ao body
```

**5. Loop (forEach):**
```javascript
const lista = ['item1', 'item2', 'item3'];
lista.forEach(item => {
    console.log(item);                      // Executa para cada item
});
```

---

## 🚀 **Como Criar para um Novo Cliente**

### **Passo 1: Preparar os Arquivos**

1. Copie a pasta completa do projeto
2. Renomeie a pasta para o nome do cliente (ex: `cliente-maria-salao`)
3. Substitua o `logo.svg` pelo logo do novo cliente

### **Passo 2: Editar config.js (Método Rápido)**

```javascript
business: {
    name: 'Nome do Novo Cliente',
    bio: 'Descrição do Negócio',
    logoFile: 'logo.png',                    // Se mudou o nome do logo
}

links: [
    {
        text: 'Agendar',
        url: 'https://link-do-cliente.com',
        icon: 'calendar'
    },
    {
        text: 'Instagram',
        url: 'https://instagram.com/cliente',
        icon: 'brand-instagram'
    }
]

theme: {
    'bg-color': '#c7b093',                   // Cores do cliente
    'link-bg': '#ffffff',
    'link-text': '#888888',
    // ...
}

footer: {
    text: '© 2026 Nome do Cliente'
}
```

### **Passo 3: Ajustes Finos (Se Necessário)**

Se precisar de ajustes específicos, edite o `index.html`:

1. **Tamanho do logo:** Procure `.profile-image` no CSS
2. **Espaçamento:** Procure `margin-bottom` nos elementos
3. **Cores específicas:** Procure `color`, `background` no CSS

### **Passo 4: Testar**

1. Abra o `index.html` no navegador
2. Teste todos os links
3. Verifique cores, tamanhos, espaçamentos
4. Teste em celular (redimensione a janela do navegador)

---

## 📖 **Referência Rápida**

### **Cores CSS**

```css
color: #000000;              /* Preto */
color: #ffffff;              /* Branco */
color: #ff0000;              /* Vermelho */
color: rgba(0, 0, 0, 0.5);   /* Preto com 50% transparência */
```

### **Tamanhos CSS**

```css
font-size: 16px;             /* Tamanho da fonte */
width: 300px;                /* Largura */
height: 200px;               /* Altura */
margin: 10px;                /* Espaçamento externo */
padding: 20px;               /* Espaçamento interno */
```

### **Fontes CSS**

```css
font-family: 'Arial, sans-serif';        /* Fonte do sistema */
font-weight: 300;                        /* Fina (Light) */
font-weight: 400;                        /* Normal */
font-weight: 700;                        /* Negrito (Bold) */
letter-spacing: 0.3em;                   /* Espaçamento entre letras */
```

### **Arredondamento CSS**

```css
border-radius: 0px;          /* Quadrado */
border-radius: 8px;          /* Levemente arredondado */
border-radius: 12px;         /* Arredondado */
border-radius: 50%;          /* Círculo perfeito */
```

### **JavaScript Básico**

```javascript
// Selecionar elemento
const el = document.getElementById('meu-id');
const el = document.querySelector('.minha-classe');

// Mudar texto
el.textContent = 'Novo texto';

// Mudar estilo
el.style.color = '#ff0000';

// Criar elemento
const div = document.createElement('div');
document.body.appendChild(div);

// Loop
array.forEach(item => {
    console.log(item);
});
```

---

## 🔍 **Dicas de Depuração**

### **Página não carrega:**
1. Abra F12 no navegador (DevTools)
2. Vá na aba "Console"
3. Procure por erros em vermelho
4. Erros comuns:
   - Falta de `,` (vírgula) no config.js
   - Aspas não fechadas (`"texto`)
   - Parênteses não fechados (`{ sem }`)

### **Cores não aplicam:**
1. Verifique se o código de cor começa com `#`
2. Códigos de cor têm 6 caracteres: `#ffffff` ✅ / `#fff` ❌
3. Recarregue a página com Ctrl+F5

### **Logo não aparece:**
1. Verifique se o arquivo existe na mesma pasta
2. Nome do arquivo em `logoFile` deve ser exato (incluindo extensão)
3. Tente com outro formato (.png, .jpg)

---

## 🎓 **Recursos para Aprender Mais**

- **HTML/CSS/JS:** https://developer.mozilla.org/pt-BR/
- **Ícones:** https://tabler.io/icons
- **Cores:** https://coolors.co/
- **Fontes Google:** https://fonts.google.com/

---

## ✅ **Checklist para Novo Cliente**

- [ ] Copiar pasta do projeto
- [ ] Substituir logo do cliente
- [ ] Editar `config.js`:
  - [ ] Nome do negócio
  - [ ] Bio/descrição
  - [ ] Links/botões (URL e texto)
  - [ ] Cores (fundo, botões, texto)
  - [ ] Footer (nome e ano)
- [ ] Testar no navegador
- [ ] Testar todos os links
- [ ] Testar em celular (ou janela pequena)
- [ ] Enviar para o cliente

---

**Última atualização:** Julho 2026  
**Criado para:** Ser reutilizável para múltiplos clientes sem assistência
