# 🛍️ DioShopping

Projeto final do **Bootcamp de Desenvolvimento FrontEnd do Banco Inter**, desenvolvido durante a trilha da [DIO (Digital Innovation One)](https://www.dio.me/).

DioShopping é uma aplicação de e-commerce com catálogo de produtos, carrinho de compras, autenticação de usuários e simulação de checkout. Foi construída para colocar em prática os principais conceitos do React aprendidos ao longo do bootcamp.

## 📸 Visão geral

A aplicação permite:

- Navegar por um catálogo de produtos;
- Adicionar produtos ao carrinho ou comprá-los diretamente, sem passar pelo carrinho;
- Criar uma conta e fazer login, com autenticação via **JWT**;
- Visualizar e editar o carrinho em um modal, com controle de quantidade por item;
- Simular um pagamento (ambiente de teste, sem valores reais) e finalizar a compra;
- Consultar o histórico de pagamentos já realizados;
- Enviar mensagens de contato, com listagem e exclusão.

---

## 🚀 Tecnologias utilizadas

### Front-end

- **React** — construção da interface em componentes;
- **React Router DOM** — roteamento entre páginas (`useNavigate`, `useLocation`);
- **Redux** — gerenciamento de estado global do carrinho de compras;
- **Material UI** — componentes de interface (`TextField`, `Button`, `Grid`, `Typography`, ícones);
- **Bootstrap** — modais (carrinho, preferências, histórico de pagamentos);
- **LocalStorage** - persistência do carrinho, token de autenticação, dados do usuário e histórico de pagamentos entre sessões.

### Back-end

- **Node.js** com **Express**
- **TypeScript**
- **TypeORM** - ORM para modelagem das entidades e acesso ao banco de dados
- **SQLite** - Banco de dados relacional leve, usado no ambiente de desenvolvimento
- **bcryptjs** - Hash de senhas
- **jsonwebtoken (JWT)** - Autenticação e emissão de tokens

---

## 🧩 Funcionalidades

### Autenticação
- Cadastro de novos usuários, com validação de campos e confirmação de senha;
- Login com verificação de credenciais e geração de token JWT;
- Exibição do perfil do usuário logado (avatar com iniciais do nome) diretamente no header;
- Logout, removendo token e dados da sessão.

### Catálogo e carrinho
- Listagem de produtos em grid responsivo;
- Botões de **Adicionar** (ao carrinho) e **Comprar** (fluxo direto de checkout, sem depender do carrinho);
- Modal de carrinho com listagem de itens, controle de quantidade, remoção de itens e cálculo automático do total.

### Pagamento
- Tela de pagamento com preview visual de cartão;
- Preenchimento automático de dados fictícios, com aviso de que se trata de um ambiente de teste;
- Cálculo do valor total considerando tanto uma compra avulsa quanto o carrinho completo;
- Checkout simulado, com remoção automática dos itens comprados do carrinho;
- Redirecionamento para a página inicial após a confirmação.

### Histórico e contato
- Modal de histórico de pagamentos, com data, itens e valor de cada compra realizada;
- Página de contato, com envio, listagem e exclusão de mensagens integradas a uma API própria.

## ⚙️ Como rodar o projeto localmente

### Frontend

```bash
cd dioshopping
npm install
npm start
```

A aplicação abre em `http://localhost:3000`.

---

## 📚 Aprendizados

Este projeto foi construído passo a passo ao longo do bootcamp e serviu para consolidar conceitos como:

- Componentização e reutilização de UI em React
- Gerenciamento de estado global com Redux
- Autenticação de usuários com JWT e hash de senhas
- Modelagem de dados com TypeORM e migrations
- Resolução de problemas comuns de CSS (stacking context, z-index, flexbox, box-sizing)
- Integração entre front-end e back-end via `fetch`
- Boas práticas de UX, como estados de carregamento, validações de formulário e feedback visual

---

## 🎓 Motivação

Chego ao fim do Bootcamp de Desenvolvimento FrontEnd do Banco Inter entregando não só um projeto, mas um pedaço de tudo que aprendi nessa jornada sobre React, TypeORM, autenticação, resolução de bugs de JavaScript às 2 da manhã, e a satisfação de ver cada peça se encaixar até se tornar algo funcional.

Não foi por acaso que escolhi o laranja para vestir esse projeto do início ao fim. Cada tom de laranja espalhado pela interface carrega um significado que vai além da estética: é a forma que encontrei de dizer onde eu quero chegar. Trabalhei duro para simplificar ao máximo a vida dos usuários nesse sistema. Fiz isso com sangue laranja, porque o Banco Inter não é só a empresa que propôs esse desafio: é o lugar onde eu sonho em construir minha carreira.

Esse projeto é a prova de que aprendizado e propósito podem caminhar juntos. Que ele seja o primeiro de muitos passos nessa direção, e que o laranja continue me guiando. 🧡