// <reference types="cypress"/>

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Register Scenario',() => {
        cy.get('#customernav')
        .contains('Login or register')
        .click()
        cy.url().should('contain', 'login');

        cy.get('[class="fa fa-check fa"]')
        .click()
        cy.url().should('contain', 'create');

        cy.get('[id="AccountFrm_firstname"]')
        .type('Bujang');

        cy.get('[id="AccountFrm_lastname"]')
        .type('Lapuk');

        cy.get('[id="AccountFrm_email"]')
        .type('bl@gmail.com');

        cy.get('[id="AccountFrm_address_1"]')
        .type('majalengka')
        .should('have.value', 'majalengka');

        cy.get('[id="AccountFrm_city"]')
        .type('Negri Odni')

        cy.get('#AccountFrm_zone_id')
        .select('3524')
        
        cy.get('#AccountFrm_postcode')
        .type('41411');

        cy.get('#AccountFrm_country_id')
        .select('4');

        cy.get('#AccountFrm_loginname')
        .type('bujanglapuk')
        .should('have.value', 'bujanglapuk');

        cy.get('#AccountFrm_password')
        .type('123456');

        cy.get('#AccountFrm_confirm')
        .type('123456');

        cy.get('[class="input-group col-sm-4"]')
        .find('[type="radio"]')
        .first()
        .check();

        cy.get('#AccountFrm_agree')
        .click();

        cy.get('[class="btn btn-orange pull-right lock-on-click"]')
        .click();

        cy.log("Test complete!")
    })

    it('Login scenario',() => {
        cy.get('[id="customernav"]')
        .contains('Login or register')
        .click()
        cy.url().should('contain', 'login');

        cy.get('#loginFrm_loginname')
        .type('bujanglapuk')
        .should('have.value', 'bujanglapuk');
        
        cy.get('#loginFrm_password')
        .type('qwerty123');

        cy.get('[title="Login"]').click();
    })

    it('Add product to shopping chart',()=>{
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();
        cy.get('ul.thumbnails > :nth-child(1)').click()
        cy.get(':nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
        cy.get('#option344749').click()
        cy.get('.cart').click()
        cy.get('#cart_checkout1').click();
    })

    it('Add Makeup product to shopping chart',()=>{
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').click()
        cy.get(':nth-child(2) > .thumbnail > .pricetag > .productcart').click()
        cy.get('#product_quantity').clear().type('12');
        cy.get('.cart').click();
    })

    it('Add another makeup product',()=>{
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=36"]').click()
        cy.get(':nth-child(3) > .thumbnail > :nth-child(1) > img').click()
        cy.get('#product_quantity').clear().type('5');
        cy.get('.cart').click();

        cy.log('Test Complete!!!');
    })

    it('Use search feature',()=>{
        cy.get('#filter_keyword')
        .type('pantene').type('{enter}')        
    })
});