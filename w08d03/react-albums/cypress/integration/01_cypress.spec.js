describe('tests for Cypress', () => {

  it('works?', () => {
    assert.equal(true, true);
  });

  it('can visit the homepage', () => {
    cy.visit('http://localhost:8765');
  });

});