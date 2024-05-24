# Plano de Testes de Software

Abaixo estão descritos os cenários de testes das interfaces da aplicação.

Cada cenário de teste segue o seguinte modelo:

- Nome do Cenário de Teste
- Descrição
- Premissas
- Casos de Teste
- Passos dos casos de teste

## Histórico de alterações

| Data       | Alterações                                                                                                   | Autor              |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ------------------ |
| 02/04/2024 | - Criação do Plano de testes<br>- Criação dos Cenários de Testes e seus casos de teste                       | Matheus Guimarães  |
| 22/05/2024 | - Atualização do plano de testes<br>- Adição de cenário de Teste: Listas Personalizadas de Itens para Viagem | Weglesson de Moura |
| 24/05/2024 | - Atualização do plano de testes<br>- Adição de cenário de Teste: Registro de Despesas                        | Maria Fernanda Silva |
|            |                                                                                                              |                    |

## Cenário de Teste: Cadastro de usuário com sucesso

**Descrição:**

- Esse cenário almeja realizar o cadastro com sucesso de um novo usuário na aplicação.

**Premissas:**

- Acesso ao aplicativo
- Dados: Nome, E-mail e Senha

**CT 01 - Abrir o aplicativo**

- Acessar o aplicativo através de um aplicativo móvel/emulador

**CT 02 - Acessar a opção "Cadastre-se" na tela inicial**

- Após carregar a página inicial, selecionar a opção "Cadastre-se"

**CT 03 - Preencher o formulário de cadastro**

- Preencher o campo "Nome"
- Preencher o campo "E-mail"
- Preencher o campo "Senha"

**CT 04 - Clicar no botão "Cadastrar" e validar retorno**

- Clicar no botão "Cadastrar"
- Validar mensagem de "cadastro realizado com sucesso"

## Cenário de Teste: Cadastro de usuário sem sucesso

**Descrição:**

- Esse cenário almeja realizar o cadastro sem sucesso de um usuário na aplicação, ou seja, o formulário deverá recusar a tentativa do cadastro.

**Premissas:**

- Acesso ao aplicativo
- Dados: Nome, E-mail e Senha

**CT 01 - Abrir o aplicativo**

- Acessar o aplicativo através de um aplicativo móvel/emulador

**CT 02 - Acessar a opção "Cadastre-se" na tela inicial**

- Após carregar a página inicial, selecionar a opção "Cadastre-se"

**CT 03 - Preencher apenas dois campos do formulário**

- Preencher o campo "Nome"
- Preencher o campo "E-mail"

**CT 04 - Clicar no botão "Cadastrar" e validar retorno**

- Clicar no botão "Cadastrar"
- Validar mensagem de "todos os campos precisam ser preenchidos para se cadastrar"

## Cenário de Teste: Login de usuário com sucesso

**Descrição:**

- Esse cenário almeja realizar o login com sucesso de um usuário.

**Premissas:**

- Acesso ao aplicativo
- Um usuário já cadastrado na aplicação
- Dados do usuário cadastrado: E-mail e Senha

**CT 01 - Abrir o aplicativo**

- Acessar o aplicativo através de um aplicativo móvel/emulador

**CT 02 - Acessar a opção "Faça Login" na tela inicial**

- Após carregar a página inicial, selecionar a opção "Faça Login"

**CT 03 - Preencher os campos de e-mail e senha**

- Preencher o campo "E-mail"
- Preencher o campo "Senha"

**CT 04 - Clicar no botão "Entrar" e validar retorno**

- Clicar no botão "Entrar"
- Validar mensagem de "Logado com sucesso"

## Cenário de Teste: Login de usuário sem sucesso

**Descrição:**

- Esse cenário almeja realizar o login sem sucesso de um usuário, ou seja, recusar o login do usuário por dados errados inseridos.

**Premissas:**

- Acesso ao aplicativo
- Dados: E-mail e Senha

**CT 01 - Abrir o aplicativo**

- Acessar o aplicativo através de um aplicativo móvel/emulador

**CT 02 - Acessar a opção "Faça Login" na tela inicial**

- Após carregar a página inicial, selecionar a opção "Faça Login"

**CT 03 - Preencher os campos de e-mail e senha com dados errados**

- Preencher o campo "E-mail" com e-mail não cadastrado
- Preencher o campo "Senha" com senha incorreta

**CT 04 - Clicar no botão "Entrar" e validar retorno**

- Clicar no botão "Entrar"
- Validar mensagem de "Login falhou! Confira os dados inseridos e tente novamente".

## Cenário de Teste: Redefinição de senha

**Descrição:**

- Esse cenário almeja realizar a redefinição de senha do usuário.

**Premissas:**

- Acesso ao aplicativo
- Usuário cadastrado na aplicação
- E-mail do usuário cadastrado

**CT 01 - Abrir o aplicativo**

- Acessar o aplicativo através de um aplicativo móvel/emulador

