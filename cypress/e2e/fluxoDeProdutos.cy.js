
import produtos from '../modules/produtos/produtos.js'
import {faker} from '@faker-js/faker'
import testeDeCadastro from '../fixtures/conjuntoDeDados.json'


describe('Fluxo de Produtos - Trabalho Final De Automação Web com Cypress', () => {

  beforeEach(() => {
     cy.visit('/'); 
  });
  
 
  //Implementação do Caso de Teste 8 - Verificar todos os produtos e detalhes dos produtos
  it('deve acessar a página de produtos, exibir todos os produtos, acessar o primeiro produto e exibir os detalhes', () => {

     //Acessar a tela de produtos
     produtos.acessarSessaoProdutos(); 

     //Verificar que o usuário acessou a página com todos os produtos e navegue na página
     produtos.confirmacaoDeAcessoTelaDeProdutos();

     //Clicar em 'Ver produto' no primeiro produto
     produtos.acessarProduto();

     //Verificar que o usuário acessou a página de detalhes do produto e exibiu todos os detalhes da página
     produtos.confirmacaoDeAcessoAoProdutoSelecionado()

  }); 

  //Implementação do Caso de Teste 9 - Buscar por produto 
  it('deve buscar por produto e exibir produto buscado', () => {

     //Acessar a tela de produtos
     produtos.acessarSessaoProdutos(); 

     //Verificar que o usuário acessou a página com todos os produtos e navegue na página
     produtos.confirmacaoDeAcessoTelaDeProdutos();

    //Buscar por produto
    produtos.buscarPorProduto(
        testeDeCadastro.produtoABuscar.nomeDoProduto
    );
    //Verificar que o produto foi buscado com sucesso
    produtos.confirmacaoDeBuscaPorProduto();

  });


}); 
