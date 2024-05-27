import youtubeHomePage from '../support/pageObjects/youtubeHomePage'; 

  
  describe.only('Youtube Search Tests', () => { 

    const homePage = new youtubeHomePage(); 
  

    beforeEach( () => {

        homePage.visit('https://www.youtube.com')
      
      })

  
  
    it('should perform a valid search', () => {
  
      const searchProduct = 'song'; 
  

      cy.wait(5000);


      homePage.search(searchProduct); 

      cy.url({timeout: 10000}).should('include', 'search_query=song');
      

    }); 

    it('should handle special characters in search', () => {
  
      const searchProduct = '%$#'; 
      homePage.search(searchProduct); 

      cy.wait(5000);


      homePage.search(searchProduct); 

      cy.url({timeout: 10000}).should('not.include', 'search_query=song+music');
      

    });
  
  });