**CT 02 - Acessar a opção "Faça Login" na tela inicial**

- Após carregar a página inicial, selecionar a opção "Faça Login"

**CT 03 - Acessar a opção "Recupere sua senha"**

- Clicar na opção "Recupere sua senha"

**CT 04 - Preencher o campo de "E-mail Cadastrado"**

- Preencher o campo de "E-mail Cadastrado" com o e-mail do usuário

**CT 05 - Acessar a opção de "Enviar link" e validar retorno**

- Clicar no botão "Enviar link"
- Validar mensagem "Caso o e-mail inserido esteja cadastrado em nosso app, enviaremos um link para redefinição de senha"

## Cenário de Teste: Cadastro de Viagem

**Descrição:**

- Esse cenário almeja realizar o cadastro de viagem.

**Premissas:**

- Acesso ao aplicativo
- Usuário logado no aplicativo
- Dados: Cidade, país, região e data da viagem

**CT 01 - Abrir o aplicativo**

- Acessar o aplicativo através de um aplicativo móvel/emulador

**CT 02 - Acessar a opção "Faça Login" na tela inicial**

- Após carregar a página inicial, selecionar a opção "Faça Login"

**CT 03 - Preencher os campos de e-mail e senha**

- Preencher o campo "E-mail"
- Preencher o campo "Senha"

**CT 04 - Clicar no botão "Entrar"**

- Clicar no botão "Entrar"

**CT 05 - Acessar a opção "Cadastro de Viagem"**

- Clicar no botão "Cadastro de Viagem"

**CT 06 - Preencher os campos "Onde você quer ir?" e "Mais informações"**

- Preencher o campo "Onde você quer ir?" com os dados "Cidade", "País" e "Região"
- Preencher o campo "Mais informações?" com a data desejada

**CT 07 - Acessar a opção "Adicionar Viagem" e validar retorno**

- Clicar no botão "Adicionar Viagem"
- Validar mensagem "Viagem cadastrada com sucesso"

**CT 08 - Navegar à página "Home" e validar a nova viagem adicionada**

- Navegar à página Home
- Validar a nova viagem adicionada e os dados que foram inseridos no formulário do caso de teste anterior

## Cenário de Teste: Listas Personalizadas de Itens para Viagem

**Descrição:**

- Esse cenário almeja realizar a inserção, deleção e edição de notas.

**Premissas:**

- Acesso ao aplicativo
- Usuário logado no aplicativo

**CT 01 - Adicionar nota**

- Acessar a página Notas/Listas
- Inserir um texto no campo "Digite sua nota"
- Clicar no botão "Adicionar"
- Validar que a nota foi adicionada à lista

**CT 02 - Editar nota**

- Após adicionar uma nota
- Clicar no ícone de "lápis" referente à nota adicionada
- Validar que o campo "Digite sua nota" foi preenchido com o texto da nota
- Validar que o botão "Adicionar" foi alterado para "Salvar"
- Alterar o texto e clicar no botão "Salvar"
- Validar que a nota foi atualizada
- Validar que o botão "Salvar" foi alterado para "Adicionar"

**CT 03 - Remover nota**

- Após adicionar uma nota
- Clicar no ícone de "lixeira" referente à nota adicionada
- Validar que a nota foi removida da lista
- Se a nota era a última da lista, validar que a mensagem "Não há notas. Fique à vontade para adicionar." foi renderizada

**CT 04 - Marcar nota como concluída**

- Após adicionar uma nota
- Clicar no círculo ao lado da nota
- Validar que o texto da nota foi riscado
- Validar que o círculo alterou de cor

## Cenário de Teste: Registro de Despesas

**Descrição:**

- Esse cenário almeja realizar a inserção, deleção e edição de despesas.

**Premissas:**

- Acesso ao aplicativo
- Usuário logado no aplicativo

**CT 01 - Adicionar despesa**

- Acessar a página Despesas
- Clicar no ícone "+"
- Acessar a página Criar Despesas
- Inserir um texto no campo "Descrição"
- Inserir um valor no campo "Insira um valor"
- Clicar no botão "Adicionar Despesas"
- Validar que a despesa foi adicionada à pagina Despesas

**CT 02 - Editar despesa**

- Após adicionar uma despesa
- Clicar no ícone de "lápis" referente à despesa adicionada
- Validar que o campo "Descrição" foi preenchido com o texto da descrição adicionada anteriormente
- Validar que o campo "Insira um valor" foi preenchido com o valor adicionado anteriormente
- Alterar a descrição ou o valor e clicar no botão "Adicionar"
- Validar que a despesa foi atualizada

**CT 03 - Remover despesa**

- Após adicionar uma despesa
- Clicar no ícone de "lixeira" referente à despesa adicionada
- Validar que a despesa foi removida

**CT 04 - Soma das despesas**

- Após adicionar duas ou mais despesas
- Validar que a soma exibida é a soma exata das despesas registradas.


