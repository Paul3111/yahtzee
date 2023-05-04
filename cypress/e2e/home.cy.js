import React from 'react'

describe('<Home />', () => {
  context('Location', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/home')
    })

    it('Goes to Home page', () => {
      cy.url().should('eq', 'http://localhost:3000/home')
    })

    it('Finds Y on the home page.', () => {
      cy.get('img[src="/yahtzee_letters/Y.png"]').should('exist')
    })

    it('Finds the play button text on the home page.', () => {
      cy.contains('PLAY').should('be.visible')
    })

    it('Finds the Home button text on the home page.', () => {
      cy.contains('Arcade Mode').should('be.visible')
    })    

    it('Finds the Leaderboard button text on the home page.', () => {
      cy.contains('Leaderboard').should('be.visible')
    })    

    it('Finds the Multiplayer button text on the home page.', () => {
      cy.contains('Multiplayer').should('be.visible')
    })    
  })
})