Feature: Busca de funcionarios

Scenario: Buscar funcionario pelo nome
  Given que estou logado no sistema
  And acesso a tela de busca de funcionarios
  When busco por um nome existente
  Then devo ver resultados correspondentes

Scenario: Buscar funcionario pelo ID
  Given que estou logado no sistema
  And acesso a tela de busca de funcionarios
  When busco por um ID valido
  Then devo ver o funcionario correto

Scenario: Buscar funcionario usando filtros combinados
  Given que estou logado no sistema
  And acesso a tela de busca de funcionarios
  When aplico filtros por nome e cargo
  Then os resultados devem respeitar todos os filtros aplicados
