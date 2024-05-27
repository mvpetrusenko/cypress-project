/*
     To open our testing site before running tests add before hook ore beforeEach hook
     to be executed before each of tests

     To execute beforeEach hook only in the second describe group
     put it inside describe block:

     describe('Group 2', () => {
     beforeEach( () => {

         cy.visit('https://youtube.com')

     });
       it.only('Test three', () => {


        searchbox - #search-form

        search - #search-icon-legacy
*/

beforeEach( () => {

    cy.visit('https://www.youtube.com')
  
  })
  
  
  
  describe('Group 1', () => { //describe ... - to organise tests in groups
  
  
    it.only('Test two', () => {
  
      cy.wait(6000);

      cy.get('#search-form').type('song music'); 

      cy.get('#search-icon-legacy').click();
      
      cy.url({timeout: 10000}).should('include', 'search_query=song+music');
      

    });
  
  });