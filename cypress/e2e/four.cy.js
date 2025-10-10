import '@4tw/cypress-drag-drop'
describe("Fourth Assignment", () => {
    it("Drag the track in a playlist and verify", () => {
        //Close draft playlists if available
        cy.get('body').then($body => {
            if ($body.find('.ant-alert-close-icon').length > 0) {
                cy.get('.ant-alert-close-icon').then($btn => {
                    if ($btn.is(':visible')) {
                        cy.wrap($btn).click();
                    }
                })
            }
            // else: do nothing, just skip
        })
        //open a Test Playlists
        cy.get('[type="text"]').type("Testing Track")
        cy.contains('Testing Track').should('be.visible').click({ force: true })

        //Scroll down to Tracks Section
        cy.contains('Name').scrollIntoView({ force: true }).should('be.visible')
        cy.wait(3000)

        //drag and drop
        cy.get(':nth-child(7) > .ant-table-cell.ng-star-inserted > .actions > .cdk-drag-handle > .anticon-drag')
            .scrollIntoView({ force: true })
            .trigger('mouseover', { force: true })
            .trigger('mousedown', { button: 0 })
            .trigger('mousemove', { force: true });
        cy.get(':nth-child(9) > .ant-table-cell.ng-star-inserted > .actions > .cdk-drag-handle > .anticon-drag')
            .trigger('mousemove', { force: true })
            .click({ force: true })
            .trigger("mouseup", { force: true });

        //check if save button gets enabled to verify that drag operation Happens
        cy.get('[data-name="save"]').should('be.enabled')
    })
})