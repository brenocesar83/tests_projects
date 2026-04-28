class VRPage {

  acessarHome() {
    cy.visit('https://www.vr.com.br/');
  }

  aceitarCookiesSeExistir() {
    cy.get('body').then(($body) => {
      if ($body.text().includes('ACEITAR TUDO')) {
        cy.contains('ACEITAR TUDO').click({ force: true });
      }
    });
  }

  acessarCompreOnline() {
    cy.scrollTo('bottom');

    cy.contains('a', 'Compre Online')
      .invoke('removeAttr', 'target')
      .click({ force: true });
  }

  selecionarMobilidade() {
    cy.get('#mobilidade')
      .check({ force: true });
  }

  clicarProximo() {
    cy.get('#submitprodutoideal')
      .click({ force: true });
  }
  
}

export default new VRPage();