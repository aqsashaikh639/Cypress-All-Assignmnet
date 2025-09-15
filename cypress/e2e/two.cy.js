describe("Dynamic Playlist – Fetch Track ID", () => {
  it("should select a dynamic playlist and extract the Track ID", () => {
    // Visit the Music Tool and verify landing page
    cy.visit("https://playlists2.radioedit.ihrint.com/", { timeout: 90000 })
    cy.get('.app-name').should('have.text', 'Playlists')

    // Open filter section and select 'Dynamic' playlists
    cy.get('[data-name="playlist-list-filter"]').should('be.visible').click()
    cy.get('[title="Select All"]').first().click();
    cy.contains("Dynamic").click({ force: true });
    cy.get('[data-name="playlist-list-filter"]').first().click({ force: true })

    // Select the first playlist from the filtered list
    cy.get('a.clickable').eq(0).click()

    // Scroll to 'Name' section and click info icon
    cy.contains('Name').scrollIntoView().should('be.visible');
    cy.get('[nztype="info-circle"]').eq(0).scrollIntoView().should('be.visible').click()

    // Extract and log the Track ID
    cy.contains('Track ID')
      .parent('p')
      .invoke('text')
      .then((text) => {
        const trackId = text.trim()
        cy.log('Track ID:', trackId)
      })
  })
})
