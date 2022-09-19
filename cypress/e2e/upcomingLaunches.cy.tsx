describe('Upcoming Launches / Bookmarks', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.contains('Upcoming Launches').click()
  })

  it('upcoming launches are shown on the page', () => {
    cy.contains('Upcoming - Next Launches').should('exist')
    cy.contains('Mission').should('exist')
  })

  it('upcoming launches can be added to bookmarks', () => {
    cy.contains('Already bookmarked').should('not.exist')
    cy.contains('Add to bookmarks').should('exist').click()
    cy.contains('Already bookmarked').should('exist')
  })

  it('Bookmarked launches should be visible on Bookmarks page', () => {
    cy.contains('Already bookmarked').should('not.exist')
    cy.contains('Add to bookmarks').should('exist').click()
    cy.contains('Already bookmarked').should('exist')
    cy.contains('Bookmarks').should('exist').click()
    cy.contains('Remove bookmark')
  })

  it('Bookmarks can be removed', () => {
    cy.contains('Already bookmarked').should('not.exist')
    cy.contains('Add to bookmarks').should('exist').click()
    cy.contains('Already bookmarked').should('exist')
    cy.contains('Bookmarks').should('exist').click()
    cy.contains('Remove bookmark').click()
    cy.contains('You have no bookmarks.').should('exist')
  })
})
