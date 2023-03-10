describe('Teste de Login na Unisagrado', () => {
  it('Logar com credenciais válidas', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login');
    cy.get('#username').type(Cypress.env('usuario_certo')); // Adicionar o Usuário
    cy.get('#password').type(Cypress.env('senha_usuario_certo')); // Adicionar a Senha
    cy.get('#button-login').click();
  })
  it('Validar mensagem de erro em caso de credenciais inválidas', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login');
    cy.get('#username').type(Cypress.env('usuario_errado')); // Adicionar o Usuário Errado
    cy.get('#password').type(Cypress.env('senha_usuario_errado')); // Adicionar a Senha Errada
    cy.get('#button-login').click();
    cy.contains('Usuário ou senha inválidos').should('be.visible');
  })
  it('Redefinir senha portal do aluno', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login');
    cy.contains('Esqueceu a senha?').click()
    cy.get('#login').type(Cypress.env('usuario_certo')) // Adicionar o Usuário
    cy.get('#validarUsuario').click();
    cy.contains('Você receberá um email com dados para reset de senha').should('be.visible');
  })
  it('Redefinir senha portal do aluno com usuário inválido', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login');
    cy.contains('Esqueceu a senha?').click()
    cy.get('#login').type(Cypress.env('usuário_redefinir_errado')) // Adicionar o Usuário Errado
    cy.get('#validarUsuario').click();
    cy.contains('Seu número de matrícula não existe ou foi digitado incorretamente ou aluno não está ativo').should('be.visible');
  })
  it('Redefinir senha portal do aluno com usuário em branco', () => {
    cy.visit('https://unisagrado.lyceum.com.br/AOnline3/#/login');
    cy.contains('Esqueceu a senha?').click()
    cy.get('#validarUsuario').click();
    cy.contains('Por favor, preencha o campo usuário').should('be.visible');
  })
})