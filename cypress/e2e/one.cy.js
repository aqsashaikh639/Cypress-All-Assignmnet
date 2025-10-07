describe("my final practice", () => {
  it("Create and save a Playlists with explicit Tracks", () => {
   
    //visit the Test URL and Verify landing Page
    cy.visit("/")  
    cy.get('.app-name').should('have.text', 'Playlists')

    //Start New Playlists
    cy.get('[routerlink="/createPlaylist"]').click()

    // Click revert button only if it is enabled
    cy.revertbutton()

    //Enter all Necessary Form detail
    cy.fillPlaylistForm('Jaime Dv', 'Automation Test Playlists', 'This is just for testing purpose', 'Aksa')
    cy.get('[nztype="plus"]').eq(0).click()

    // Search for a specific Track and Add it
    cy.get('[formcontrolname="catalog"]').should('be.visible').type('16978030')
    cy.get('nz-option-item').contains("Some Nights").click({force:true})
    
    //verify that track get added successfully
    cy.contains("Some Nights").should("exist")
    cy.get('[data-name="save"]:visible').should('be.enabled').click()

    //verify that playlists get saved successfully
    cy.contains('Playlist saved successfully').should('be.visible')
  })

  it('Create a Playlists without Explicit Tracks',()=>{
  cy.visit("https://playlists2.radioedit.ihrint.com/")
    cy.get('.app-name').should('have.text', 'Playlists')

    //Start New Playlists
    cy.contains('New Playlist').click()

    // Click revert button only if it is enabled
   cy.revertbutton()

    //Enter all Necessary Form detail through custom command
    cy.fillPlaylistForm('Jaime Dv', 'Automation Test Playlists', 'This is just for testing purpose', 'Aksa')

    //Make the playlists as non explicit
    cy.get('[formcontrolname="isExplicit"]').click()
    cy.get('[nztype="plus"]').eq(0).click()

    // Search for a specific Track and Add it
    cy.get('[formcontrolname="catalog"]').should('be.visible').type('I Won\'t Back Down')
    cy.get('nz-option-item').contains("I Won't Back Down").first().click({ force: true })

    //verify that track get added successfully
    cy.contains("I Won't Back Down").should("exist")
    cy.get('[data-name="save"]:visible').should('be.enabled').click()

    //verify that playlists get saved successfully
    cy.contains('Playlist saved successfully').should('be.visible')
  })
})
