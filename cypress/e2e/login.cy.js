/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="email@example.com"]').should('be.visible');
    cy.get('input[placeholder="enter your password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('button').contains(/^Login$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="email@example.com"]').type('email@example.com');
    cy.get('button').contains(/^Login$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="email@example.com"]').type('email@example.com');
    cy.get('input[placeholder="enter your password"]').type('wrong_password');
    cy.get('button').contains(/^Login$/).click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    cy.get('input[placeholder="email@example.com"]').type('abdullah@dicoding.com');
    cy.get('input[placeholder="enter your password"]').type('abdullah');
    cy.get('button').contains(/^Login$/).click();
    cy.get('header').contains(/^Forum App$/).should('be.visible');
    cy.get('.nav-profile').click();
    cy.get('.dropdown-item').contains(/^Sign out$/).should('be.visible');
  });

  // 🔴 Tambahkan test gagal buatan untuk trigger CI fail
  it('should intentionally fail for CI test', () => {
    expect(true).to.be.false;
  });
});
