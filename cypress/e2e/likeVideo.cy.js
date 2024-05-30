import youtubeHomePage from '../support/pageObjects/youtubeHomePage'; 
import  youtubeSearchResultsPage from '../support/pageObjects/youtubeSearchResultsPage'; 
import  youtubeVideoPage from '../support/pageObjects/youtubeVideoPage'; 
  

  describe.only('Like Video Tests', () => { 

    const homePage = new youtubeHomePage(); 
    const resultsPage = new youtubeSearchResultsPage(); 
    const videoPage = new youtubeVideoPage(); 


    beforeEach( () => {

        homePage.visit('https://www.youtube.com')
      
      })

  
  
    it('should click the like button', () => {
  
        const searchProduct = 'nature'; 
  

        cy.wait(5000);
  
  
        homePage.search(searchProduct); 
  
        cy.url({timeout: 10000}).should('include', 'search_query=nature'); 


        cy.wait(10000);

        resultsPage.playVideo(); 

        cy.url({timeout: 10000}).should('include', 'watch?'); 
        
        cy.wait(5000);
  
        videoPage.clickLikeButton(); 

        cy.get('yt-formatted-string[id="content"]').should('be.visible');
        

      

    }); 

    
  });