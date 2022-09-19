describe('Upcoming Launches / Bookmarks', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.contains('Bookmarks').click()
  })

  it('No bookmarks should be shown on the page if there are none added', () => {
    cy.contains('Your bookmarks').should('exist')
    cy.contains('You have no bookmarks').should('exist')
  })
})
