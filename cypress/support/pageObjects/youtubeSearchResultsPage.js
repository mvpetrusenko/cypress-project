class youtubeSearchResultsPage {
    visit() {
        cy.visit('https://www.youtube.com');
    } 

    
    get videoTitle() {
        return cy.get('#video-title');
    } 

    playVideo() {
        this.videoTitle.first().click();
    }

    


} 

export default youtubeSearchResultsPage;