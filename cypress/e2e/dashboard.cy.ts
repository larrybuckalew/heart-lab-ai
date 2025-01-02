describe('Dashboard', () => {
  beforeEach(() => {
    cy.login('test@example.com', 'password123');
    cy.visit('/dashboard');
  });

  it('should display patient list', () => {
    cy.getByTestId('patient-list').should('exist');
    cy.getByTestId('patient-card').should('have.length.greaterThan', 0);
  });

  it('should allow patient search', () => {
    cy.getByTestId('search-input').type('John');
    cy.getByTestId('patient-card')
      .should('have.length.greaterThan', 0)
      .and('contain', 'John');
  });

  it('should navigate to patient details', () => {
    cy.getByTestId('patient-card').first().click();
    cy.url().should('include', '/patients/');
    cy.getByTestId('patient-details').should('exist');
  });

  it('should display ECG analysis', () => {
    cy.getByTestId('patient-card').first().click();
    cy.getByTestId('ecg-analysis-tab').click();
    
    cy.getByTestId('ecg-chart').should('exist');
    cy.getByTestId('analysis-results').should('exist');
  });
});