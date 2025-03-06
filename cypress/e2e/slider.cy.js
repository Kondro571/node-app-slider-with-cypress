describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('check all buttons', function()  {

    it('Should navigate to the next and previous slide', function() {
        cy.visit('http://localhost:3000'); 
        cy.get('.swiper-slide-active').should('contain', 'Rome')

        cy.get('.swiper-button-next').click();

        cy.wait(2000);
        cy.get('.swiper-slide-active').should('contain', 'London');
        cy.get('.swiper-button-next').click();

        cy.wait(2000);
        cy.get('.swiper-slide-active').should('contain', 'Paris')
        cy.get('.swiper-button-next').click();
        
        cy.wait(2000);
        cy.get('.swiper-slide-active').should('contain', 'Rome')
        cy.get('.swiper-button-prev').click();

        cy.wait(2000);
        cy.get('.swiper-slide-active').should('contain', 'Paris')

    });
});
