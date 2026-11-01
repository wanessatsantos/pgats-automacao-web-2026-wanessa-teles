const selectors = {
    //Selectors para acessar a conta de usuário
    acessoTelaDeLogin: 'a[href*=login]',
    emailDoUsuario: '[data-qa="login-email"]',
    passwordDoUsuario: '[data-qa="login-password"]',
    botaoDeLogin: '[data-qa="login-button"]',
    erroLoginInvalido: 'form p[style*="color: red;"]',
}

module.exports = {

    //Acesssando a tela de login do usuário
    acessarTelaDeLogin() {
        cy.visit('/');
        cy.get(selectors.acessoTelaDeLogin).click()
    },

    //Realizadno login de usuário cadastrado 

    loginDoUsuario(dadosUsuario) {
        cy.get(selectors.emailDoUsuario).type(dadosUsuario.emailDoUsuario);
        cy.get(selectors.passwordDoUsuario).type(dadosUsuario.senhaDoUsuario);
        cy.get(selectors.botaoDeLogin).click();
    },

    loginDoUsuarioComEmailESenhaIncorretos(dadosUsuario) {
        cy.get(selectors.emailDoUsuario).type(dadosUsuario.emailDoUsuario);
        cy.get(selectors.passwordDoUsuario).type(dadosUsuario.senhaDoUsuario);
        cy.get(selectors.botaoDeLogin).click();
    },

    confirmacaoDeUsuarioComSenhaESenhaIncorretos(){
        cy.get(selectors.erroLoginInvalido)
        .should('be.visible')
        .and('have.text', 'Your email or password is incorrect!')   
    }
}