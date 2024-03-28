<p align="center">
  <img src="./public/logo.png" width="250" /> 
</p>

<br/>

# :bulb: Sobre

Um blog utilizando as issues de um repositório como artigos feito em React como desafio do Ignite da Rocketseat.

# :page_with_curl: Pré-requisitos

1. Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. 
    <a href="https://nodejs.org">
      <img width="30" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/>
    </a>

# :gear: Configuração

1. Clone o repositório para sua máquina local:

```bash
git clone https://github.com/carlos-hfc/github-blog
```

2. Acesse o diretório do projeto:

```bash
cd github-blog
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env.local` na raiz do projeto e adicione o usuário do GitHub e o nome de um repositório de sua escolha, dos quais serão utilizados para buscar as issues.

```env
VITE_GITHUB_USER="user-name"
VITE_GITHUB_REPOSITORY="my-repo"
```

5. Rode a aplicação

```bash
npm run dev
```

# :computer_mouse: Uso da aplicação

1. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000)
2. Visualize os posts publicados
3. Filtre um ou mais posts
4. Acesse o post de sua escolha


# :computer: Tecnologias utilizadas

<p float="left">
  <img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>
  <img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/>
  <img width="50" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/>
</p>

# :page_facing_up: Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).