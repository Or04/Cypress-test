/// <reference types="cypress" />
// 
import contactForHelp from '../pageObjects/contactForHelp'

describe('Contact For Help', () =>{

    

    it('should send with correct credentials', () =>
    {
          const cfh = new contactForHelp()
          cy.visit('https://automation.herolo.co.il')
          cfh.fillName('Bodek')
          cfh.fillEmail('bodek@testing.com')
          cfh.fillTel('0544444444')
          cfh.submit('שליחה')
          cfh.isThankYouPage('thank-you')
    
    });
    


it('show an error email message and do not send the form ', () => {


    const cfh = new contactForHelp()
    cy.visit('https://automation.herolo.co.il')
    cfh.fillName('Bodek')
    cfh.fillEmail('bodektesting.com')
    cfh.fillTel('0544444444')
    cfh.submit('שליחה')
    cfh.isNotThankYouPage('https://automation.herolo.co.il/')


   


});



it('show an error Phone message and do not send the form', () => {


    const cfh = new contactForHelp()
    cy.visit('https://automation.herolo.co.il')
    cfh.fillName('Bodek')
    cfh.fillEmail('bodek@testing.com')
    cfh.fillTel('054444444')
    cfh.submit('שליחה')
    cfh.isNotThankYouPage('https://automation.herolo.co.il/')

   


});








});


