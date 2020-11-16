/// <reference types="cypress" />



describe('Browse Projects & Customers', () =>{

    

    it('Slider projects', () =>
    {
          
          cy.visit('https://automation.herolo.co.il')
          cy.get('.slick-active > :nth-child(1) > .portfolio__ImgContainer-sc-80s039-1').should('be.visible')
          cy.get('.slick-active > :nth-child(1) > .portfolio__ImgContainer-sc-80s039-1').trigger('click')
          cy.get('.portfolio__Portfolio-sc-80s039-0 > .slick-slider > .slick-dots').should('be.visible')
          cy.get('.portfolio__Portfolio-sc-80s039-0 > .slick-slider > .slick-dots').trigger('mouseover')
          cy.get('.portfolio__Portfolio-sc-80s039-0 > .slick-slider > .slick-dots').trigger('click')


    

        });



    it('Slider customers ', () =>
    {
          
          cy.visit('https://automation.herolo.co.il')
          cy.get('.customers__Container-fb9045-2 > .slick-slider > .slick-dots').should('be.visible')
          cy.get('.customers__Container-fb9045-2 > .slick-slider > .slick-dots').trigger('mouseover')
          cy.get('.customers__Container-fb9045-2 > .slick-slider > .slick-dots').trigger('click')
          cy.get('.customers__Container-fb9045-2 > .slick-slider').should('be.visible')
          cy.get('.customers__Container-fb9045-2 > .slick-slider').trigger('click')
          

          
    
    });


});
