Feature: Login

Scenario: Login com sucesso
  Dado que acesso a pagina de login
  Quando preencho credenciais validas
  E clico em login
  Entao vejo o dashboard

Scenario: Login invalido
  Dado que acesso a pagina de login
  Quando preencho credenciais invalidas
  Entao vejo mensagem de erro