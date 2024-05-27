import youtubeHomePage from '../support/pageObjects/youtubeHomePage'; 
import  youtubeSearchResultsPage from '../support/pageObjects/youtubeSearchResultsPage'; 
import  youtubeVideoPage from '../support/pageObjects/youtubeVideoPage'; 
  

  describe.only('Click Like Button Tests', () => { 

    const homePage = new youtubeHomePage(); 
    const resultsPage = new youtubeSearchResultsPage(); 
    const videoPage = new youtubeVideoPage(); 


    beforeEach( () => {

        homePage.visit('https://www.youtube.com')
      
      })

  
  
    it('should click the like button', () => {
  
        const searchProduct = 'music'; 
  

        cy.wait(5000);
  
  
        homePage.search(searchProduct); 
  
        cy.url({timeout: 10000}).should('include', 'search_query=music'); 


        cy.wait(5000);

        resultsPage.playVideo(); 

        cy.url({timeout: 10000}).should('include', 'watch?'); 
        
        cy.wait(10000);
  
        videoPage.clickLikeButton(); 

        //videoPage.clickLikeButton.should('have.attr', 'aria-pressed', 'true');

      

    }); 

    
  });