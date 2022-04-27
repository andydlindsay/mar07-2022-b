describe('tests for checkboxes', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('can uncheck the explicit checkbox', () => { 
    cy.get('.filters__form-group')
      .first()
      .find('input')
      .uncheck()
      .should('not.be.checked');
  });

  it('can check a checkbox by clicking on the label', () => {
    cy.contains('EP')
      .click();

    cy.get('#EP')
      .should('be.checked');
  });

});