<h1>Plano de Testes de Software</h1>
<p>Abaixo estão descritos os cenários de testes das interfaces da aplicação.</p>
<p>Cada cenário de teste segue o seguinte modelo: </p>
<ul>
  <li><p>Nome do Cenário de Teste</p></li>
  <li><p>Descrição</p></li>
  <li><p>Premissas</p></li>
  <li><p>Casos de Teste</p></li>
  <li><p>Passos dos casos de teste</p></li>
</ul>
<br>
<br>
<h2>Histórico de alterações</h2>
<table>
   <tr>
     <th>Data</th>
     <th>Alterações</th>
     <th>Autor</th>
   </tr>
   <tr>
     <td>02/04/2024</td>
     <td>
       <ul>
         <li>Criação do Plano de testes</li>
         <li>Criação dos Cenários de Testes e seus casos de teste</li>
       </ul>
     </td>
     <td>Matheus Guimarães</td>
   </tr>
  <tr>
     <td></td>
     <td></td>
     <td></td>
   </tr>
</table>
<br>
<br>
<br>
<div>
  <h2>Cenário de Teste: Cadastro de usuário com sucesso</h2>
  <p><b>Descrição:</b><br>- Esse cenário almeja realizar o cadastro com sucesso de um novo usuário na aplicação.</p>
  <p><b>Premissas:</b></p>
  <ul>
    <li><p>Acesso ao aplicativo</p></li>
    <li><p>Dados: Nome, E-mail e Senha</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 01 - Abrir o aplicativo</b></p>
  <ul>
    <li><p>Acessar o aplicativo atravès de um aplicativo móvel/emulador</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 02 - Acessar a opção "cadastre-se" na tela inicial</b></p>
  <ul>
    <li><p>Após carregar a página inicial, selecionar a opção "Cadastre-se"</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 03 - Preencher o formulário de cadastro</b></p>
  <ul>
    <li><p>Preencher o campo "Nome"</p></li>
    <li><p>Preencher o campo "E-mail"</p></li>
    <li><p>Preencher o campo "Senha"</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 04 - Clicar no botão "Cadastrar" e validar retorno</b></p>
  <ul>
    <li><p>Clicar no botão "Cadastrar"</p></li>
    <li><p>Validar mensagem de "cadastro realizado com sucesso"</p></li>
  </ul>
</div>
<br>
<br>
<div>
  <h2>Cenário de Teste: Cadastro de usuário sem sucesso</h2>
  <p><b>Descrição:</b><br>- Esse cenário almeja realizar o cadastro sem sucesso de um usuário na aplicação, ou seja, o formulário deverá recusar a tentativa do cadastro.</p>
  <p><b>Premissas:</b></p>
  <ul>
    <li><p>Acesso ao aplicativo</p></li>
    <li><p>Dados: Nome, E-mail e Senha</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 01 - Abrir o aplicativo</b></p>
  <ul>
    <li><p>Acessar o aplicativo atravès de um aplicativo móvel/emulador</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 02 - Acessar a opção "cadastre-se" na tela inicial</b></p>
  <ul>
    <li><p>Após carregar a página inicial, selecionar a opção "Cadastre-se"</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 03 - Preencher apenas dois campos do formulário</b></p>
  <ul>
    <li><p>Preencher o campo "Nome"</p></li>
    <li><p>Preencher o campo "E-mail"</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 04 - Clicar no botão "Cadastrar" e validar retorno</b></p>
  <ul>
    <li><p>Clicar no botão "Cadastrar"</p></li>
    <li><p>Validar mensagem de "todos os campos precisam ser preenchidos para se cadastrar"</p></li>
  </ul>
</div>
<br>
<br>
<div>
  <h2>Cenário de Teste: Login de usuário com sucesso</h2>
  <p><b>Descrição:</b><br>- Esse cenário almeja realizar o login com sucesso de um usuário.</p>
  <p><b>Premissas:</b></p>
  <ul>
    <li><p>Acesso ao aplicativo</p></li>
    <li><p>Um usuário já cadastrado na aplicação</p></li>
    <li><p>Dados do usuário cadastrado: E-mail e Senha</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 01 - Abrir o aplicativo</b></p>
  <ul>
    <li><p>Acessar o aplicativo atravès de um aplicativo móvel/emulador</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 02 - Acessar a opção "Faça Login" na tela inicial</b></p>
  <ul>
    <li><p>Após carregar a página inicial, selecionar a opção "Faça Login"</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 03 - Preencher os campos de e-mail e senha</b></p>
  <ul>
    <li><p>Preencher o campo "E-mail"</p></li>
    <li><p>Preencher o campo "Senha"</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 04 - Clicar no botão "Entrar" e validar retorno</b></p>
  <ul>
    <li><p>Clicar no botão "Entrar""</p></li>
    <li><p>Validar mensagem de "Logado com sucesso"</p></li>
  </ul>
