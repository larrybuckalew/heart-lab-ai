describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should display login form', () => {
    cy.getByTestId('login-form').should('exist');
    cy.getByTestId('email-input').should('exist');
    cy.getByTestId('password-input').should('exist');
    cy.getByTestId('login-button').should('exist');
  });

  it('should handle successful login', () => {
    cy.getByTestId('email-input').type('test@example.com');
    cy.getByTestId('password-input').type('password123');
    cy.getByTestId('login-button').click();

    // Should redirect to dashboard
    cy.url().should('include', '/dashboard');
    cy.getByTestId('user-menu').should('exist');
  });

  it('should handle login errors', () => {
    cy.getByTestId('email-input').type('invalid@example.com');
    cy.getByTestId('password-input').type('wrongpassword');
    cy.getByTestId('login-button').click();

    cy.getByTestId('error-message')
      .should('exist')
      .and('contain', 'Invalid credentials');
  });
});