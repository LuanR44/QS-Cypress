describe('Teste de Login no Twitter', () => {
  it('should log in successfully', () => {
    // Acessar o site do Twitter
    cy.visit('https://twitter.com/i/flow/login')
    
    // Clicar no input de login
    cy.contains('Phone').click()

    // Esperar até que o campo de login esteja visível
    cy.get('input[type="text"]').should('be.visible')

    // Inserir o login e senha
    cy.get('input[type="text"]').type(Cypress.env('usuario_twitter'))

    //Clicar no botão Next
    cy.contains('Next').click()

    // Esperar até que o campo de senha esteja visível
    cy.get('input[type="password"]').type(Cypress.env('senha_twitter'))

    // Clicar no botão de login
    cy.get('div[data-testid="LoginForm_Login_Button"]').click()

    // Verificar se o login foi realizado com sucesso
    cy.url().should('include', '/home')
  })
})