</div>
<br>
<br>
<div>
  <h2>Cenário de Teste: Login de usuário sem sucesso</h2>
  <p><b>Descrição:</b><br>- Esse cenário almeja realizar o login sem sucesso de um usuário, ou seja, recusar o login do usuário por dados errados inseridos</p>
  <p><b>Premissas:</b></p>
  <ul>
    <li><p>Acesso ao aplicativo</p></li>
    <li><p>Dados: E-mail e Senha</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 01 - Abrir o aplicativo</b></p>
  <ul>
    <li><p>Acessar o aplicativo atravès de um aplicativo móvel/emulador</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 02 - Acessar a opção "Faça Login" na tela inicial</b></p>
  <ul>
    <li><p>Após carregar a página inicial, selecionar a opção "Faça Login"</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 03 - Preencher os campos de e-mail e senha com dados errados</b></p>
  <ul>
    <li><p>Preencher o campo "E-mail" com e-mail não cadastrado</p></li>
    <li><p>Preencher o campo "Senha" com senha incorreta</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 04 - Clicar no botão "Entrar" e validar retorno</b></p>
  <ul>
    <li><p>Clicar no botão "Entrar""</p></li>
    <li><p>Validar mensagem de "Login falhou! Confira os dados inseridos e tente novamente".</p></li>
  </ul>
</div>
<br>
<br>
<div>
  <h2>Cenário de Teste: Redefinição de senha</h2>
  <p><b>Descrição:</b><br>- Esse cenário almeja realizar a redefinição de senha do usuário.</p>
  <p><b>Premissas:</b></p>
  <ul>
    <li><p>Acesso ao aplicativo</p></li>
    <li><p>Usuário cadastrado na aplicação</p></li>
    <li><p>E-mail do usário cadastrado</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 01 - Abrir o aplicativo</b></p>
  <ul>
    <li><p>Acessar o aplicativo atravès de um aplicativo móvel/emulador</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 02 - Acessar a opção "Faça Login" na tela inicial</b></p>
  <ul>
    <li><p>Após carregar a página inicial, selecionar a opção "Faça Login"</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 03 - Acessar a opção "Recupere sua senha"</b></p>
  <ul>
    <li><p>Clicar na opção "Recupere sua senha"</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 04 - Preencher o campo de "E-mail Cadastrado"</b></p>
  <ul>
    <li><p>Preencher o campo de "E-mail Cadastrado" com o e-mail do usuário</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 05 - Acessar a opção de "Enviar link" e validar retorno</b></p>
  <ul>
    <li><p>Clicar no botão "Enviar link"</p></li>
    <li><p>Validar mensagem "Caso o e-mail inserido esteja cadastrado em nosso app, enviaremos um link para redefinição de senha"</p></li>
  </ul>
</div>
<br>
<br>
<div>
  <h2>Cenário de Teste: Cadastro de Viagem</h2>
  <p><b>Descrição:</b><br>- Esse cenário almeja realizar o cadastro de viagem.</p>
  <p><b>Premissas:</b></p>
  <ul>
    <li><p>Acesso ao aplicativo</p></li>
    <li><p>Usuário logado no aplicativo</p></li>
    <li><p>Dados: Cidade, país, região e data da viagem</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 01 - Abrir o aplicativo</b></p>
  <ul>
    <li><p>Acessar o aplicativo atravès de um aplicativo móvel/emulador</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 02 - Acessar a opção "Faça Login" na tela inicial</b></p>
  <ul>
    <li><p>Após carregar a página inicial, selecionar a opção "Faça Login"</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 03 - Preencher os campos de e-mail e senha</b></p>
  <ul>
    <li><p>Preencher o campo "E-mail"</p></li>
    <li><p>Preencher o campo "Senha"</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 04 - Clicar no botão "Entrar"</b></p>
  <ul>
    <li><p>Clicar no botão "Entrar""</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 05 - Acessar a opção "Cadastro de Viagem"</b></p>
  <ul>
    <li><p>Clicar no botão "Cadastro de Viagem""</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 06 - Preencher os campos "Onde você quer ir?" e "Mais informações"</b></p>
  <ul>
    <li><p>Preencher o campo "Onde você quer ir?" com os dados "Cidade", "País" e "Região"</p></li>
    <li><p>Preencher o campo "Mais informações?" com a data desejada</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 07 - Acessar a opção "Adicionar Viagem" e validar retorno</b></p>
  <ul>
    <li><p>Preencher o campo "Onde você quer ir?" com os dados "Cidade", "País" e "Região"</p></li>
    <li><p>Preencher o campo "Mais informações?" com a data desejada</p></li>
    <li><p>Validar mensagem "Viagem cadastrada com sucesso"</p></li>
  </ul>
  <br>
  <br>
  <p><b>CT 08 - Navegar à página "Home" e validar a nova viagem adicionada</b></p>
  <ul>
    <li><p>Navegar à página home</p></li>
    <li><p>Validar a nova viagem adicionada e os dados que foram inseridos no formulário do caso de teste anterior</p></li>
  </ul>
</div>

