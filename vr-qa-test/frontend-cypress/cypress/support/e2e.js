Cypress.on("uncaught:exception", (err) => {
  // erro do site que precisa er tratado para não quebrar os testes
  if (err.message.includes('Cannot read properties of null')) {
    return false;
  }
  // erro do site que precisa er tratado para não quebrar os testes
  if (err.message.includes("reading 'split'")) {
    return false;
  }
  // erro do site que precisa er tratado para não quebrar os testes
  if (err.message.includes("Script error")) {
    return false;
  }
});

beforeEach(() => {
  cy.viewport(1440, 900);
  cy.clearCookies();
  cy.clearLocalStorage();
});