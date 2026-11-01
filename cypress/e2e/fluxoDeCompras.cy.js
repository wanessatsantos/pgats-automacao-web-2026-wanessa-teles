import cadastro from '../modules/cadastro/cadastro.js'
import usuarioLogado from '../modules/usuarioLogado/usuarioLogado.js'
import login from '../modules/login/login.js'
import produtos from '../modules/produtos/produtos.js'
import {faker} from '@faker-js/faker'
import testeDeCadastro from '../fixtures/conjuntoDeDados.json'


describe('Fluxo de Compras - Trabalho Final De Automação Web com Cypress', () => {

  beforeEach(() => {
    login.acessarTelaDeLogin(); //Carregando o site para acessar a tela de signup/login do usuário
  });
  
  //Implementação do Caso de Teste 1 - Cadastro de usuário e exclusão de conta do usuário recém cadastrado
  it('deve cadastrar um novo usuário e excluir sua conta recém cadastrada', () => {
    
    const usuario = testeDeCadastro.novoUsuario;

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

      //Deletar a conta de usuário recém cadastrada
      usuarioLogado.deletarContaDeUsuario();

      //Verificando que a conta de usuário foi deletada com sucesso
      usuarioLogado.confirmacaoDeUsuarioDeletado();

      //Voltar para a tela inicial do site
      usuarioLogado.acessarHomeDoUsuarioLogado();
  });

  //Implementação do Caso de Teste 2 - Login de usuário com email e senha válidos
  it('deve logar com um usuário cadastrado e deletar sua conta', () => {
    
     const usuario = testeDeCadastro.novoUsuario;

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

      //Deletar a conta de usuário recém cadastrada
      usuarioLogado.deletarContaDeUsuario();

      //Verificando que a conta de usuário foi deletada com sucesso
      usuarioLogado.confirmacaoDeUsuarioDeletado();
      usuarioLogado.acessarHomeDoUsuarioLogado();
    
  });

  //Implementação do Caso de Teste 3 - Login de usuário com email e senha incorretos 
  it('deve exibir uma mensagem de erro ao tentar fazer login com email e senha incorretos', () => {
    
          const usuario = {
              ...testeDeCadastro.novoUsuario,
              emailDoUsuario: faker.internet.email()
          };

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

      //Acessando a tela de login do usuário
      login.acessarTelaDeLogin();

      //Realizando login com email e senha incorretos
      login.loginDoUsuarioComEmailESenhaIncorretos(
        testeDeCadastro.usuarioComDadosIncorretos
      );

      //Verificando que a mensagem de erro 'Your email or password is incorrect!' está visível na tela
      login.confirmacaoDeUsuarioComSenhaESenhaIncorretos();
  });

  //Implementação do Caso de Teste 4 - Logout do usuário logado 
  it.only('deve deslogar de um usuário logado', () => {

    const usuario = testeDeCadastro.usuario2Cadastrado;

      //Logando no usuario cadastrado com email e senha válidos
      login.loginDoUsuario(usuario);

      //Verificando que o login foi realizado com sucesso e que 'Logged in as [nome do usuário recém cadastrado]'está vísivel na tela
      usuarioLogado.confirmacaoDeUsuarioLogado(usuario.nomeDoUsuario);

      //Realizar logout do usuário recém cadastrado
      usuarioLogado.logoutDoUsuarioLogado();

      //Verificando que o usuário deslogou de sua conta com sucesso
      usuarioLogado.confirmacaoDeUsuarioDeslogado();    
  });

  //Implementação do Caso de Teste 5 - Registrar usuário com email já existente 
  it('deve exibir mensagem de erro ao tentar cadastrar um usuário com email já existente', () => {
    
      //Acessando a tela de Signup/Login do usuário
      cadastro.acessarTelaDeCadastro(testeDeCadastro.usuarioJaCadastrado);

      //Verifcando que a mensagem de erro 'Email Address already exist!' está visível na tela
      cadastro.confirmacaoDeUsuarioJaCadastrado();

  });

  //Implementação do Caso de Teste 8 - Verificar todos os produtos e detalhes dos produtos
  it.only('deve deslogar de um usuário logado', () => {

     
  });


  






}); 
