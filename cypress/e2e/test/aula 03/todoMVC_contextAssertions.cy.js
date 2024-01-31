import todomvc from '../../../support/pageObjects/todoMVC.page'
import todomvcAssertions from '../../../support/pageObjects/todoMVC.assertions.page'


describe('toDo MVC', () => {
    var todoItens = ["Maça", "Banana", "Cenoura"]


    context('Validando a adição de itens', ()=>{
        beforeEach(()=>{
            cy.visit('/')
        })

        it('Validar status inicial da aplicação', () => {
            todomvcAssertions.input('What needs to be done?')
            todomvcAssertions.notVisibleCounter()
            todomvcAssertions.notVisibleFilters()
        });

        it('Adicionar itens a lista de todo', ()=>{
            todomvcAssertions.inputText("Priscila")
            todomvcAssertions.inputText("Karen")
            todomvcAssertions.inputText("Suelen")
        })

        after(() => {
            todomvcAssertions.isVisibleFilters()
            todomvcAssertions.isVisibleCounter()
        });
    })
    
    context('Validando a conclusão de itens', ()=>{

        var todoItens = ["Maça", "Banana", "Cenoura"]

        beforeEach(()=>{
            cy.visit('/')
            todoItens.forEach(function(fruteira, indice ,array){
                todomvcAssertions.inputText(fruteira)
            })
        })

        it('Concluir a primeira tarefa', () => {
            todomvc.checkToDoFirst()
        });
    
        it('Concluir a última tarefa', () => {
            todomvc.checkToDoLast()
        });
    
        it('Concluir um iten pelo texto', ()=>{
            todomvc.checkToDoContains('Maça')
        })

        after(() => {
            todomvcAssertions.isVisibleFilters()
            todomvcAssertions.isVisibleCounter()
            todomvcAssertions.numberOfItensLefts(2)
        });
    })

    context('Exluir itens', ()=>{

        beforeEach(()=>{
            cy.visit('/')
            todoItens.forEach(function(fruteira, indice ,array){
                todomvcAssertions.inputText(fruteira)
            })
        })

        it('Deletar item', () => {
            todomvc.checkToDoFirst()
            todomvcAssertions.deleteItens()
        });
    
    })

    context('Validar filtros', ()=>{

        beforeEach(()=>{
            cy.visit('/')
            todoItens.forEach(function(fruteira, indice ,array){
                todomvcAssertions.inputText(fruteira)
            })
            todomvc.checkToDoFirst()
        })
        
        it('Selecionar filtro Completed', () => {
            todomvcAssertions.completedFilters()
            todomvcAssertions.validarQtdItensLista(1)
        });

        it('Clicar no filtro pelo nome', () => {
            todomvcAssertions.selecionarFilterPeloNome('Active')
        });
    })
    
    
});