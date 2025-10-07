describe("Dynamic Playlist – Fetch Track ID", () => {
    it("Create a swap and delete it", () => {
    // Visit the Playlists Tool
    cy.visit("/")
    
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

    //Verify that the swap is created successfully
    cy.get('tr.swaps-row').first().within(() => {
        cy.get('td').eq(1).should('have.text', 'Girls Just Want to Have Fun')
        cy.get('td').eq(5).should('have.text', 'Live And Let Die')
    })

    // Delete the swap
    cy.get('[nztype="delete"]').first().click();
    cy.contains('OK').click() 

    //Assert deletion success message
    cy.contains('Swap deleted successfully').should('be.visible')
  })
})
