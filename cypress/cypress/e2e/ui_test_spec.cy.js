copied
describe('Testes de UI', () => {
  before(() => {
    cy.visit('https://www.spacejam.com/1996/jam.html');
  });

  it('Caso positivo 1 - Verificar o título da página', () => {
    cy.title().should('eq', 'Space Jam');
  });

  it('Caso positivo 2 - Verificar se o logotipo está visível', () => {
    cy.get('#logo').should('be.visible');
  });

  it('Caso positivo 3 - Verificar se o botão de reprodução está habilitado', () => {
    cy.get('#playButton').should('not.be.disabled');
  });

  it('Caso positivo 4 - Verificar se o botão de menu está oculto', () => {
    cy.get('#menuButton').should('not.be.visible');
  });

  it('Caso positivo 5 - Verificar se o campo de pesquisa está presente', () => {
    cy.get('input[name="search"]').should('exist');
  });

  it('Caso positivo 6 - Verificar se a página contém a imagem principal', () => {
    cy.get('#mainImage').should('exist');
  });

  it('Caso negativo 1 - Verificar se um link inválido retorna um erro 404', () => {
    cy.request({
      url: 'https://www.spacejam.com/1996/invalid_link',
      failOnStatusCode: false
    }).should('have.property', 'status', 404);
  });

  it('Caso negativo 2 - Verificar se um elemento não existente na página está ausente', () => {
    cy.get('#nonExistentElement').should('not.exist');
  });
});
