import todomvc from '../../../support/pageObjects/todoMVC.page'

describe('toDo MVC', () => {
    
    /**
     * This above example is ideal because now we are resetting the state between each test and ensuring nothing in previous tests leaks into subsequent ones.
     */

    beforeEach(()=>{
        cy.visit('/')
        todomvc.inputText()
    })


    it('Concluir a primeira tarefa', () => {
        todomvc.checkToDoFirst()
    });

    it('Concluir a última tarefa', () => {
        todomvc.checkToDoLast()
    });

    it('Concluir um iten pelo texto', ()=>{
        todomvc.checkToDoContains('Karen')
    })
});