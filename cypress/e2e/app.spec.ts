/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/');
  cy.clearLocalStorage();
});

it('searches and filters the songs', () => {
  cy.findByRole('combobox', { name: /sort by/i })
    .as('sortingSelect');
  cy.findByRole('textbox', { name: /search/i })
    .as('searchInput');

  cy.findAllByRole('article')
    .as('songList')
    .its('length')
    .then(length => {
      cy.get('@sortingSelect')
        .select('genre.name')
        .get('@songList')
        .its('length')
        .should('eq', length);

      cy.get('@searchInput')
        .type('allison')
        .get('@songList')
        .its('length')
        .should('be.lt', length);
    });
});

it('plays song and iterates through queue', () => {
  cy.findAllByRole('article')
    .eq(0)
    .findByRole('button', { name: /play/i })
    .click();

  cy.findByRole('button', { name: /next/i })
    .click();
  cy.findByRole('button', { name: /prev/i })
    .click();

  cy.findByRole('button', { name: /playrate/i })
    .click();
  cy.findByRole('button', { name: /mute/i })
    .click();

  cy.findByRole('button', { name: /pause/i })
    .click();
});

it('toggles fav from a song', () => {
  cy.findAllByRole('article')
    .eq(2)
    .as('thirdCard')
    .findByRole('button', { name: /fav/i })
    .as('cardFavBtn');
  cy.findByRole('img', { name: /no track/i })
    .parent()
    .findByRole('button', { name: /fav/i })
    .as('playerFavBtn');

  cy.get('@thirdCard')
    .findByRole('button', { name: /play/i })
    .click();
  cy.findByRole('button', { name: /pause/i })
    .click();

  cy.get('@cardFavBtn')
    .click()
    .should('have.attr', 'aria-label', 'Unfav')
    .get('@playerFavBtn')
    .should('have.attr', 'aria-label', 'Unfav')
    .click()
    .should('have.attr', 'aria-label', 'Fav')
    .get('@cardFavBtn')
    .should('have.attr', 'aria-label', 'Fav');
});
