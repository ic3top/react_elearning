describe('Sample test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

    it('Should navigate to search by default', () => {
        const valueToSearch = 'jurassic';
        cy.url().should('include', '/search?genre=ALL')
        cy.contains(/FIND YOUR MOVIE/i);

        cy.get('.search-input').type(valueToSearch);

        cy.server();
        cy.route('GET', '/movies');

        cy.get('.button').click();

        cy.get('.movies__found > span').invoke('text').then(parseFloat).should('be.gt', 0);
        cy.get('.movies').find('.movie-card__img').its('length').should('be.gt', 0);
        cy.get('.movie-card__info > .movie-card__title').contains(new RegExp(valueToSearch, 'i'));
    })
});
