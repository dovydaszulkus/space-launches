describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays information about the upcoming space launch', () => {
    cy.contains('Upcoming:')
      .should('exist')
      .then((value) => {
        const upcomingLaunchHeadingText = value[0].innerHTML
        cy.wrap(upcomingLaunchHeadingText).should(
          'equal',
          upcomingLaunchHeadingText
        )
      })

    cy.contains('seconds').parent().should('exist')
  })
})
