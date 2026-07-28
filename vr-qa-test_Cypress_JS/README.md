# VR QA Test

Projeto desenvolvido como parte de um desafio técnico para vaga de QA.

## Tecnologias utilizadas

- Frontend: Cypress + Cucumber (BDD)
- Backend: Ruby + Cucumber + HTTParty
- Padrão: Page Object Model (frontend)

---

## Como rodar o frontend

### Pré-requisitos
- Node.js >= 18

### Instalação

```bash
cd frontend-cypress
npm install
npx cypress run
npx cypress run --browser chrome --headed (Se quiser rodar no Chrome observando a execução)
```

---

## Como rodar o backend

### Pré-requisitos
- Ruby >= 3
- Bundler

### Instalação

```bash
cd backend-cucumber
bundle install
cucumber
```

---