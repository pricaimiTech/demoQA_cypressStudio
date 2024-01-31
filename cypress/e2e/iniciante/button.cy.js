describe('Testando elementos Button', () => {
    it('testar botões', () => {
      cy.visit('https://demoqa.com')
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(1) > :nth-child(1) > .avatar').click();
      /* ==== End Cypress Studio ==== */
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-4 > .text').click();
      cy.get('#doubleClickBtn').click();
      cy.get('#doubleClickBtn').click();
      /* ==== End Cypress Studio ==== */
    })
  })