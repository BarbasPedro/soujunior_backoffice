# SouJunior Backoffice RH

> ⚠️ **Nota**: Este projeto está em desenvolvimento ativo. Algumas funcionalidades podem estar incompletas ou sujeitas a mudanças.

Sistema de gerenciamento de voluntários do SouJunior, desenvolvido com Vue 3, TypeScript e Pinia.

## 🚀 Funcionalidades

- Visualização de voluntários em cards
- Filtro por área de atuação
- Indicador de status (Ativo/Inativo)
- Interface moderna e responsiva

## ⚡ Status do Projeto

O projeto está em desenvolvimento ativo, com as seguintes features planejadas:

- [x] Layout base
- [x] Listagem de voluntários
- [x] Filtro por área de atuação
- [ ] Ordenação de cards
- [ ] Listagem de Mentores, Heads, Vagas e Apoiadores

## 🛠️ Tecnologias

- Vue 3
- TypeScript
- Pinia (Gerenciamento de Estado)
- Axios
- Vite

## 📋 Pré-requisitos

- Node.js (versão recomendada: 18.x ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório
```bash
git clone https://github.com/BarbasPedro/soujunior_backoffice.git
cd backoffice-rh
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/        # Componentes Vue
│   ├── Aside.vue     # Barra lateral com filtros
│   ├── Card.vue      # Card de voluntário
│   ├── CardList.vue  # Lista de cards
│   └── Checkbox.vue  # Componente de checkbox
├── stores/           # Stores Pinia
│   └── jobsStore.ts  # Gerenciamento de estado dos jobs
└── styles/           # Arquivos de estilo
```

## 🔄 Estado da Aplicação

O gerenciamento de estado é feito com Pinia, permitindo:
- Seleção múltipla de áreas de atuação
- Filtragem dinâmica de voluntários
- Estado persistente durante a navegação
