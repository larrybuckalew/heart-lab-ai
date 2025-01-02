describe('Dashboard Page', () => {
  beforeEach(() => {
    cy.visit('/dashboard');
  });

  it('displays the dashboard header', () => {
    cy.get('h1').should('contain', 'Heart Lab Dashboard');
  });

  it('shows health metrics section', () => {
    cy.get('[data-testid="health-metrics"]').should('exist');
  });

  it('can navigate to patient records', () => {
    cy.get('[data-testid="patient-records-link"]').click();
    cy.url().should('include', '/patients');
  });
});