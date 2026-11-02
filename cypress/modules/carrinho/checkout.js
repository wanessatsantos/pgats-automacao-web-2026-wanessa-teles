const selectors = {
    botaoContinueShopping: '#cartModal',
    botaoCart: 'a[href="/view_cart"]',
    botaoProceedToCheckout: 'a.check_out',
    botaoPlaceOrder: 'a[href="/payment"]',
    nomeDoCartaoDoUsuario: '[data-qa="name-on-card"]',
    numeroDoCartaoDoUsuario: '[data-qa="card-number"]', 
    numeroDoCVC: '[data-qa="cvc"]', 
    dataDeValidadeCartaoMes: '[data-qa="expiry-month"]', 
    dataDeValidadeCartaoAno: '[data-qa="expiry-year"]',
    botaoPayAndConfirme: '[data-qa="pay-button"]',
    confirmaOrderPlaced: '[data-qa="order-placed"] > b',
    butaoContinue: '[data-qa="continue-button"]',
}

module.exports = {

    //Adiciona produto ao carrinho
    adicionarProdutoAoCarrinho(idDoProduto){
        cy.get(`a.add-to-cart[data-product-id="${idDoProduto}"]`)
          .filter(':visible') 
          .first()            
          .click({ force: true });
    },
    
    //Assim que adicionar um produto, esse método vai clicar no modal 'Continuar comprando'
    continuarComprando(){
        cy.get(selectors.botaoContinueShopping).click();
    },

    //Acessar a página do carrinho
    acessarCarrinhoDeCompras(){
        cy.get(selectors.botaoCart)
          .filter(':visible') 
          .first()            
          .click({ force: true });
    },

    //Confirmar que acessou a página do carrinho
    confirmacaoDeAcessoAoCarrinho(){
        cy.get('li.active')
          .should('be.visible')
          .and('have.text', 'Shopping Cart');
    },

    //Clicar em 'Proceed to Checkout' para acessar a página de checkout
    acessarPaginaDeDetalhesDaCompra(){

        cy.get(selectors.botaoProceedToCheckout)
          .should('be.visible')
          .click();
    },

    //Confirmar que o usuário acessou a página de checkout
    confirmacaoDeAcessoAPaginaDeDetalhesDaCompra(){

        cy.get('li.active')
          .should('be.visible')
          .and('contain.text', 'Checkout');
    }, 

    //Acessar página de pagamento
    acessarPaginaDePagamento(){
        cy.get(selectors.botaoPlaceOrder).click()
    },
    
    //confirmar que o usuário acessou a página de pagamento
    confirmacaoDeAcessoAoPagamento(){
        cy.get('li.active')
          .should('be.visible')
          .and('contain.text', 'Payment');
    },

    //Preencher dados de Cartão de Crédito
    preencherDadosDoCartaoDeCredito(dadosCartao){
        cy.get(selectors.nomeDoCartaoDoUsuario).type(dadosCartao.nomeDoCartaoDoUsuario);
        cy.get(selectors.numeroDoCartaoDoUsuario).type(dadosCartao.numeroDoCartaoDoUsuario);
        cy.get(selectors.numeroDoCVC).type(dadosCartao.numeroDoCVC);
        cy.get(selectors.dataDeValidadeCartaoMes).type(dadosCartao.dataDeValidadeCartaoMes);
        cy.get(selectors.dataDeValidadeCartaoAno).type(dadosCartao.dataDeValidadeCartaoAno);
    }, 

    //Pagar e Confirmar pagamento
    pagarEConfirmarPagamento(){
        cy.get(selectors.botaoPayAndConfirme).click();
    },

    //Confirmação que o pagamento foi realizado com sucesso
    confirmacaoDePagamentoRealizado(){
       

     //Confirmar Acesso a página de Order Placed
        cy.get(selectors.confirmaOrderPlaced)
          .should('be.visible')
          .and('have.text', 'Order Placed!');

        //Clicar no botão Continue
        cy.get(selectors.butaoContinue).click();
    }

}