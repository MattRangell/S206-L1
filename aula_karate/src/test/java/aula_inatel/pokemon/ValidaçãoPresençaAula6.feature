Feature: Testando API Pokemon

Background: Executa tudo antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/pokemon'


Scenario: Testando retorno pokemon/pikachu.
    Given url https://pokeapi.co/api/v2/pokemon/charmander
    When method get
    Then status 200

Scenario: Testando retorno pokemon/chair negativo
    Given url https://pokeapi.co/api/v2/pokemon/chair
    When method get
    Then status 404

Scenario: Testando retorno Dugtrio e verificando JSON
    Given url url_base
    And path /pokemon/dugtrio/
    When method get
    Then status 200
    And match response.name == "dugtrio"
    And match response.id == 51

Scenario: Verifyng name
    Given url url_base
    And path '/version/1'
    When method get
    Then status 200
    And def idiomas = $.names[5].language.url //Dollar sign means the same of writing "response", ja o ".url" eh soh o caminho para gtarantir que estamos salvando o link da liguagem que queremos
    And print idiomas  //Go horse para validar operacao
    And url idiomas
    When method get
    Then status 200
    And match response.name == "es"
    And match response.id == 7

