import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import VRPage from "../pages/vr.page";

Given('que acesso o site da VR', () => {
  cy.viewport(1920, 1080);
  VRPage.acessarHome();
});

Given('aceito os cookies se existirem', () => {
  VRPage.aceitarCookiesSeExistir();
});

When('acesso a opção Compre Online', () => {
  VRPage.acessarCompreOnline();

  cy.contains('Encontre o produto ideal para você!')
    .should('be.visible');
});

When('seleciono mobilidade', () => {
  VRPage.selecionarMobilidade();
});

When('clico em próximo', () => {
  VRPage.clicarProximo();
});

Then('devo chegar no carrinho', () => {
  cy.url().should('include', 'loja.vr.com.br');
});

Then('preencho os dados de mobilidade', () => {

  // cy.origin('https://loja.vr.com.br', () => {

  //   cy.contains('Vale-transporte')
  //     .should('be.visible');

  //   cy.get('#produto-mobilidade-quantidade')
  //     .clear()
  //     .type('2');

  //   cy.get('#produto-mobilidade-credito-trabalhador')
  //     .clear()
  //     .type('10000');

  //   cy.get('#produto-mobilidade-credito-total')
  //     .invoke('val')
  //     .should('include', '200');

  // });
  cy.url().should('include', 'loja.vr.com.br');

  cy.contains('Vale-transporte')
    .should('be.visible');

  cy.get('#produto-mobilidade-quantidade')
    .clear()
    .type('2');

  cy.get('#produto-mobilidade-credito-trabalhador')
    .clear()
    .type('10000');

  cy.get('#carrinho-seguir-para-a-compra')
    .click();
});

Then('sigo para contratação', () => {

  cy.get('#carrinho-seguir-para-a-compra')
    .should('be.visible')
    .and('not.be.disabled')
    .click();

});

Then('devo ver a tela de CNPJ', () => {

  // garante que navegou corretamente
  cy.url().should('include', 'checkout');

  cy.contains('Para começar')
    .should('be.visible');

  cy.get('input[name="cnpj"]')
    .should('be.visible')
    .and('have.attr', 'placeholder', 'xx.xxx.xxx/xxxx-xx');

  cy.contains('Voltar')
    .should('be.visible');

});

