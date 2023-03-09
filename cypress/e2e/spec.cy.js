describe('Teste de Login na Unisagrado', () => {
  it('Logar com credenciais válidas', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login');
    cy.get('#username').type(''); // Adicionar o Usuário
    cy.get('#password').type(''); // Adicionar a Senha
    cy.get('#button-login').click();
  })
  it('Validar mensagem de erro em caso de credenciais inválidas', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login');
    cy.get('#username').type(''); // Adicionar o Usuário Errado
    cy.get('#password').type(''); // Adicionar a Senha Errada
    cy.get('#button-login').click();
    cy.contains('Usuário ou senha inválidos').should('be.visible');
  })
  it('Redefinir senha portal do aluno', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login');
    cy.contains('Esqueceu a senha?').click()
    cy.get('#login').type('') // Adicionar o Usuário
    cy.get('#validarUsuario').click();
    cy.contains('Você receberá um email com dados para reset de senha').should('be.visible');
  })
})