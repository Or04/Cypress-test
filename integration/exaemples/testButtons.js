/// <reference types="cypress" />



describe('WhatsApp button', () =>{

    

    it('Button should be visible and trigger mouseover & click', () =>
    {
          
          cy.visit('https://automation.herolo.co.il')
          cy.get('.callUsWhatsapp__BtnWhatsapp-rkzbui-0').should('be.visible')
          cy.get('.callUsWhatsapp__BtnWhatsapp-rkzbui-0').trigger('mouseover')
          cy.get('.callUsWhatsapp__BtnWhatsapp-rkzbui-0').trigger('click')
          

          
    
    });

});

describe('Page up button', () =>{

    it('scroll to the top of the page and disappear', () =>
    {
          
          cy.visit('https://automation.herolo.co.il')
          cy.scrollTo(0, 5000)
          cy.get('.backToTop__BtnGoUp-z83xj1-0').should('be.visible')
          cy.get('.backToTop__BtnGoUp-z83xj1-0').trigger('mouseover')
          cy.get('.backToTop__BtnGoUp-z83xj1-0').trigger('click').click()
          cy.get('.backToTop__BtnGoUp-z83xj1-0').should('not.be.visible')


          
          

          
    
    });
    
});


 describe('Social media footer', () =>{

    it('linkdein', () =>
    {
          
          cy.visit('https://automation.herolo.co.il')
          cy.scrollTo(0, 5000)
          cy.get('.gcUHBk').should('be.visible')
          cy.get('.gcUHBk').trigger('mouseover')
          cy.get('.gcUHBk').trigger('click')


          
          

    
    });
   
    it('WhatsApp', () =>
    {
          
          cy.visit('https://automation.herolo.co.il')
          cy.scrollTo(0, 5000)
          cy.get('.jOgeKm').should('be.visible')
          cy.get('.jOgeKm').trigger('mouseover')
          cy.get('.jOgeKm').trigger('click')


          
          

    });
    
    it('facebook', () =>
    {
          
          cy.visit('https://automation.herolo.co.il')
          cy.scrollTo(0, 5000)
          cy.get('.eufMcD').should('be.visible')
          cy.get('.eufMcD').trigger('mouseover')
          cy.get('.eufMcD').trigger('click')


          

    
    });
    
    it('herolo', () =>
    {
          
          cy.visit('https://automation.herolo.co.il')
          cy.scrollTo(0, 5000)
          cy.get('.bXWGqN').should('be.visible')
          cy.get('.bXWGqN').trigger('mouseover')
          cy.get('.bXWGqN').trigger('click')


          
          

    
    });
    


    
});


