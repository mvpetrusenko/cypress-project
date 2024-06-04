describe.only('YouTube Login Tests', () => {
  beforeEach(() => {
    cy.fixture('invalidUser').as('loginData');
    cy.visit('/'); // Visit the main page of your application
  });

  it('should not successfully log into YouTube account', function () {
    cy.get('@loginData').then((loginData) => {
      cy.origin('https://accounts.google.com', { args: loginData }, ({ username, password }) => {
        
      // Visit the YouTube login page
        cy.visit('https://accounts.google.com/signin/v2/identifier?service=youtube');
        
        // Enter username
        cy.get('input[type="email"]', {timeout: 5000}).should('be.visible').type(username);
        cy.get('div#identifierNext').click();
        




        // Wait for the password input to appear and then enter the password
        cy.get('input[type="password"]', {timeout: 5000}).should('not.be.visible'); 



        
        //cy.get('input[type="password"]', {timeout: 5000}).should('be.visible').type(password);
        //cy.get('div#passwordNext').click();
      });
    });
    
    // Verify that login was successful by checking if the user is redirected to YouTube homepage
    //cy.url().should('include', 'youtube.com');
    //cy.get('a#logo').should('be.visible'); // Assuming the YouTube logo is visible upon successful login
  });
 });