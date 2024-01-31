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

class todomvc{
    
   inputText(){
      cy.get(elem.input).type("Priscila").type('{enter}')
      cy.get(elem.input).type("Karen").type('{enter}')
      cy.get(elem.input).type("Suelen").type('{enter}')

   }

   checkToDoFirst(){
      cy.get(elem.listaToDo).first().click()
   }

   checkToDoLast(){
      cy.get(elem.listaToDo).last().click()
   }

   checkToDoContains(buscarTodo){
      cy.get(elem.listaToDoContains).contains(buscarTodo, { matchCase: false }).prev().click()
   }
}

export default new todomvc();