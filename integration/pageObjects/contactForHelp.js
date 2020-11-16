/// <reference types="cypress" />


class contactForHelp
{

  

      
      fillName(value) {
        const field = cy.get(`[name=name]`);
        field.clear();
        field.type(value);
        
        return this;
      }
      
    
      fillEmail(value) {
        const field = cy.get(`[name=email]`);
        field.clear();
        field.type(value);
        
        return this;
      }
    

      fillTel(value) {
        const field = cy.get(`[name=phone]`);
        field.clear();
        field.type(value);
        
        return this;
      }
    
      
      submit(value) {
        const button = cy.contains(value);
        button.click();
      }

      isThankYouPage(value){
        cy.url().should('include',value)

      }

      isNotThankYouPage(value){
        cy.url().should('eq',value)

      }










    }





export default contactForHelp;











