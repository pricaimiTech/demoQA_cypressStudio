import todomvc from '../../../support/pageObjects/todoMVC.page'

describe('toDo MVC', () => {
    before(() => {
        cy.visit('https://todomvc.com/examples/react/dist/')
    });

    it('Adicionando dados básicos', () => {
        todomvc.inputText()
    });
});