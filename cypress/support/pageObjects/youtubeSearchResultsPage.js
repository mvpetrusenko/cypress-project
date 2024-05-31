class youtubeSearchResultsPage {
    
    get videoTitle() {
        return cy.get('a#video-title', {timeout: 5000})
        .should('be.visible');
    } 

    playVideo() {
        this.videoTitle.first().click();
    }

    
} 

export default youtubeSearchResultsPage;