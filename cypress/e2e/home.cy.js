import React from 'react'
// import Home from './Home'

describe('<Home />', () => {
  context('Location', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/home')
    })

    it('Goes to Home page', () => {
      cy.url().should('eq', 'http://localhost:3000/home')
    })

    it('Finds the play button text on the home page.', () => {
      // cy.wait(1000); // Wait for 1 second
      // cy.get('.enter-to-start').should('contain', 'PLAY')
      cy.contains('YAHTZEE').should('be.visible')
    })


  })
})