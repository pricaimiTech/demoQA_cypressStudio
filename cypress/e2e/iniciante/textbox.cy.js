describe('Testando elementos na demoqa', () => {
  it('abrir o site', () => {
    cy.visit('https://demoqa.com')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > :nth-child(1) > .avatar').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio - Text box ==== */
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
    cy.get('#userName').clear('P');
    cy.get('#userName').type('Priscila Caimi');
    cy.get('#userEmail').clear('te');
    cy.get('#userEmail').type('teste@teste.com');
    cy.get('#submit').click();
    /* ==== End Cypress Studio ==== */
  })
})