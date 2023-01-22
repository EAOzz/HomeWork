export class PersonalAccountPage {
    elements = {
        changePasswordField1: () => cy.get('.layout-column-start > :nth-child(1) > .frm'),
        changePasswordField2: () => cy.get(':nth-child(4) > .form-page-group__main > .layout-column-start > :nth-child(2) > .frm'),
        changePasswordButton: () => cy.get('.layout-row-end > .btn-service'),
        exitAccountButton: () => cy.contains("Выйти с сайта")
    };

    changePassword(password) {
        this.elements.changePasswordField1().type(password);
        this.elements.changePasswordField2().type(password);
        this.elements.changePasswordButton().click()
    }
}