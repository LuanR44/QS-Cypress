describe('Teste de Login na Unisagrado', () => {
  it('Logar com credenciais válidas', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login'); // Acessar o Portal do Aluno
    cy.get('#username').type(Cypress.env('usuario_certo')); // Adicionar o Usuário do Aluno
    cy.get('#password').type(Cypress.env('senha_usuario_certo')); // Adicionar a Senha do Usuário
    cy.get('#button-login').click(); // Clicar no botão Login 
  })
  it('Validar mensagem de erro em caso de credenciais inválidas', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login'); // Acessar o Portal do Aluno
    cy.get('#username').type(Cypress.env('usuario_errado')); // Adicionar o Usuário Errado 
    cy.get('#password').type(Cypress.env('senha_usuario_errado')); // Adicionar a Senha Errada 
    cy.get('#button-login').click(); // Clicar no botão Login
    cy.contains('Usuário ou senha inválidos').should('be.visible'); // Validar a mensagem de erro 
  })
  it('Redefinir senha portal do aluno', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login'); // Acessar o Portal do Aluno
    cy.contains('Esqueceu a senha?').click() // Clicar no link "Esqueceu a senha?"
    cy.get('#login').type(Cypress.env('usuario_certo')) // Adicionar o Usuário do Aluno
    cy.get('#validarUsuario').click(); // Clicar no botão Validar Usuário
    cy.contains('Você receberá um email com dados para reset de senha').should('be.visible'); // Validar a mensagem de sucesso
  })
  it('Redefinir senha portal do aluno com usuário inválido', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login');
    cy.contains('Esqueceu a senha?').click() // Clicar no link "Esqueceu a senha?"
    cy.get('#login').type(Cypress.env('usuario_redefinir_errado')) // Adicionar o Usuário Errado
    cy.get('#validarUsuario').click(); // Clicar no botão Validar Usuário
    cy.contains('Seu número de matrícula não existe ou foi digitado incorretamente ou aluno não está ativo').should('be.visible'); // Validar a mensagem de erro
  })
  it('Redefinir senha portal do aluno com usuário em branco', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login'); // Acessar o Portal do Aluno
    cy.contains('Esqueceu a senha?').click() // Clicar no link "Esqueceu a senha?" 
    cy.get('#validarUsuario').click(); // Clicar no botão Validar Usuário
    cy.contains('Por favor, preencha o campo usuário').should('be.visible'); // Validar a mensagem de erro
  })
  it ('Logando com credenciais "."', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login'); // Acessar o Portal do Aluno
    cy.get('#username').type('.'); // Adicionar o Usuário Errado
    cy.get('#password').type('.'); // Adicionar a Senha Errada
    cy.get('#button-login').click(); // Clicar no botão Login
    cy.contains('Servidor indisponível! Por favor, tente novamente mais tarde').should('be.visible'); // Validar a mensagem de erro
  })
  it ('Logando com credenciais "null"', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login'); // Acessar o Portal do Aluno
    cy.get('#username').type('null'); // Adicionar o Usuário Errado
    cy.get('#password').type('null'); // Adicionar a Senha Errada
    cy.get('#button-login').click(); // Clicar no botão Login
    cy.contains('Usuário ou senha inválidos').should('be.visible'); // Validar a mensagem de erro
  })
  it ('Logando com credenciais "undefined"', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login'); // Acessar o Portal do Aluno
    cy.get('#username').type('undefined'); // Adicionar o Usuário Errado
    cy.get('#password').type('undefined'); // Adicionar a Senha Errada
    cy.get('#button-login').click(); // Clicar no botão Login
    cy.contains('Usuário ou senha inválidos').should('be.visible'); // Validar a mensagem de erro
  })
  it ('Logando com credenciais "0"', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login'); // Acessar o Portal do Aluno
    cy.get('#username').type('0'); // Adicionar o Usuário Errado
    cy.get('#password').type('0'); // Adicionar a Senha Errada
    cy.get('#button-login').click(); // Clicar no botão Login
    cy.contains('Usuário ou senha inválidos').should('be.visible'); // Validar a mensagem de erro
  })
})