describe("Verify All Elements on Playlists list Page", () => {
    it("Visit Playlists List Page and Verify all elements", () => {
        cy.viewport(1920, 1080);
        //visit the playlists tool
        cy.visit("https://playlists2.radioedit.ihrint.com/playlists", { timeout: 90000 })
        //verify landing page
        cy.get('.app-name').should('have.text', 'Playlists')
        //verify New Playlists button is visible
        cy.contains('New Playlist').should('be.visible')
        //verify Filter button is visible
        cy.get('[data-name="playlist-list-filter"]').should('be.visible')
        //verify Search box is visible and clickable
        cy.get('[type="text"]').should('be.visible').click()
        //verify table headers
        cy.contains('Title').should('be.visible')
        cy.contains('Status').should('be.visible')
        cy.contains('Curator').should('be.visible')
        cy.contains('Description').should('be.visible')
        cy.contains('Date').should('be.visible')
        //verify that atleast one playlists is visible in list	
        cy.get('tbody').find('tr').its('length').should('be.gte', 1)
        //Click on collapse icon only if collapse text is not visible and verify the text present on left panel
        cy.contains('Collapse').then($el => {
            if (!$el.length || !$el.is(':visible')) {
                // "Collapse" doesn't exist or is not visible — click the button
                cy.get(':nth-child(4) > .ant-menu-item > .ant-menu-title-content > a > .anticon')
                    .click({ force: true });
            }
        })
        cy.wait(2000)
        cy.contains('Shaikh, Aksa').should('be.visible')
        cy.contains('Logout').should('be.visible')
        cy.contains('Help').should('be.visible')
        cy.contains('Language').should('be.visible')
        cy.contains('Collapse').should('be.visible')
    })
})