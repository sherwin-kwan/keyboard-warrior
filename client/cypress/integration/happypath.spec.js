// Cypress tests

describe("Navigating the happy path", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  
  it("should navigate the happy path properly", () => {
    // Look for start button
    // Game, No. 2: As a game, I show the player a start screen with a start button (or press enter to start)
    cy.get('div.canvas').find('button').contains("Start").click();

    cy.get('.door').should('have.length.of.at.least', 5);
  });

  // Map, No. 1
  it("should give player at least 5 options for battle arenas to fight in order to win the game", () => {
    cy.get('div.canvas').find('button').contains("Start").click();
  });

});
