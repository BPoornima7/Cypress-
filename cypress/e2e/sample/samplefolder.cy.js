
describe("Automate a page given", () => {


    it("test one", () => {


        cy.visit("/sample.html")

        cy.get("#id1").clear().type("Jnanodaya")

        cy.get("#id2").type("Random{enter}")


        cy.get('input[name="check1"]').uncheck()
        cy.get('input[name="check2"]').check()
        cy.get('input[name="check3"]').invoke("removeAttr", "disabled").check()

        cy.get("#assert1", { timeout: 40000 }).should("contains", "Automation testing")

        cy.get("#assert2").then((txt) => {

            var textvalue = Number(txt.text())

            expect(textvalue).to.have.lessThan(10)
        })


        cy.get("#myCanvas").click("bottomright")

        cy.get("#someid").should("not.be.visible")
        cy.get("#randomid").should("be.visible").and("have.value", "assertMyPresence")
        cy.get('input[name="sameid"]').eq(1).type("randomtext")

    })

})

