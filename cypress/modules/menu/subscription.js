const selectors = {

    botaoHome: '.shop-menu a[href="/"]', 
    campoSusbscribeEmail: '#susbscribe_email',
    botaoSusbscribe: '#subscribe',
    mensagemDeSucesso: '.alert-success'
}

module.exports = {

    //Acessa a Home Page
    acessarHomePage(){
        cy.get(selectors.botaoHome).click();
    },

    //Realizar a inscrição do email na plataforma
    increverEmail(emailDoUsuario){

       cy.location('pathname').should('eq', '/');

        // Dar um scroll na página até o campo de email
        cy.get(selectors.campoSusbscribeEmail)
          .should('be.visible')
          .and('not.be.disabled')
          .clear()
          .type(emailDoUsuario, { force: true, delay: 0 });

        // Garante que o botão está visível, faz o scroll até ele e clica de forma segura
        cy.get(selectors.botaoSusbscribe)
          .should('be.visible')
          .click({ force: true });
    }, 

    //Confirmação de que o email foi inscrito com sucesso
    confirmacacaoDeEmailInscrito(){

        cy.get(selectors.mensagemDeSucesso, { timeout: 10000 })
          .should('have.text', 'You have been successfully subscribed!');

    }


}