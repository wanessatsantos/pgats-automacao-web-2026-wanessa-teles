import {faker} from '@faker-js/faker'
import subscription from '../modules/menu/subscription.js'


describe('Fluxo de Inscrição - Trabalho Final De Automação Web com Cypress', () => {

  beforeEach(() => {
     cy.visit('/'); 
  });
  
  //Implementação do Caso de Teste 10 - Verificar Inscrição na Home Page 
 it('deve inscrever email do usuario', () => {

    const email = faker.internet.email()
     //Acessar a Home Page
      subscription.acessarHomePage();
      cy.location('pathname').should('eq', '/');
     //Increver o email do usuário com sucesso
     subscription.increverEmail(email)  

     //Confirmar que o email foi inscrito com sucesso
     subscription.confirmacacaoDeEmailInscrito();
     

  }); 


  

}); 
