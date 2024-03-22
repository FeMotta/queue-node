# Projeto QueueNode 🚀

Bem-vindo ao projeto QueueNode! Este projeto é projetado para demonstrar uma implementação robusta de um sistema de fila de trabalhos usando Node.js, com recursos que incluem gerenciamento de usuários, processamento de jobs de e-mail e uma interface de administração para monitoramento de filas provida pela biblioteca Bull.

## Recursos 🌟

- Registro e gerenciamento de usuários
- Fila de e-mail para confirmação de registro
- Interface administrativa para monitoramento de jobs em fila
- Integração com Prisma para ORM
- Uso do Bull para gerenciamento de fila de jobs
- Processamento de jobs personalizável com estratégias de retentativa

## Primeiros Passos 🛠

### Pré-requisitos

- Node.js instalado no seu sistema
- Um banco de dados PostgreSQL
- Um servidor Redis para gerenciamento da fila de jobs

### Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd queuenode
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Copie o arquivo `.env.example` para `.env` e preencha suas variáveis de ambiente incluindo sua URL de banco de dados, configuração do Redis e serviço SMTP.

5. Execute as migrações do banco de dados (certifique-se de que o Prisma está instalado globalmente ou use npx):
   ```bash
   npx prisma migrate dev
   ```

6. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

Isso iniciará o servidor principal e o processador da fila em paralelo.

## Uso 📚

- Para registrar um novo usuário, envie uma requisição `POST` para `/users` com um corpo JSON contendo `name` e `email`.
- Para visualizar todos os usuários registrados, envie uma requisição `GET` para `/users`.
- A interface de administração para monitoramento das filas pode ser acessada em `/admin/queues`.

## Estrutura do Projeto 📁

- `src/` - Contém o código-fonte.
  - `controllers/` - Controladores para lidar com as requisições da API.
  - `jobs/` - Definições de jobs para a fila.
  - `lib/` - Bibliotecas utilitárias incluindo a fila e o enviador de e-mails.
  - `config/` - Arquivos de configuração incluindo as configurações do Prisma e Redis.
- `prisma/` - Contém o esquema do Prisma para os modelos de banco de dados.

## Tecnologias Utilizadas 💻

- Node.js e Express para o backend.
- Prisma como ORM para interação com banco de dados.
- Bull para gerenciamento da fila de jobs, com Redis como armazenamento da fila.
- Nodemailer para envio de e-mails.
- dotenv para gerenciamento de variáveis de ambiente.
- ESLint para linting do código, seguindo a configuração base da Airbnb.

## Scripts 📜

- `npm run dev` - Inicia os servidores de desenvolvimento tanto para a API quanto para o processador da fila.
- `npm run lint` - Linta o código-base para possíveis erros e força padrões de codificação.

## Licença 📄

Este projeto está licenciado sob a Licença ISC. Veja o arquivo LICENSE para mais detalhes.

---

Fique à vontade para contribuir ou fazer fork deste projeto. Para quaisquer questões ou contribuições, por favor, abra uma issue ou um pull request.
