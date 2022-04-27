describe('api results test', () => {

  it('can display results from an api call', () => {
    // visit the app
    cy.visit('/');

    // tell cypress to intercept any GET requests, load known values
    cy.intercept('GET', '**/search*', { fixture: 'itunes' })
      .as('loadResults');

    // find the input and type into it
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk');

    // find the spinner and make sure it's visible
    cy.get('.spinner')
      .should('be.visible');

    // wait for the API call to resolve
    cy.wait('@loadResults');

    // check the results for a particular album
    cy.contains('Random Access Memories')

    // uncheck the explicit checkbox
    cy.get('#Explicit')
      .uncheck();

    // check to make sure the explicit album has been removed
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});