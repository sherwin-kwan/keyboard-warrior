// Cypress tests

// Stories not yet covered

// Battle No. 5: As a player, I can see how long until the enemy executes its next attack
// Battle No. 7: As a player, I can see health decrement on my own sprite, so I know the enemy has done damage
// Battle No. 8: As a game, the boss battle is more difficult than a regular enemy
// Game No. 1: As a player, I can see what letter in the word I’m typing change colour so I know what I’m choosing and how close I am to finishing the word


describe("Navigating the happy path", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("should fail if you try to begin game without a name", () => {
    cy.get('div.canvas').find(`:disabled`).contains('Start');
  })

  it("should navigate the happy path properly", () => {
    // Look for start button
    // Game, No. 2: As a game, I show the player a start screen with a start button (or press enter to start)
    cy.get(`[data-cy=enter-name]`).type('Cypress');
    cy.get('div.canvas').contains('Start').click();

    // Map, No. 1: As a player, I should have at least 5 options for battle arenas to fight in order to win the game
    const doors = cy.get('[data-cy=door-slider]');
    doors.should('have.length.of.at.least', 5);
    doors.eq(0).click();

    // Map No. 2: As a player, I can choose which battle arena I want to enter by clicking on it
    cy.get('[data-cy=enter-arena]').contains("Middle").click();

    // Battle No. 1: As a player, I can see health bars above my sprite and the enemy’s sprite, so I know how close I am to winning/losing
    cy.get('main').find('[data-cy=health-bar]').should('have.length', 2);

    // Battle No. 2: As a player, I have the following options for moves: attack (deals damage) or heal (restore health)
    cy.get('[data-cy=player-actions]').find('li').should('have.length.of.at.least', 2);

    // Battle No. 3: As a player, the game will generate a series of words that I can type to execute a move
    // This example will type a word to execute an attack
    cy.get('.player-actions').find('li').eq(0).find('.action-word').find('div').invoke('text')
      .then((text) => {
        cy.get('input').type(text.slice(0, 1));
        // Game No. 1: As a player, I can see what letter in the word I’m typing change colour 
        // so I know what I’m choosing and how close I am to finishing the word
        // TEST NOT YET CREATED

        cy.get('input').type(text.slice(1));
        // Battle No. 6: As a player, I can see a health decrement on the enemy when I finish typing a word, so I know I’ve dealt damage
        cy.get('main').find('[data-cy=health-bar]').eq(1).should('contain', '90');
        // Battle No. 4: As a player, once I finish typing a word, the action is executed (i.e. don’t have to press enter) and 
        // I’m given a new action and word to replace the one I just executed
        const nextText = cy.get('.player-actions').find('li').eq(0).find('.action-word').find('div').invoke('text');
        expect(nextText).to.not.equal(text);
        return nextText;
      })
      .then((text) => {
        cy.get('input').type(text);
        const nextText = cy.get('.player-actions').find('li').eq(0).find('.action-word').find('div').invoke('text');
        return nextText;
      })
      .then((text) => {
        cy.get('input').type(text);
        const nextText = cy.get('.player-actions').find('li').eq(0).find('.action-word').find('div').invoke('text');
        return nextText;
      })
      .then((text) => {
        cy.get('input').type(text);
        const nextText = cy.get('.player-actions').find('li').eq(0).find('.action-word').find('div').invoke('text');
        return nextText;
      })
      .then((text) => {
        cy.get('input').type(text);
        const nextText = cy.get('.player-actions').find('li').eq(0).find('.action-word').find('div').invoke('text');
        return nextText;
      })
      .then((text) => {
        cy.get('input').type(text);
        const nextText = cy.get('.player-actions').find('li').eq(0).find('.action-word').find('div').invoke('text');
        return nextText;
      })
      .then((text) => {
        cy.get('input').type(text);
        const nextText = cy.get('.player-actions').find('li').eq(0).find('.action-word').find('div').invoke('text');
        return nextText;
      })
      .then((text) => {
        cy.get('input').type(text);
        const nextText = cy.get('.player-actions').find('li').eq(0).find('.action-word').find('div').invoke('text');
        return nextText;
      })
      .then((text) => {
        cy.get('input').type(text);
        const nextText = cy.get('.player-actions').find('li').eq(0).find('.action-word').find('div').invoke('text');
        return nextText;
      })
      .then((text) => {
        cy.get('input').type(text);
        // Should now have won the battle
        // Game No. 4: As a game, when the player wins, I show them a you win screen
        cy.get('div.canvas').should('contain', 'VICTORY');
        // Go back to map screen
        cy.get('div.canvas').find('button').click();

        // Map No. 3: As a player, I need to know which battle arena I already beat so I can’t re-enter it
        cy.get('[data-cy=enter-arena]').contains('Middle').click();
        // This should do nothing, remaining on the map screen
        cy.get('[data-cy=door-slider]').should('have.length.of.at.least', 5);

        // Map No. 4: As a player, I want to know how many battles I need to win and 
        // how many I’ve already won so I know how close I’m getting to the boss fight
        cy.get('.RSPBstep').eq(0).find('img').should('have.css', 'filter', 'grayscale(0)');
        cy.get('.RSPBstep').eq(2).find('img').should('not.have.css', 'filter', 'grayscale(0)');
      });
  });

  it('should end in defeat if player sits idle for too long', () => {
    cy.get(`[data-cy=enter-name]`).type('Cypress');
    cy.get('div.canvas').contains('Start').click();
    cy.get('.door:first').contains("Middle");
    cy.get('[data-cy=enter-arena]').click();
    cy.wait(45000);
    // That should be enough time to lose
    // Game No. 3: As a game, when the player dies, I show them a you died screen and an option to restart
    cy.get('div.canvas').should('contain', 'DEFEAT');
    cy.get('div.canvas').find('button').click();
    cy.get('div.canvas').find('button').contains("Start");
  })
});
