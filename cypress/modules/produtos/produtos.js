const selectors = {

    botaoProducts: 'a[href="/products"]', 
    botaoViewProduct: 'a[href="/product_details/1"]',
    tituloDoProduto: '.product-information h2',
    precoDoProduto: '.product-information span span',
    categoriaDoProduto: '.product-information p:nth-of-type(1)', 
    disponibilidadeDoProduto: '.product-information p:nth-of-type(2)',
    condicaodoProduto: '.product-information p:nth-of-type(3)',
    marcaDoProduto: '.product-information p:nth-of-type(4)',
    campoDeBuscarProduto: '#search_product', 
    botaoLupaDeBusca: '#submit_search'
}

module.exports ={

    //Acessa a lista de todos os produtos
    acessarSessaoProdutos(){
        cy.get(selectors.botaoProducts).click();
    },

    //Confirma que está na sessão de produtos e exiba todos os produtos 
    confirmacaoDeAcessoTelaDeProdutos(){
        cy.contains('All Products')
          .should('be.visible')

        cy.contains('Subscription')
          .scrollIntoView()
          .should('be.visible')

        cy.contains('All Products')
          .scrollIntoView()
          .should('be.visible')
    }, 

    //Acessa o primeiro produto da lista
    acessarProduto(){
        cy.get(selectors.botaoViewProduct).click();
    },

    //Confirmação que o acesso ao primeiro produto foi realizado

    confirmacaoDeAcessoAoProdutoSelecionado(){

        //Garantindo que acessou o produto selecionado
        cy.url().should('include', '/product_details/');

        //Confirmando que as informações de: nome do produto, categoria, preço, dispobonibilidade
        //estão sendo exibidas na tela
        cy.get(selectors.tituloDoProduto).should('be.visible');
        cy.get(selectors.categoriaDoProduto).should('be.visible');
        cy.get(selectors.precoDoProduto).should('be.visible');
        cy.get(selectors.disponibilidadeDoProduto).should('be.visible');
        cy.get(selectors.condicaodoProduto).should('be.visible');
        cy.get(selectors.marcaDoProduto).should('be.visible');

    },

    //Buscar produto específico
    buscarPorProduto(nomeDoProduto){

        cy.get(selectors.campoDeBuscarProduto).type(nomeDoProduto);
        cy.get(selectors.botaoLupaDeBusca).click();
    },

    //Confirmando que a busca foi realizada com sucesso
    confirmacaoDeBuscaPorProduto(){
        
         cy.contains('Searched Products')
          .should('be.visible')

    }



}