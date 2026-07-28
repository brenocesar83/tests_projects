Feature: Login

Scenario: Login com sucesso
  Dado que acesso a pagina de login
  Quando preencho credenciais validas
  E clico em login
  Entao devo ser redirecionado para o dashboard
  E devo visualizar elementos da pagina inicial

Scenario: Login invalido
  Dado que acesso a pagina de login
  Quando preencho credenciais invalidas
  E clico em login
  Entao devo ver uma mensagem de erro