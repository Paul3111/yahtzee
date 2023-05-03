import React from 'react'

describe('<Game />', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/game')
    })

  context('Location', () => {
    it('Goes to Home page', () => {
        cy.url().should('eq', 'http://localhost:3000/game')
    })
})

  context('Buttons', () => {
    xit('Goes to Home page', () => {
      cy.url().should('eq', 'http://localhost:3000/home')
    })

    xit('Finds YAHTZEE on the home page.', () => {
      cy.contains('YAHTZEE').should('be.visible')
    })

    xit('Finds the play button text on the home page.', () => {
      cy.contains('PLAY').should('be.visible')
    })

    xit('Finds the Home button text on the home page.', () => {
      cy.contains('Home').should('be.visible')
    })    

    xit('Finds the Leaderboard button text on the home page.', () => {
      cy.contains('Leaderboard').should('be.visible')
    })    

    xit('Finds the Multiplayer button text on the home page.', () => {
      cy.contains('Multiplayer').should('be.visible')
    })    


      // cy.wait(1000); // Wait for 1 second
      // cy.get('.enter-to-start').should('contain', 'PLAY')
      // cy.get('.navbar-link').scrollIntoView().click();


  })
})