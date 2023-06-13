describe('Teste End-to-End', () => {
    it('Teste 1: Visita Página', () => {
      // Abre o site
      cy.visit('http://localhost:5000/')
    })
  
    it('Teste 2: Verifica item na página', () => {
      // Verifica se existe o livro desejado
      cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
    })
  
    it('Teste 3: Calcula Frete', () => {    
      // Calcula o frete
      cy.get('[data-id=3]').within(() => {
        cy.get('input').type('10000-000')
        cy.contains('Calcular Frete').click().then
        cy.wait(2000)
      })
      cy.get('.swal-text').contains('O frete é: R$')
  
      // Fecha o pop-up com o preço do frete
      cy.get('.swal-button').click()
    })
  
    it('Teste 4: Compra de livro', () => {
      // Simula a compra de um livro
      cy.contains('Comprar').click()
  
      // Aguarda a exibição do pop-up de confirmação
      cy.wait(2000)
  
      // Verifica se a mensagem de compra realizada com sucesso está presente no pop-up
      cy.get('.swal-text').should('contain.text', 'Sua compra foi realizada com sucesso')
  
      // Fecha o pop-up de confirmação
      cy.get('.swal-button').click()
    })
  })
  