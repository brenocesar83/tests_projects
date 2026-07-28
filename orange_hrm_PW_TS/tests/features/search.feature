Feature: Busca de funcionarios

Scenario: Buscar funcionario pelo nome
  Dado que estou logado no sistema
  E acesso a tela de busca de funcionarios
  Quando busco por um nome existente
  Entao devo ver resultados correspondentes

Scenario: Buscar funcionario pelo ID
  Dado que estou logado no sistema
  E acesso a tela de busca de funcionarios
  Quando busco por um ID valido
  Entao devo ver o funcionario correto

Scenario: Buscar funcionario usando filtros combinados
  Dado que estou logado no sistema
  E acesso a tela de busca de funcionarios
  Quando aplico filtros por nome e cargo
  Entao os resultados devem respeitar todos os filtros aplicados
