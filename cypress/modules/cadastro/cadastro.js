const selectors = {

    //Selectors para acessar a página de cadastro
    nomeDoUsuario: '[data-qa="signup-name"]',
    emailDoUsuario: '[data-qa="signup-email"]',
    botaoDeSingUp: '[data-qa="signup-button"]',

    //Selectors para realizar o cadastro do usuário
    generoDoUsuario: '[id="id_gender1"]',
    senhaDoUsuario: '[data-qa="password"]',
    dia: '[data-qa="days"]',
    mes: '[data-qa="months"]',
    ano: '[data-qa="years"]',
    primeiroNomeDoUsuario: '[data-qa="first_name"]',
    ultimoNomeDoUsuario: '[data-qa="last_name"]',
    empresaDoUsuario: '[data-qa="company"]',
    enderecoDoUsuario: '[data-qa="address"]',
    enderecoDoUsuario2: '[data-qa="address2"]',
    paisDoUsuario: '[data-qa="country"]',
    estadoDoUsuario: '[data-qa="state"]',
    cidadeDoUsuario: '[data-qa="city"]',
    cepDoUsuario: '[data-qa="zipcode"]',
    celularDoUsuario: '[data-qa="mobile_number"]',
    botaoCreateAccount: '[data-qa="create-account"]',
    accoutIsCreated: '[data-qa="account-created"]',
    botaoContinue: '[data-qa="continue-button"]',
    erroEmailExistente: 'form[action="/signup"] p[style*="color: red;"]',
}

module.exports = {

  //Iniando o cadastro do usuário com o primeiro acesso

  acessarTelaDeCadastro(dadosUsuario){

    cy.get(selectors.nomeDoUsuario).type(dadosUsuario.nomeDoUsuario);
    cy.get(selectors.emailDoUsuario).type(dadosUsuario.emailDoUsuario);
    cy.get(selectors.botaoDeSingUp).click()

  },

   //Preenchendo os dados do usuário a ser cadastrado
  cadastrarUsuario(dadosUsuario){

    cy.get(selectors.generoDoUsuario).check();
    cy.get(selectors.senhaDoUsuario).type(dadosUsuario.senhaDoUsuario);
    cy.get(selectors.dia).select(dadosUsuario.dataDeNascimento.dia);
    cy.get(selectors.mes).select(dadosUsuario.dataDeNascimento.mes);
    cy.get(selectors.ano).select(dadosUsuario.dataDeNascimento.ano);
    cy.get(selectors.primeiroNomeDoUsuario).type(dadosUsuario.primeiroNomeDoUsuario);
    cy.get(selectors.ultimoNomeDoUsuario).type(dadosUsuario.ultimoNomeDoUsuario);
    cy.get(selectors.empresaDoUsuario).type(dadosUsuario.empresaDoUsuario);
    cy.get(selectors.enderecoDoUsuario).type(dadosUsuario.enderecoDoUsuario);
    cy.get(selectors.enderecoDoUsuario2).type(dadosUsuario.enderecoDoUsuario2);
    cy.get(selectors.paisDoUsuario).type(dadosUsuario.paisDoUsuario);
    cy.get(selectors.estadoDoUsuario).type(dadosUsuario.estadoDoUsuario);
    cy.get(selectors.cidadeDoUsuario).type(dadosUsuario.cidadeDoUsuario);
    cy.get(selectors.cepDoUsuario).type(dadosUsuario.cepDoUsuario);
    cy.get(selectors.celularDoUsuario).type(dadosUsuario.celularDoUsuario);
    cy.get(selectors.botaoCreateAccount).click();

  },

  //Confirmando que o usuário foi cadastrado com sucesso

  confirmacaoDeCadastroDoUsuario(){

    cy.get(selectors.accoutIsCreated)
    .should('be.visible')
    .and('have.text', 'Account Created!');
  },

  confirmacaoDeUsuarioJaCadastrado(){
    cy.get(selectors.erroEmailExistente)
    .should('be.visible')
    .and('have.text', 'Email Address already exist!');
  }

}