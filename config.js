// ==========================================
// CONFIGURAÇÃO DO SITE MBWAY - WHITE LABEL
// ==========================================
// Edite apenas este arquivo para personalizar o site para cada cliente

const CONFIG = {
  // Informações do Negócio
  business: {
    name: 'Jacqueline Sillis',           // Ex: "Nails Designer"
    logoFile: 'logo.svg',               // Nome do arquivo do logo (deve estar na mesma pasta)
  },

  // Número MBWay
  mbway: {
    phoneDisplay: '+351 967 872 889',        // Formato visual (com espaços)
    phoneValue: '967872889',            // Número real (sem espaços, será copiado)
  },

  // Cores e Estilo
  theme: {
    // Cor principal (botão MBWay)
    primaryColor: '#2E7D32',            // Verde MBWay padrão
    primaryColorHover: '#256427',       // Verde mais escuro ao passar mouse

    // Fundo da página
    backgroundColor: '#f5f5f5',         // Cinza claro

    // Card
    cardBackground: '#ffffff',          // Branco
    cardShadow: '0 4px 24px rgba(0,0,0,0.08)',
  },

  // Textos Customizáveis
  text: {
    pageTitle: 'Pagamento MBWay',       // Título da aba do navegador
    label: 'Número MBWay',              // Texto acima do número
    buttonText: 'Copiar e Abrir MB WAY', // Texto do botão
    successMessage: '✓ Copiado! A abrir MB WAY...', // Mensagem de sucesso
    errorMessage: 'Erro ao copiar. Seleciona o número manualmente.', // Mensagem de erro

    // Instruções
    step1: 'Clica no botão',
    step2: 'No MB WAY → cola o número',
  },
};
