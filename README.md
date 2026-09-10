# 🍎 Frutiva

O **Frutiva** é uma plataforma de compra de frutas pela internet, desenvolvida para tornar o processo de compra mais simples, rápido e prático.

A plataforma permite que os usuários visualizem as frutas disponíveis, consultem preços, adicionem produtos ao carrinho e realizem pedidos informando seus dados e endereço de entrega. Após a finalização, o usuário também pode acompanhar o status do pedido até a entrega.

Além da área destinada aos clientes, o sistema possui uma área administrativa, permitindo o gerenciamento dos produtos, estoque e pedidos.

---

## 🎯 Objetivo

O objetivo do **Frutiva** é facilitar a compra de frutas pela internet, oferecendo uma experiência intuitiva para o usuário e ferramentas de gerenciamento para os administradores da plataforma.

---

## 🛒 Funcionalidades

### 👤 Usuário

- Visualização das frutas disponíveis
- Consulta de preços
- Visualização das informações dos produtos
- Adição e remoção de frutas do carrinho
- Alteração da quantidade de produtos
- Cadastro e preenchimento dos dados do usuário
- Escolha do endereço de entrega
- Finalização do pedido
- Acompanhamento do status do pedido

### 🔐 Área Administrativa

- Cadastro de novas frutas
- Edição de produtos
- Remoção de produtos
- Controle de estoque
- Atualização de preços
- Visualização dos pedidos realizados
- Gerenciamento do status dos pedidos

---

## 🔄 Funcionamento

O funcionamento básico da plataforma segue o seguinte fluxo:

**Usuário → Visualiza as frutas → Escolhe os produtos → Adiciona ao carrinho → Confirma os produtos → Informa seus dados → Escolhe o endereço → Finaliza o pedido → Acompanha o status → Entrega**

---

## 📦 Gerenciamento de Estoque

O sistema permite que os administradores acompanhem a quantidade disponível de cada fruta.

Quando um pedido é realizado, o estoque pode ser atualizado de acordo com a quantidade de produtos comprados, evitando que sejam vendidos produtos que não estão disponíveis.

---

## 📋 Status do Pedido

Os pedidos podem passar por diferentes etapas durante o processo de entrega:

- 🟡 **Pedido realizado**
- 🔵 **Pedido em preparação**
- 🟣 **Pedido enviado**
- 🟢 **Pedido entregue**

---

## 👦 Integrantes

- Eduardo Chaves
- Ricardo Cruz
  
---

## 🏗️ Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```text
Frutiva/
│
├── .claude/
│
├── assets/
│
├── node_modules/
│
├── src/
│   │
│   ├── components/
│   │   ├── Botao.js
│   │   ├── CarrinhoItem.js
│   │   └── FrutaCard.js
│   │
│   ├── screens/
│   │   ├── CarrinhoScreen.js
│   │   ├── HomeScreen.js
│   │   └── PedidoScreen.js
│   │
│   └── services/
│       └── storage.js
│
├── .gitignore
├── AGENTS.md
├── App.js
├── app.json
├── CLAUDE.md
├── index.js
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
