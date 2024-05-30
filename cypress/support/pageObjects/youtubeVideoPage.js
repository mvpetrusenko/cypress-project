class youtubeVideoPage {
    visit() {
        cy.visit('https://www.youtube.com');
    } 

    
    get likeButton() {

        return cy.get('.YtLikeButtonViewModelHost').first();

    }

    clickLikeButton() { 
   
        this.likeButton.click();
    }  



    get disLikeButton() {
        
        return cy.get('.YtDislikeButtonViewModelHost').first();

    }

    clickDislikeButton() { 
   
        this.disLikeButton.click();
    }  

    
    

    
    


} 

export default youtubeVideoPage;