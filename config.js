// ==========================================
// CONFIGURAÇÃO DA LANDING PAGE - CN BEAUTY LOUNGE
// ==========================================
// Este arquivo controla TUDO na landing page: cores, textos, links, etc.
// Edite apenas este arquivo para personalizar sua página!

const CONFIG = {
  // ==========================================
  // INFORMAÇÕES DO NEGÓCIO
  // ==========================================
  business: {
    name: 'CN Beauty Lounge',              // Nome que aparece no topo da página
    bio: 'Nails & Makeup Artist',          // Descrição curta abaixo do nome
    logoFile: 'logo.svg',                  // Nome do arquivo do logo (deixe na mesma pasta)
  },

  // ==========================================
  // LINKS PRINCIPAIS (Botões grandes)
  // ==========================================
  // Para ADICIONAR um botão: copie um bloco { } e cole abaixo
  // Para REMOVER um botão: delete o bloco { } completo
  // Ícones disponíveis: https://tabler.io/icons
  links: [
    {
      text: 'Agendar Horário',             // Texto do botão
      url: 'https://buk.pt/cmnails',       // Link de agendamento
      icon: 'calendar'                     // Ícone (sem o "ti-" na frente)
    },
    {
      text: 'Instagram',                   // Texto do botão
      url: 'https://www.instagram.com/carolinamarques_beautylounge/',  // Instagram da cliente
      icon: 'brand-instagram'              // Ícone
    }
  ],

  // ==========================================
  // REDES SOCIAIS (Ícones discretos no rodapé)
  // ==========================================
  socialLinks: [
    {
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://instagram.com/polylab.pt'  // @polylab.pt
    }
  ],

  // ==========================================
  // TEMA VISUAL (Cores e Fontes)
  // ==========================================
  theme: {
    // --- CORES PRINCIPAIS ---
    'bg-color': '#c7b093',                 // Cor de fundo da página (bege)
    'text-color': '#2b1d08',               // Cor do título (marrom escuro)
    'text-secondary': '#2b1d08',           // Cor da bio
    'text-muted': 'rgba(43, 29, 8, 0.6)',  // Cor do footer (transparente)

    // --- BOTÕES GRANDES ---
    'link-bg': '#ffffff',                  // Fundo dos botões (branco)
    'link-border': 'transparent',          // Borda dos botões (transparente = sem borda)
    'link-text': '#888888',                // Cor do texto dos botões (cinza)
    'link-shadow': '0.3px 0.5px 0.7px hsl(0deg 0% 6.7% / 0.021), 0.9px 1.8px 2.5px -0.6px hsl(0deg 0% 6.7% / 0.026), 2px 4px 5.5px -1.2px hsl(0deg 0% 6.7% / 0.031), 4.6px 9.3px 12.8px -1.7px hsl(0deg 0% 6.7% / 0.035)',
    'link-hover-bg': '#f5f5f5',            // Fundo ao passar o mouse
    'link-hover-text': '#888888',          // Texto ao passar o mouse
    'link-radius': '0px',                  // Arredondamento (0px = quadrado, 12px = arredondado)

    // --- ÍCONE SOCIAL (discreto, sem círculo) ---
    'social-bg': 'transparent',            // Sem fundo
    'social-border': 'transparent',        // Sem borda
    'social-text': 'rgba(43, 29, 8, 0.3)', // Cor bem discreta (ainda mais claro)
    'social-hover-bg': 'transparent',      // Sem fundo ao passar o mouse
    'social-hover-text': 'rgba(43, 29, 8, 0.5)', // Fica um pouco mais visível no hover

    // --- FONTES (Montserrat Light - similar a Gotham) ---
    'font-primary': 'Montserrat, sans-serif',   // Fonte do título
    'font-secondary': 'Montserrat, sans-serif', // Fonte do resto
  },

  // ==========================================
  // FOOTER
  // ==========================================
  footer: {
    text: '© 2026 PolyLAB 3D - Todos os direitos reservados'
  }
};

// ==========================================
// EXEMPLOS DE PERSONALIZAÇÃO RÁPIDA
// ==========================================

// EXEMPLO 1: Mudar cor de fundo para rosa
// 'bg-color': '#ffb3d9',

// EXEMPLO 2: Botões arredondados
// 'link-radius': '12px',

// EXEMPLO 3: Adicionar mais um botão
// {
//   text: 'WhatsApp',
//   url: 'https://wa.me/351967872889',
//   icon: 'brand-whatsapp'
// },
