describe("Verify All Elements on Playlists list Page", () => {
    it("Visit Playlists List Page and Verify all elements", () => {
        cy.viewport(1920, 1080)
        //visit Playlists Tool       
        cy.get('.app-name').should('have.text', 'Playlists')

        //verify New Playlists button is visible
        cy.contains('New Playlist').should('be.visible')

        //verify Filter button is visible
        cy.get('[data-name="playlist-list-filter"]').should('be.visible')

        //verify Search box is visible and clickable
        cy.get('[type="text"]').should('be.visible').click()
    
        //verify table headers using for loop
        const expectedHeaders = ['Status', 'Title', 'Curator', 'Description', 'Date']
        cy.get('tr.ant-table-row th').should('have.length', expectedHeaders.length)
        for(let i = 0; i < expectedHeaders.length; i++){
        cy.get('tr.ant-table-row th').eq(i).should('have.text', expectedHeaders[i])
        }
      
        //verify that atleast one playlists is visible in list	
        cy.get('tbody').find('tr').its('length').should('be.gte', 1)
        
        //Click on collapse icon and verify the text present on left panel
        cy.get(':nth-child(4) > .ant-menu-item > .ant-menu-title-content > a').click()
        cy.wait(2000)
        cy.contains('Logout').should('be.visible')
        cy.contains('Help').should('be.visible')
        cy.contains('Language').should('be.visible')
        cy.contains('Collapse').should('be.visible')
    })
})