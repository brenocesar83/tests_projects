# QA Playwright BDD

## Stack
- Playwright
- TypeScript
- BDD (Gherkin)

## Prazo: 
- 3 dias corridos 

## Site: 
- opensource-demo.orangehrmlive.com 

## Instalação

```bash
git clone https://github.com/brenocesar83/tests_projects.git

cd orange_hrm_ts

npm install

npx playwright install
```

## Execução
```bash
npx playwright test
```

## Cenários escolhidos
- Os testes escolhidos garantem o caminho feliz da aplicação, assim como os cenários que asseguram a cobertura do CRUD.
- Para automação, foram feitos os testes necessários para a busca de um funcionário criado, então foi necessário criar o login no sistema, assim como a criação de um usuário, para então ser possível realizar a busca do funcionário criado, e como teste negativo, para demonstração de validação de cenários negativos, foi feito o login com dados errados e a validação da criação de funcionário sem os dados obrigatórios.
- Para o helper, foi escolhido uma função que pode ser reutilizada, passando apenas o heading da pagina, e fazendo a aplicação aguardar o carregamento dela, para q possam ser feitas as validações
