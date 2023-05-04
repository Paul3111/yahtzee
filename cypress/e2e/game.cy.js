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
      // the lines below press Yes on the popup
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

    it('Finds the How to play button text on the game page.', () => {
      cy.contains('How to play').scrollIntoView().click({force:true})
      cy.contains('better').should('be.visible')
      cy.contains('X').scrollIntoView().click({force:true})
    })    

    xit('Opens How to play popup and closes it.', () => {
      cy.contains('Leaderboard').should('be.visible')
    })    

    xit('Finds the Multiplayer button text on the home page.', () => {
      cy.contains('Multiplayer').should('be.visible')
    })    

    
    // cy.wait(1000); // Wait for 1 second
    

  })
})