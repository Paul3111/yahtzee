import React from 'react'

describe('<Game />', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/game')
    })

  context('Location', () => {
    it('Goes to Game page', () => {
        cy.url().should('eq', 'http://localhost:3000/game')
    })

    it('Deactivates background music.', () => {
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('Music').should('be.visible');
      // cy.wait(1000);
      // cy.get('ToggleMusic', {timeout: 1000}).click();
      cy.get('label[for="ToggleMusic"]').click({force:true});
      // cy.get('audio').should('not.exist')
    })

    xit('Deactivates music and audio does not run.', () => {
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('Music').should('be.visible');
      cy.get('label[for="ToggleMusic"]').click({force:true});
      // cy.get('audio').should('not.exist')
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

    it('Rolls the die and selects a room.', () => {
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').should('be.visible').click()
      cy.contains('Threes').click()
    })    

    it('Rolls the die and selects a room - 2 cycles.', () => {
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').should('be.visible').click()
      cy.contains('Threes').click()
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').should('be.visible').click()
      cy.contains('Twos').click()
    })     

    it('Rolls the die and selects a room - 13 cycles.', () => {
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').click()
      cy.contains('Ones').click()
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').click()
      cy.contains('Twos').click()
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').click()
      cy.contains('Threes').click()
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').click()
      cy.contains('Fours').click()
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').click()
      cy.contains('Fives').click()
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').click()
      cy.contains('Sixes').click()
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').click()
      cy.contains('Three of a kind').click()
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').click()
      cy.contains('Four of a kind').click()
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').click()
      cy.contains('Full House').click()
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').click()
      cy.contains('Small Straight').click()
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').click()
      cy.contains('Large Straight').click()
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').click()
      cy.contains('Yahtzee').click()
      cy.get('.wrapper').scrollIntoView().click();
      cy.contains('ROLL').click()
      cy.contains('Chance').click()
    })
    



  })
})