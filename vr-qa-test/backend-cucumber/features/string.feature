Feature: Remover texto após marcadores

  Scenario Outline:
    Given a string "<input>"
    And os marcadores <marcadores>
    When eu processar a string
    Then o texto resultante deve ser "<output>"

  Examples:
    | input                                      | marcadores           | output                        |
    | bananas, tomates # e ventiladores          | ["#", "!"]           | bananas, tomates              |
    | o rato roeu a roupa $ do rei % de roma     | ["%", "!"]           | o rato roeu a roupa $ do rei |
    | the quick brown fox & jumped over * dog    | ["&","*","%","!"]    | the quick brown fox          |