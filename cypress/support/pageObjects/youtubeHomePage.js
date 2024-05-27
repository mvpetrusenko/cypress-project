class youtubeHomePage {
    visit() {
        cy.visit('https://www.youtube.com');
    } 

    get searchInput() {
        return cy.get('#search-form'); 
    } 

    get searchButton() {
        return cy.get('#search-icon-legacy');
    } 



    search(query) {
        this.searchInput.type(query); 
        this.searchButton.click(); 
    } 



} 

export default youtubeHomePage;