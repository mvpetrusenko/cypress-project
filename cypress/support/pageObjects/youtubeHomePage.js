class youtubeHomePage {

    get searchInput() {
        return cy.get('#search-form', {timeout: 5000})
        .should('be.visible'); 
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