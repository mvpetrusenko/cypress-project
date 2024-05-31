import youtubeHomePage from '../../support/pageObjects/youtubeHomePage'; 
import  youtubeSearchResultsPage from '../../support/pageObjects/youtubeSearchResultsPage'; 
  
  describe.only('Open Youtube Video Tests', () => { 

    const homePage = new youtubeHomePage(); 
    const resultsPage = new youtubeSearchResultsPage(); 
  
    it('should open the first video', () => {
        const searchProduct = 'music'; 

        homePage.search(searchProduct); 
  
        cy.url({timeout: 10000})
        .should('include', 'search_query=music'); 

        resultsPage.playVideo(); 

        cy.url({timeout: 10000})
        .should('include', 'watch?'); 
        
    }); 

  });