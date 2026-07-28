Feature: Gestao de funcionarios

Scenario: Cadastrar funcionario com dados validos
  Dado que estou logado no sistema
  E acesso o menu PIM
  Quando cadastro um funcionario com dados validos
  Entao devo ser redirecionado para a tela de detalhes
  E o nome do funcionario deve ser exibido corretamente

Scenario: Tentar cadastrar funcionario sem preencher campos obrigatorios
  Dado que estou logado no sistema
  E acesso o menu PIM
  Quando tento cadastrar um funcionario sem informar o nome
  Entao devo ver mensagens de validação de campo obrigatorio

Scenario: Editar dados de um funcionario
  Dado que estou logado no sistema
  E que existe um funcionario cadastrado
  Quando altero os dados do funcionario
  E salvo as alteracoes
  Entao os novos dados devem ser exibidos corretamente

Scenario: Excluir um funcionario existente
  Dado que estou logado no sistema
  E acesso a lista de funcionarios
  Quando excluo um funcionario
  Entao o funcionario nao deve mais aparecer na lista
