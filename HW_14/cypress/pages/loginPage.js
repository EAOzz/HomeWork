export class LoginPage {
    elements = {
        loginField: () => cy.get(':nth-child(3) > .frm'),
        passwordField: () => cy.get(':nth-child(4) > .frm'),
        loginButton: () => cy.get('.btn-main'),
        personalAccountButton: (userName) => cy.contains(userName)
    };

    login(login, password) {
        this.elements.loginField().type(login);
        this.elements.passwordField().type(password);
        this.elements.loginButton().click()
    }

    goToPersonalAccount(userName){
        this.elements.personalAccountButton(userName).click({force: true});
    }
}