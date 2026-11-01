const selectors = {

    //Selectors para conta de usuário já criada e acessada
    botaoContinue: '[data-qa="continue-button"]', 
    botaodeleteAccount: 'a[href*=delete_account]',
    accountDeletedIsVisible: '[data-qa="account-deleted"]',
    butaoLogout: 'a[href*=logout]',
    acessoTelaDeLogin: 'a[href*=login]'
}

module.exports = {


    //Clicando no botão de continuar para acessar a conta de usuário já criada e logada

    acessarHomeDoUsuarioLogado() {
        cy.get(selectors.botaoContinue).click()  
    },

    //Confirmando que o usuário está logado em sua conta criada e acessada

    confirmacaoDeUsuarioLogado(nomeDoUsuarioLogado) {
        cy.contains('a', 'Logged in as')
        .should('be.visible')
        .find('b')
        .should('have.text', nomeDoUsuarioLogado)
    }, 

    //Logout do usuário logado

    logoutDoUsuarioLogado() {
        cy.get(selectors.butaoLogout).click()
    },

    //Confirmando que o usuário deslogou de sua conta com sucesso

    confirmacaoDeUsuarioDeslogado() {
        cy.get(selectors.acessoTelaDeLogin)
        .should('be.visible')
        .and('have.text', ' Signup / Login')
    },

    //Deletando conta de usuário cadastrado

    deletarContaDeUsuario(){
        cy.get(selectors.botaodeleteAccount).click()
    },

    //Confirmando que conta de usuário foi deletada com sucesso
    
    confirmacaoDeUsuarioDeletado(){
        cy.get(selectors.accountDeletedIsVisible)
        .should('be.visible')
        .and('have.text', 'Account Deleted!')
    }
}