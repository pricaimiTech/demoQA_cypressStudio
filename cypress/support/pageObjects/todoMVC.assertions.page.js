/**
 * Aqui vamos encapsular os dados, por isso criamos este arquivo
 * para deixarmos o nosso código mais organizado.
 * 
 * Primeiramente precisamos importar a variável ELEMENTS 
 * que está no arquivo ‘elements.js’ e que contém os 
 * localizadores dos elementos que vamos utilizar nas ações 
 * da página. Pra isso adicionamos a  * instrução 
 * const elem = require(‘./elements’).ELEMENTS;
 */

const elem = require('../elementsPage/todoMVC.elements').ELEMENTS
const footerElements = require('../elementsPage/footer.elements').ELEMENTS

class todomvcAssertions{

   input(placeholder){
      cy.get(elem.input)
      .should('have.attr', 'placeholder')
      .and('include', placeholder)

   }
    
   inputText(todo){
      cy.get(elem.input).type(todo).type('{enter}')
   }

   notVisibleFilters(){
      cy.get(footerElements.filters)
      .should('not.be.visible')
   }

   notVisibleCounter(){
      cy.get(footerElements.counter)
      .should('not.be.visible')
   }

   isVisibleFilters(){
      cy.get(footerElements.filters)
      .should('be.visible')
   }

   isVisibleCounter(){
      cy.get(footerElements.counter)
      .should('be.visible')
   }

   numberOfItensLefts(number){
      cy.get(footerElements.counter)
      .should('contain', number)
   }

   deleteItens(){
      cy.get(elem.listaNameItem)
      .first()
      .find('button')
      .invoke('show')
      .first()
      .click()
   }

   completedFilters(){
      cy.get(footerElements.filters)
      .find('li a')
      .last()
      .click()
   }

   validarQtdItensLista(qtd){
      cy.get(elem.listaNameItem)
      .should('have.lengthOf', qtd)
   }

   selecionarFilterPeloNome(filtro){
      cy.get(footerElements.filters)
      .find('li a')
      .contains(filtro)
      .click()
   }
}

export default new todomvcAssertions();