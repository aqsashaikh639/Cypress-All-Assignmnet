describe("Clone a Playlist", () => {
    it("Clone a Playlist and Verify Multiple Details", () => {
        cy.viewport(1920, 1080)
        // Open a Test Playlist
        cy.get('[type="text"]').type("Testing Track")
        cy.get('a.clickable').filter((index, e1) => e1.innerText.trim() === "Testing Track").click({ force: true })

        // Store multiple playlist details in one object
        cy.then(() => {
            const playlistData = {}

            // Grab multiple fields
            cy.get('[placeholder="Title"]').invoke('val').then(val => {
                playlistData.title = val
            })

            cy.get('[placeholder="Description"]').invoke('val').then(val => {
                playlistData.description = val
            })

            cy.get('[formcontrolname="author"]').invoke('val').then(val => {
                playlistData.author = val
            })

            // You can add more fields similarly (e.g., tags, duration, etc.)

            // Once all are fetched, clone and verify
            cy.then(() => {
                cy.log('Original Playlist Data:', JSON.stringify(playlistData))

                // Click on Action → Clone
                cy.get('div.ml-auto button.ant-dropdown-trigger').click()
                cy.contains('li.ant-dropdown-menu-item', 'Clone').click({ force: true })

                // Verify cloned playlist details
                cy.get('[formcontrolname="title"]')
                    .should('have.value', `[Copy] ${playlistData.title}`)

                cy.get('[placeholder="Description"]')
                    .should('have.value', playlistData.description)

                cy.get('[formcontrolname="author"]')
                    .should('have.value', playlistData.author)
            })
        })
    })
})
