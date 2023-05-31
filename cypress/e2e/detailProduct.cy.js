describe('The Admin Page', () => {
    it('successfully loads', () => {
        // this.currentUser will now point to the response
        // body of the cy.request() that we could use
        // to log in or work with in some way

        cy.visit('http://localhost:8000/admin')

        const { username, password } = {username:"admin",password:"admin"}

        cy.get('input[name=username]').type(username)

        // {enter} causes the form to submit
        cy.get('input[name=password]').type(`${password}{enter}`)

    })
})
