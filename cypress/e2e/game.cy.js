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
    beforeEach(() => {
      cy.visit('http://localhost:3000/game')
      cy.on('window:confirm', (message) => {
        cy.get('.start-game-popup__btn').click()
        expect(message).to.equal('Ready?')
        return true
      })
      })

    it('Finds YAHTZEE on the game page.', () => {
      cy.contains('YAHTZEE').should('be.visible')
    })

    it('Finds Home button on the game page.', () => {
      cy.contains('YAHTZEE').should('be.visible')
    })

    it('Finds the ROLL button on the game page.', () => {
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').should('be.visible')
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

    // cy.get('img[src="/path/to/image.png"]').should('have.attr', 'alt', 'My image')
    // cy.get('img[src="/path/to/image.png"]').should('have.css', 'width', '100px')
    // cy.get('img[src="/path/to/image.png"]').should('have.css', 'height', '100px') 
    // cy.wait(1000); // Wait for 1 second
    // cy.get('.enter-to-start').should('contain', 'PLAY')
    // cy.get('.navbar-link').scrollIntoView().click();


  })
})