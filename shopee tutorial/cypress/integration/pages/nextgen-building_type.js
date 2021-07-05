import data from '/Users/savvycom/Desktop/building_type test/testdata'
describe('Check building type on PropertyScout', () => {

    it('visit PropertyScout', () => {
        cy.visit(`https://propertyscout.co.th/en`);
        cy.waitUntil(() => cy.get('#search-target').should('be.visible'));
    });
    
    it('Move to result listings page', () => {
        cy.get('#search-target')
            .click({force: true});
        cy.waitUntil(() => cy.get('.flex .my-2').should('be.visible'));
        cy.wait(3000);
    })
    data.forEach((operation)=>{
        it('Check buildingType consistency',() =>{
        // input buildingName
            cy.get('.relative .flex .flex-1')
                .type(operation.buildingName,{force: true});
            cy.wait(3000);
        // select first result
            cy.get('.absolute > :nth-child(1) > .truncate')
                .click({force: true})
                cy.wait(3000);
            
        // Click [Search now!]
            cy.get('[data-testid=search-now]')
                .click({force: true})
            cy.wait(3000)
                ;
        // Check URL
            var path = '/Users/savvycom/Desktop/building_type test/report.txt'
            cy.url().then((url) => {
                var urlString = url
                cy.log(urlString)
                var result = urlString.includes(`en/${operation.buildingType}`)
                cy.log(`en/${operation.buildingType}`)
                cy.wait(1000)
                cy.writeFile(path,operation.buildingName+' '+ operation.buildingType +' '+`en/${operation.buildingType}`+' '+ result + '\n', { flag: 'a+' }
                )
            })
        // Clear search bar
            cy.get('.relative .flex .flex-1').clear({multiple: true});
        })
    })

    });