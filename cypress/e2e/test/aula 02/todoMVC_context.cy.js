import todomvc from '../../../support/pageObjects/todoMVC.page'

describe('toDo MVC', () => {

    context('Validando a adição de itens', ()=>{
        beforeEach(()=>{
            cy.visit('/')
        })

        it('Adicionar itens a lista de todo', ()=>{
            todomvc.inputText()
        })
    })
    
    context('Validando a conclusão de itens', ()=>{
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
    })
    
    
});