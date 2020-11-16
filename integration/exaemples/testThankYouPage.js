/// <reference types="cypress" />

describe('Thank You Page', () =>{

    

    it('Go to the site button', () =>
    {
          
          cy.visit('https://automation.herolo.co.il/thank-you/')
          cy.get('.thankYou__button-avz2fr-9').should('be.visible')
          cy.get('.thankYou__button-avz2fr-9').trigger('mouseover')
          cy.get('.thankYou__button-avz2fr-9').trigger('click')
    });


    

    
    it('Back button ', () =>
    {
        
          cy.visit('https://automation.herolo.co.il/thank-you/')
          cy.get('.thankYou__backLink-avz2fr-10 > span').should('be.visible')
          cy.get('.thankYou__backLink-avz2fr-10 > span').trigger('mouseover')
          cy.get('.thankYou__backLink-avz2fr-10 > span').trigger('click').click()
          cy.url().should('eq','https://automation.herolo.co.il/')


    
    });



    it(' Social media button', () =>
    {
          
          cy.visit('https://automation.herolo.co.il/thank-you/')
          cy.get('[href="https://www.facebook.com/Herolofrontend"] > img').should('be.visible')
          cy.get('[href="https://www.facebook.com/Herolofrontend"] > img').trigger('mouseover')
          cy.get('[href="https://www.facebook.com/Herolofrontend"] > img').trigger('click')
          cy.get('[href="https://www.instagram.com/herolofrontend/"]').should('be.visible')
          cy.get('[href="https://www.instagram.com/herolofrontend/"]').trigger('mouseover')
          cy.get('[href="https://www.instagram.com/herolofrontend/"]').trigger('click')
          cy.get('[href="https://www.linkedin.com/company/herolo/"] > img').should('be.visible')
          cy.get('[href="https://www.linkedin.com/company/herolo/"] > img').trigger('mouseover')
          cy.get('[href="https://www.linkedin.com/company/herolo/"] > img').trigger('click')
       
          

          
    
    });


   

});
