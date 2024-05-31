class youtubeSearchResultsPage {
    // visit() {
    //     cy.visit('https://www.youtube.com');
    // } 

    
    get videoTitle() {
        return cy.get('a#video-title', {timeout: 5000})
        .should('be.visible'));
    } 

    playVideo() {
        this.videoTitle.first().click();
    }

    


} 

export default youtubeSearchResultsPage;