Feature: Login

Scenario: Login com sucesso
  Given que acesso a pagina de login
  When preencho credenciais validas
  And clico em login
  Then vejo o dashboard

Scenario: Login invalido
  Given que acesso a pagina de login
  When preencho credenciais invalidas
  Then vejo mensagem de erro