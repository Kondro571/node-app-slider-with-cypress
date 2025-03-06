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

describe('Gallery Navigation Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'); 
    });

    it('Should navigate to the next and previous slide', () => {
        cy.get('.swiper-slide-active').then(($firstSlide) => {
            const firstSlideText = $firstSlide.text();

            cy.get('.swiper-button-next').click();
            cy.get('.swiper-slide-active').should(($newSlide) => {
                expect($newSlide.text()).not.to.eq(firstSlideText);
            });

            cy.get('.swiper-button-prev').click();
            cy.get('.swiper-slide-active').should(($backToFirstSlide) => {
                expect($backToFirstSlide.text()).to.eq(firstSlideText);
            });
        });
    });
});

describe('Gallery Slide Content Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Should display title and description for each slide', () => {
        cy.get('.swiper-slide').each(($slide, index) => {
            cy.wrap($slide).within(() => {
                cy.get('.slide-title').should('be.visible');
                cy.get('.slide-description').should('be.visible');
            });

            if (index < Cypress.$('.swiper-slide').length - 1) {
                cy.get('.swiper-button-next').click();
            }
        });
    });
});

describe('Gallery Responsive Tests', () => {
    const viewports = [
        { device: 'macbook-15', width: 1440, height: 900 },
        { device: 'ipad-2', width: 768, height: 1024 },
        { device: 'iphone-x', width: 375, height: 812 }
    ];

    viewports.forEach((viewport) => {
        it(`Should display correctly on ${viewport.device}`, () => {
            cy.viewport(viewport.width, viewport.height);
            cy.visit('http://localhost:3000');
            cy.get('.gallery-container').should('be.visible');
            cy.get('.swiper-button-next').should('be.visible').click();
            cy.get('.swiper-button-prev').should('be.visible').click();
        });
    });
});

describe('Gallery Visibility Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Should display gallery elements correctly', () => {
        cy.get('.gallery-container').should('be.visible');
        cy.get('.swiper-slide').should('have.length.at.least', 3);
        cy.get('.swiper-button-next').should('be.visible').and('not.be.disabled');
        cy.get('.swiper-button-prev').should('be.visible').and('not.be.disabled');
    });
});
