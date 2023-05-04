import React from 'react'

describe('<Leaderboard />', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/leaderboard')
    })

  context('Location', () => {
    it('Goes to Leaderboard page', () => {
        cy.url().should('eq', 'http://localhost:3000/leaderboard')
    })

    it('Finds LEADERBOARD on the game page.', () => {
      cy.contains('LEADERBOARD').should('be.visible')
    })
})

  context('Buttons', () => {
  
    it('Finds the Home button text on the home page.', () => {
      cy.contains('Home').should('be.visible')
    })    

    it('Finds the Multiplayer(BETA) button text on the home page.', () => {
      cy.contains('Multiplayer(BETA)').should('be.visible')
    })    

    // cy.get('img[src="/path/to/image.png"]').should('have.attr', 'alt', 'My image')
    // cy.get('img[src="/path/to/image.png"]').should('have.css', 'width', '100px')
    // cy.get('img[src="/path/to/image.png"]').should('have.css', 'height', '100px') 
    // cy.wait(1000); // Wait for 1 second
    // cy.get('.enter-to-start').should('contain', 'PLAY')
    // cy.get('.navbar-link').scrollIntoView().click();


  })
})