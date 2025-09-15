describe("Clone a Playlists", () => {
    it("Clone a Playlists and Verify", () => {
        //visit Playlists Tool
        cy.visit("https://playlists2.radioedit.ihrint.com/playlists", { timeout: 900000 })
        //Close draft playlists if available
        cy.get('body').then($body => {
            const btn = $body.find('.ant-alert-close-icon')
            if (btn.length > 0) {
                cy.wrap(btn).click()
            }
        })
        //open a Test Playlists
        cy.get('[type="text"]').type("Testing Track")
        cy.contains('Testing Track').should('be.visible').click({ force: true })
        //click on action and then clone
        cy.contains('Actions').should('be.visible').click()
        cy.contains('Clone').should('be.visible').click()
        //verify that copy get created by verifying it include copy word in title box

        cy.get('[formcontrolname="title"]').should('include.value', '[Copy]')
    })
})