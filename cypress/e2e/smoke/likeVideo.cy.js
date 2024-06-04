import youtubeHomePage from '../../support/pageObjects/youtubeHomePage'; 
import  youtubeSearchResultsPage from '../../support/pageObjects/youtubeSearchResultsPage'; 
import  youtubeVideoPage from '../../support/pageObjects/youtubeVideoPage'; 
  
  describe.only('Like Video Tests', () => { 

    const homePage = new youtubeHomePage(); 
    const resultsPage = new youtubeSearchResultsPage(); 
    const videoPage = new youtubeVideoPage(); 

    it('should click the like button', () => {
        const searchProduct = 'nature'; 

        homePage.search(searchProduct); 
  
        cy.url({timeout: 10000})
        .should('include', 'search_query=nature'); 

        resultsPage.playVideo(); 

        cy.url({timeout: 10000})
        .should('include', 'watch?'); 

  
        videoPage.clickLikeButton(); 

        cy.get('yt-formatted-string[id="content"]')
        .should('be.visible');
      
    }); 

  });