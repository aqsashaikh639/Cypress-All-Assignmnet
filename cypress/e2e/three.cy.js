describe("Dynamic Playlist – Fetch Track ID", () => {
    it("Create a swap and delete it", () => {
    // Set authentication cookie
    cy.setCookie(
      'access_token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGkiOiJ1c2VyL3N5c3RlbS9zeXN0ZW0iLCJzdWIiOiJ1c2VyL2xkYXAvMTEzNDA2MyIsInNjbyI6IiIsInNsdCI6IkdvQmxLTyIsImV4cCI6MTc1NDEzNTM5OCwiZXhwaCI6MTc1NDMwOTgzN30.Watz-JsVV_2ySOko8cayiC--n4xaUI6WdJ4GOqYA6Yw', 
      { domain: '.radioedit.ihrint.com' }
    )
    // Visit the Playlists Tool
    cy.visit("https://playlists2.radioedit.ihrint.com/", { timeout: 200000 })

    // Navigate to Swaps
    cy.contains('Swaps').click()
    cy.contains('New Swap').click()

    // Select the first song
    cy.get('[type="text"]').eq(1).type('fun', { force: true })
    cy.contains("Girls Just Want to Have Fun")
      .should('be.visible')
      .click({ force: true })

    // Select the second song
    cy.get('[type="text"]').eq(2).type('Live And Let D', { force: true })
    cy.contains("Live And Let Die")
      .first()
      .should('be.visible')
      .click({ force: true })

    // Submit the swap
    cy.contains('Submit').click({ force: true });

    // Assert success message
    cy.contains('Swap created successfully', { timeout: 20000 }).should('be.visible')

    // Delete the swap
    cy.get('[nztype="delete"]').first().click();
    cy.contains('OK').click()

    // Assert deletion success
    cy.contains('Swap deleted successfully').should('be.visible')
  })
})
