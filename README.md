
 RASTRO - Sistema de Gerenciamento

RASTRO é um sistema de gerenciamento desenvolvido com React e TypeScript que oferece funcionalidades como login, registro e recuperação de senha. A interface utiliza Tailwind CSS, PostCSS, Autoprefixer e AOS para criar uma experiência moderna, responsiva e interativa.

## Tecnologias Utilizadas

- React & React DOM: Biblioteca para construção da interface.
- TypeScript: Superset do JavaScript com tipagem estática.
- Create React App: Ambiente de desenvolvimento configurado com react-scripts.
- Tailwind CSS: Framework utilitário para estilização.
- PostCSS & Autoprefixer: Processadores de CSS para compatibilidade entre navegadores.
- AOS (Animate On Scroll): Biblioteca para animações ao rolar a página.
- React Router: Gerenciamento de rotas na aplicação.

 Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

```BASH
PROJETO FRONT/
├── public/
│   └── index.html         // Arquivo HTML principal
├── src/
│   ├── index.tsx          // Ponto de entrada da aplicação
│   ├── App.tsx            // Configuração de rotas e inicialização do AOS
│   ├── index.css          // Estilos globais e importação do Tailwind CSS
│   ├── styles.css         // Estilos adicionais
│   └── pages/             // Páginas da aplicação
│       ├── Login.tsx      // Página de login
│       ├── Register.tsx   // Página de registro
│       └── ForgotPassword.tsx // Página de recuperação de senha
├── package.json           // Configuração de scripts e dependências
├── tsconfig.json          // Configurações do TypeScript
├── postcss.config.js      // Configurações do PostCSS
└── tailwind.config.js     // Configurações do Tailwind CSS
```

Instalação

Siga os passos abaixo para configurar o projeto em sua máquina:

1. Clone o Repositório:

   
   git clone https://github.com/GuilhermeFreitasOliver/TELAS-ENGSOFTW
   cd TELAS-ENGSOFTW


2. Instale as Dependências:

   Utilize npm ou yarn para instalar as dependências:

   ```bash
   npm install
   ```
   ou

   ```bash
   yarn install
   ```

## Como Iniciar a Aplicação

Para rodar a aplicação em ambiente de desenvolvimento, utilize:

```bash
npm start
```
ou
```bash
yarn start
```

A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).

Build para Produção

Para criar uma versão otimizada para produção, execute:

```bash
npm run build
```
ou
```bash
yarn build
```




