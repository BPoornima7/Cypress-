class ProductPage {
    getProduct() {
        return cy.get('h4 a')
    }
    clickAdd(value) {
        return cy.xpath('//h4/a[text()="' + value + '"]/../../../div/button')
    }
    clickAdd1(value) {
        return cy.xpath("//a[text()='" + value + "']")
    }
    checkOut() {
        return cy.contains('Checkout')
    }
}
export default ProductPage