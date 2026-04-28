Feature: Fluxo de contratação VR

  Scenario: Contratar mobilidade até tela de CNPJ
    Given que acesso o site da VR
    And aceito os cookies se existirem
    When acesso a opção Compre Online
    And seleciono mobilidade
    And clico em próximo
    Then devo chegar no carrinho
    And preencho os dados de mobilidade
    And sigo para contratação
    Then devo ver a tela de CNPJ