import youtubeHomePage from '../support/pageObjects/youtubeHomePage'; 

  
  describe.only('Youtube Search Tests', () => { 

    const homePage = new youtubeHomePage(); 
  

    beforeEach( () => {

        homePage.visit('https://www.youtube.com')
      
      })

  
  
    it.only('should perform a valid search', () => {
  
      const searchProduct = 'song music'; 
      homePage.search(searchProduct); 

      cy.wait(5000);


      homePage.search(searchProduct); 

      cy.url({timeout: 10000}).should('include', 'search_query=song+music');
      

    });
  
  });