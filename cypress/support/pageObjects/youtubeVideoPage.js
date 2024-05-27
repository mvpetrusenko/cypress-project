class youtubeVideoPage {
    visit() {
        cy.visit('https://www.youtube.com');
    } 

    
    get likeButton() {
        return cy.get('ytd-toggle-button-renderer[is-icon-button] tp-yt-paper-button#button');
    } 

    clickLikeButton() {
        this.likeButton.eq(1).click(); // click the second video
    }

    


} 

export default youtubeVideoPage;