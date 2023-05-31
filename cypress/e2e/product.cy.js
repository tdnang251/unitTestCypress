describe('The Search Page', () => {
    it('successfully loads', () => {
      // this.currentUser will now point to the response
      // body of the cy.request() that we could use
      // to log in or work with in some way
  
      cy.visit('http://localhost:8000/product/search')

      Cypress.Commands.addQuery('searchProduct', function searchProduct(options = {name:"th"}) {
        const log = options.log !== false && Cypress.log({ timeout: options.timeout })
      
        this.set('timeout', options.timeout)
      
        return () => {
          let $el = cy.getFocused()
      
          log &&
            cy.state('current') === this &&
            log.set({
              $el,
              consoleProps: () => {
                return {
                  Yielded: $el?.length ? $el[0] : '--nothing--',
                  Elements: $el != null ? $el.length : 0,
                }
              },
            })
      
          if (!$el) {
            $el = cy.$$(null)
            $el.selector = 'focused'
          }
      
          return $el
        }
      })
    })
  })