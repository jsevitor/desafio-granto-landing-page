# Landing Page - Granto Seguros

## Descrição

Esta é a landing page do desafio Granto Seguros, apresentando a Inteligência Artificial URSULAH, que simplifica a análise de contratos utilizando técnicas avançadas de Machine Learning. A landing page foi desenvolvida utilizando HTML, CSS, e integrações com um chatbot nos botões CTA.

## Funcionalidades

- **Seção Hero**: Apresenta o título principal, descrição e um botão CTA que direciona para mais informações sobre o produto.
- **Seção de Estatísticas**: Exibe estatísticas importantes sobre a análise de contratos realizada pela URSULAH.
- **Seção Sobre**: Explica o que é a URSULAH e seus principais objetivos.
- **Seção de Uso**: Descreve quem pode utilizar a URSULAH.
- **Seção de Aplicação**: Detalha quando e onde a URSULAH pode ser utilizada.
- **Seção de Passos**: Mostra o processo de utilização da URSULAH em três passos simples.
- **Seção de Formatos de Documentos**: Lista os formatos de documentos aceitos com ícones ilustrativos.
- **Seção Blog**: Destaques dos conteúdos do blog Granto Seguros.
- **Rodapé**: Inclui informações de contato, links para redes sociais e links rápidos para outras páginas importantes.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Bootstrap Icons**

## Estrutura do Projeto

```
.
├── assets
│   ├── favicon.svg
│   ├── logo.svg
│   ├── logo-g.png
│   ├── logo-black.svg
│   ├── stamp.svg
│   ├── woman.svg
│   ├── searching.svg
│   ├── puzzle.svg
│   ├── chat.svg
│   ├── article1.svg
│   ├── article2.svg
│   ├── article3.svg
├── styles
│   └── style.css
├── js
│   └── scripts.js
├── index.html
└── README.md
```

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/landing-page-granto-seguros.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd landing-page-granto-seguros
   ```
3. Abra o arquivo `index.html` em um navegador web.

## Detalhes da Integração com o Chatbot

Os botões CTA ("Falar agora") na página estão integrados com um chatbot para facilitar a comunicação com os usuários. Quando o usuário clica nesses botões, ele é redirecionado para o chatbot no WhatsApp, onde pode obter informações adicionais e suporte imediato.

### Exemplo de Integração (HTML):

```html
<div class="cta-button">
  <a href="https://api.whatsapp.com/send/?phone=553433168055&text=Olá, gostaria de saber mais sobre a URSULAH." target="_blank">
    <button>Falar agora</button>
  </a>
</div>
```

### JavaScript para Ações do Chatbot (scripts.js):

```javascript
document.querySelectorAll('.cta-button a').forEach(button => {
  button.addEventListener('click', () => {
    window.open('https://api.whatsapp.com/send/?phone=553433168055&text=Olá, gostaria de saber mais sobre a URSULAH.', '_blank');
  });
});
```

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
