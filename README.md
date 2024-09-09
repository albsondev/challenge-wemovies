# WeMovies - E-commerce de Filmes

### Descrição

WeMovies é um projeto de e-commerce de filmes desenvolvido utilizando **Next.js**, **React** e **Redux**. O objetivo é permitir que usuários naveguem por uma lista de filmes, adicionem filmes ao carrinho, ajustem as quantidades e finalizem a compra. O projeto inclui uma interface responsiva, adaptada para dispositivos móveis e desktops, além de animações visuais para melhorar a experiência do usuário.

## Deploy

    O projeto foi implantado e está disponível no seguinte link:

[WeMovies - Deploy na Vercel](hhttps://teste-react-albsondev.vercel.app/)

Você pode acessar a aplicação diretamente através do link acima para visualizar a interface e testar as funcionalidades.


## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces.
- **Next.js** - Framework para aplicações React com renderização do lado do servidor (SSR) e geração estática.
- **Redux** - Biblioteca de gerenciamento de estado global.
- **Tailwind CSS** - Framework CSS utilitário para estilização rápida e responsiva.
- **TypeScript** - Superconjunto de JavaScript que adiciona tipagem estática.
- **Axios** - Biblioteca para realizar chamadas HTTP.
- **Vercel** - Plataforma de hospedagem utilizada para deploy.

## Estrutura do Projeto

```
|-- public/
|-- src/
|   |-- app/
|       |-- components/         # Componentes reutilizáveis do projeto
|       |-- pages/              # Páginas principais como Home, Checkout, Success
|       |-- redux/              # Gerenciamento de estado (Redux + Slices)
|       |-- styles/             # Arquivos de estilo (CSS)
|       |-- types/              # Definições de tipos para o TypeScript
|       |-- utils/              # Funções utilitárias (ex.: formatação de preços)
|-- README.md
|-- package.json
|-- tailwind.config.js
|-- tsconfig.json
|-- vercel.json                 # Configuração de deploy para Vercel
```


## Funcionalidades

- **Listagem de Filmes**: Exibe uma lista de filmes com seus respectivos preços e detalhes.
- **Carrinho de Compras**: O usuário pode adicionar filmes ao carrinho, ajustar a quantidade ou remover itens.
- **Animação ao Adicionar ao Carrinho**: Ao adicionar um filme, ele faz uma animação até o ícone do carrinho.
- **Checkout**: Tela de checkout que exibe os itens no carrinho, permite ajustes e finalização da compra.
- **Tela de Confirmação de Compra**: Exibe uma mensagem de sucesso após o pedido ser finalizado.
- **Interface Responsiva**: Totalmente adaptada para dispositivos móveis e desktop.

## Instalação e Execução do Projeto

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)

### Passo a Passo

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Acesse o diretório do projeto:
    cd wemovies

3. Instale as dependências:

    - npm install
        ### ou
    - yarn install


4. Execute o servidor de desenvolvimento:

    - npm run dev
        ### ou
    - yarn dev

5. Abra o navegador e acesse o endereço:
```
http://localhost:3000
```


## Scripts Disponíveis

*npm run dev* - Inicia o servidor de desenvolvimento.

*npm run build* - Faz o build da aplicação para produção.

*npm run start* - Inicia o servidor em modo de produção.

*npm run lint* - Verifica e corrige problemas de linting no código.

## Configuração de Deploy (Vercel)

Este projeto foi configurado para ser facilmente implantado no Vercel. O arquivo vercel.json contém as instruções necessárias para o processo de deploy automático.

- Faça login na Vercel.
- Conecte o repositório GitHub à Vercel.
- Configure as variáveis de ambiente (caso necessárias).
- O deploy será feito automaticamente após cada push para a branch principal.


## Estrutura de Componentes
MovieCard
Exibe os detalhes de cada filme na lista de produtos.
Contém o botão "Adicionar ao Carrinho", que também exibe a animação de adição ao carrinho.

### Header
Exibe o nome da loja e o ícone do carrinho de compras.
Na versão mobile, exibe a quantidade de itens no carrinho ao lado do ícone.

### Checkout
Exibe a lista de produtos no carrinho com controles de quantidade e subtotal.
Possui um layout diferenciado para desktop (formato de tabela) e mobile (layout flexível).
Permite remover itens e ajustar quantidades diretamente na tela de checkout.

### Success Page
Exibe a confirmação de que a compra foi realizada com sucesso.
Contém um botão para retornar à página inicial.
Estado Global (Redux)
O gerenciamento de estado foi implementado com Redux para controlar o carrinho de compras.

### cartSlice.ts

* Ações:
    - **addToCart** - Adiciona um filme ao carrinho.
    - **removeFromCart** - Remove um item do carrinho.
    - **updateQuantity** - Atualiza a quantidade de um item no carrinho.

### moviesSlice.ts
Controla o estado de filmes (exibição, carregamento, falhas).

## Estilos (Tailwind CSS)

    O projeto foi estilizado utilizando Tailwind CSS para manter um design modular e escalável. O arquivo tailwind.config.js contém as configurações personalizadas para o projeto.


## Temas Customizados

* Cores primárias e secundárias configuradas com **:root.**

* Animações aplicadas para melhorar a UX ao adicionar filmes ao carrinho.

* Interface responsiva garantida através de classes utilitárias do Tailwind.

## Variáveis de Ambiente

 *NEXT_PUBLIC_API_URL* - URL da API de filmes, usada para carregar a lista de produtos.


# Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.