Feature: Gestao de funcionarios

Scenario: Cadastrar funcionario com dados validos
  Given que estou logado no sistema
  And acesso o menu PIM
  When cadastro um funcionario com dados validos
  Then o funcionario deve ser salvo com sucesso
  And deve aparecer na lista de funcionarios

Scenario: Tentar cadastrar funcionario sem preencher campos obrigatorios
  Given que estou logado no sistema
  And acesso o menu PIM
  When tento cadastrar um funcionario sem informar o nome
  Then devo ver mensagens de validação de campo obrigatorio

Scenario: Editar dados de um funcionario
  Given que estou logado no sistema
  And acesso um funcionario
  When altero os dados do funcionario
  And salvo as alteracoes
  Then os novos dados devem ser exibidos corretamente

Scenario: Excluir um funcionario existente
  Given que estou logado no sistema
  And acesso a lista de funcionarios
  When excluo um funcionario
  Then o funcionario nao deve mais aparecer na lista
