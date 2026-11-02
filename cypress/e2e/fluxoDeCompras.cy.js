import cadastro from '../modules/cadastro/cadastro.js'
import usuarioLogado from '../modules/usuarioLogado/usuarioLogado.js'
import login from '../modules/login/login.js'
import {faker} from '@faker-js/faker'
import testeDeCadastro from '../fixtures/conjuntoDeDados.json'
import checkout from '../modules/carrinho/checkout.js'
import produtos from  '../modules/produtos/produtos.js'

describe('Fluxo De Compras - Trabalho Final De Automação Web com Cypress', () => {

        beforeEach(() => {
            cy.visit('/'); 
        });
        
        //Implementação do Caso de Teste 15 - Registrar Usuário e Realizar Compra
        it('deve registrar um usuário, realizar um compra e deletar a conta do usuário', () => {
            
            const usuario = testeDeCadastro.novoUsuario;
            const pagamento = testeDeCadastro.dadosDoCartao;

//////----------------------------------- FLUXO DE CADASTRO E LOGIN----------------------------------------------------//

            //Acessando página de login
            login.acessarTelaDeLogin();
            //Informando os dados de usuário para fazer signup na tela de cadastro 
            cadastro.acessarTelaDeCadastro({
                nomeDoUsuario: usuario.nomeDoUsuario,
                emailDoUsuario: faker.internet.email()
            });

            //Cadastro do usuário com os dados informados
            cadastro.cadastrarUsuario(usuario)

            //Verificando se o usuário foi cadastrado com sucesso
            cadastro.confirmacaoDeCadastroDoUsuario();

            //Clicar no botão 'Continue' para acessar a conta de usuário recém cadastrada
            usuarioLogado.acessarHomeDoUsuarioLogado();

            //Verificando que 'Logged in as [nome do usuário recém cadastrado]'está vísivel na tela 
            usuarioLogado.confirmacaoDeUsuarioLogado(usuario.nomeDoUsuario);

//////----------------------------------- FLUXO DE CADASTRO E LOGIN----------------------------------------------------//

//////----------------------------------- ACESSAR TODOS OS PRODUTOS----------------------------------------------------//

             //Acessar a tela de produtos
             produtos.acessarSessaoProdutos(); 
            
            //Verificar que o usuário acessou a página com todos os produtos e navegue na página
             produtos.confirmacaoDeAcessoTelaDeProdutos();

//////----------------------------------- ACESSAR TODOS OS PRODUTOS ----------------------------------------------------//
   


//////----------------------------------- REALIZAR COMPRA----------------------------------------------------//

            //Adicionar produtos ao carrinho
            checkout.adicionarProdutoAoCarrinho(1);
            checkout.continuarComprando();
            checkout.adicionarProdutoAoCarrinho(2);
            checkout.continuarComprando();

            //Acessar página do carrinho
            checkout.acessarCarrinhoDeCompras();
            checkout.confirmacaoDeAcessoAoCarrinho();

            //Proceder com o acesso aos detalhes da compra
            checkout.acessarPaginaDeDetalhesDaCompra();
            checkout.confirmacaoDeAcessoAPaginaDeDetalhesDaCompra();

            //Acessar a página de pagamento
            checkout.acessarPaginaDePagamento();
            checkout.confirmacaoDeAcessoAoPagamento();

            //Preencher dados do cartão
            checkout.preencherDadosDoCartaoDeCredito(pagamento);
            
            //Pagar e Confirmar pagamento
            checkout.pagarEConfirmarPagamento();
            checkout.confirmacaoDePagamentoRealizado();
//////----------------------------------- REALIZAR COMPRA----------------------------------------------------//


   //////----------------------------------- DELETAR CONTA E CONFIMARR QUE CONTA FOI DELETADA COM SUCESSO----------------------------------------------------//
            //Deletar a conta de usuário recém cadastrada
            usuarioLogado.deletarContaDeUsuario();

            //Verificando que a conta de usuário foi deletada com sucesso
            usuarioLogado.confirmacaoDeUsuarioDeletado();

            //Voltar para a tela inicial do site
            usuarioLogado.acessarHomeDoUsuarioLogado();
        });

        ////Implementação do Caso de Teste 15 - Logar em usuário e Realizar Compra
         it('deve logar em um usuário cadastrado, realizar um compra e deletar a conta do usuário', () => {
            
            const usuario = testeDeCadastro.novoUsuario;
            const pagamento = testeDeCadastro.dadosDoCartao;

//////----------------------------------- FLUXO DE CADASTRO E LOGIN----------------------------------------------------//

            //Acessando página de login
            login.acessarTelaDeLogin();
        
            //Acessando página de login
            login.acessarTelaDeLogin();
            //Informando os dados de usuário para fazer signup na tela de cadastro 
            cadastro.acessarTelaDeCadastro({
                nomeDoUsuario: usuario.nomeDoUsuario,
                emailDoUsuario: usuario.emailDoUsuario
            });

            //Cadastro do usuário com os dados informados
            cadastro.cadastrarUsuario(usuario)

            //Verificando se o usuário foi cadastrado com sucesso
            cadastro.confirmacaoDeCadastroDoUsuario();

            //Clicar no botão 'Continue' para acessar a conta de usuário recém cadastrada
            usuarioLogado.acessarHomeDoUsuarioLogado();

            //Realizar logout do usuário recém cadastrado
            usuarioLogado.logoutDoUsuarioLogado();

            //Verificando que o usuário deslogou de sua conta com sucesso
            usuarioLogado.confirmacaoDeUsuarioDeslogado();

            //Realizando login com email e senha incorretos
            login.loginDoUsuario(
                testeDeCadastro.usuarioComDadosValidos
            );

            //Verificando que o login foi realizado com sucesso e que 'Logged in as [nome do usuário recém cadastrado]'está vísivel na tela
            usuarioLogado.confirmacaoDeUsuarioLogado(usuario.nomeDoUsuario);

//////----------------------------------- FLUXO DE CADASTRO E LOGIN----------------------------------------------------//

//////----------------------------------- ACESSAR TODOS OS PRODUTOS----------------------------------------------------//

             //Acessar a tela de produtos
             produtos.acessarSessaoProdutos(); 
            
            //Verificar que o usuário acessou a página com todos os produtos e navegue na página
             produtos.confirmacaoDeAcessoTelaDeProdutos();

//////----------------------------------- ACESSAR TODOS OS PRODUTOS ----------------------------------------------------//
   


//////----------------------------------- REALIZAR COMPRA----------------------------------------------------//

            //Adicionar produtos ao carrinho
            checkout.adicionarProdutoAoCarrinho(1);
            checkout.continuarComprando();
            checkout.adicionarProdutoAoCarrinho(2);
            checkout.continuarComprando();

            //Acessar página do carrinho
            checkout.acessarCarrinhoDeCompras();
            checkout.confirmacaoDeAcessoAoCarrinho();

            //Proceder com o acesso aos detalhes da compra
            checkout.acessarPaginaDeDetalhesDaCompra();
            checkout.confirmacaoDeAcessoAPaginaDeDetalhesDaCompra();

            //Acessar a página de pagamento
            checkout.acessarPaginaDePagamento();
            checkout.confirmacaoDeAcessoAoPagamento();

            //Preencher dados do cartão
            checkout.preencherDadosDoCartaoDeCredito(pagamento);
            
            //Pagar e Confirmar pagamento
            checkout.pagarEConfirmarPagamento();
            checkout.confirmacaoDePagamentoRealizado();
//////----------------------------------- REALIZAR COMPRA----------------------------------------------------//


   //////----------------------------------- DELETAR CONTA E CONFIMARR QUE CONTA FOI DELETADA COM SUCESSO----------------------------------------------------//
            //Deletar a conta de usuário recém cadastrada
            usuarioLogado.deletarContaDeUsuario();

            //Verificando que a conta de usuário foi deletada com sucesso
            usuarioLogado.confirmacaoDeUsuarioDeletado();

            //Voltar para a tela inicial do site
            usuarioLogado.acessarHomeDoUsuarioLogado();
        });


});