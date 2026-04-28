Feature: Validar API VR

  Scenario: Validar retorno da API
    Given que faço uma requisição para a API VR
    Then o JSON deve conter a chave "typeOfEstablishment"
  
  Scenario: String sem marcadores
    Given a string "texto limpo"
    And os marcadores ["#", "!"]
    When eu processar a string
    Then o texto resultante deve ser "texto limpo"