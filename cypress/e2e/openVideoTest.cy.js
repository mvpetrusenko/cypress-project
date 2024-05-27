import youtubeHomePage from '../support/pageObjects/youtubeHomePage'; 
import  youtubeSearchResultsPage from '../support/pageObjects/youtubeSearchResultsPage'; 

  
  describe.only('Open Youtube Video Tests', () => { 

    const homePage = new youtubeHomePage(); 
    const resultsPage = new youtubeSearchResultsPage(); 
  

    beforeEach( () => {

        homePage.visit('https://www.youtube.com')
      
      })

  
  
    it('should open the first video', () => {
  
        const searchProduct = 'music'; 
  

        cy.wait(5000);
  
  
        homePage.search(searchProduct); 
  
        cy.url({timeout: 10000}).should('include', 'search_query=music'); 


        cy.wait(5000);

        resultsPage.playVideo(); 

        cy.url({timeout: 10000}).should('include', 'watch?'); 
        
  
      

    }); 

    
  });