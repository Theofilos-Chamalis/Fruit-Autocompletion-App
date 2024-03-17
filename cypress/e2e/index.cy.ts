describe('Home page testing', () => {
  it('Should navigate to the home page and check if the h1 exists', () => {
    // Go to the index page
    cy.visit('http://localhost:3000/');

    // The new page should contain the Fuit Autocompletion App h1
    cy.get('h1').contains('Fruit Autocompletion App');
  });

  it('Should load the combobox component', () => {
    // Go to the index page
    cy.visit('http://localhost:3000/');

    // Wait for the combobox to load
    cy.wait(4000);

    // Check that the combobox label is correct
    cy.get('[id$="label"]').contains('Find your favorite fruit');
  });
});
