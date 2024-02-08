// describe('input form', () => {
//   it('focus input on load', () => {
//     cy.visit('http://localhost:3000/')

//     cy.focused().should('have.class','new-todo')
//   })

//   it.only('accepts input',() =>{
//     const typedText = 'Doing Assignment';
//     cy.visit('http://localhost:3000/')
//     cy.get('.new-todo').type(typedText).should('have.value',typedText)
//   })
// })

describe('Todo App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Focus Input on Load', () => {
    cy.focused().should('have.class', 'new-todo');
  });

  it('Accepts Input', () => {
    const typedText = 'Doing Assignment';
    cy.get('.new-todo').type(typedText).should('have.value', typedText);
  });

  it('Adds a New Todo', () => {
    const newTodoText = 'New Todo';
    cy.get('.new-todo').type(`${newTodoText}{enter}`);
    cy.get('[data-testid="todo-item"]').should('contain', newTodoText);
  });

  it('Marks a Todo as Completed', () => {
    const newTodoText = 'New Todo';
    cy.get('.new-todo').type(`${newTodoText}{enter}`);
    cy.get('[data-testid="todo-item-toggle"]').check();
    cy.get('[data-testid="todo-item"]').should('have.class', 'completed');
  });

  it('Deletes a Todo', () => {
    const newTodoText = 'New Todo';
    cy.get('.new-todo').type(`${newTodoText}{enter}`);
    cy.get('[data-testid="todo-item-button"]').click({force: true}); // Add {force: true} option
    cy.get('[data-testid="todo-item"]').should('not.exist');
  });

  it('Edits a Todo', () => {
    // Add a new todo
    const todoText = 'New Todo';
    cy.get('.new-todo').type(todoText + '{enter}');
  
    // Click on the todo item's label to enter edit mode
    cy.contains('.todo-list li', todoText).find('label').dblclick();
  
    // Set the value of the input field directly
    const editedTodoText = 'Edited Todo';
    cy.get('.todo-list li input.edit').invoke('val', editedTodoText).type('{enter}');
  
    // Verify that the todo is edited
    cy.contains('.todo-list li', editedTodoText).should('exist');
  });
  
  
  
  

  it('Filters Todos', () => {
    // Add some todos
    cy.get('.new-todo').type('First Todo{enter}');
    cy.get('.new-todo').type('Second Todo{enter}');

    // Mark the first todo as completed
    cy.get('.todo-list li input.toggle').first().check();

    // Filter by "Active" todos
    cy.contains('Active').click();
    cy.get('.todo-list li').should('have.length', 1);
    cy.contains('.todo-list li', 'Second Todo').should('exist');

    // Filter by "Completed" todos
    cy.contains('Completed').click();
    cy.get('.todo-list li').should('have.length', 1);
    cy.contains('.todo-list li', 'First Todo').should('exist');

    // Filter by "All" todos
    cy.contains('All').click();
    cy.get('.todo-list li').should('have.length', 2);
  });

  
  
  it('Clears Completed Todos', () => {
    cy.get('.new-todo').type('First Todo{enter}');
    cy.get('.new-todo').type('Second Todo{enter}');
    cy.get('[data-testid="todo-item-toggle"]').first().check();
    cy.contains('Clear completed').click();
    cy.get('[data-testid="todo-item"]').should('have.length', 1);
  });

  it('Toggles All Todos', () => {
    cy.get('.new-todo').type('First Todo{enter}');
    cy.get('.new-todo').type('Second Todo{enter}');
    
    cy.get('[data-testid="toggle-all"]').check();
    cy.get('[data-testid="todo-item-toggle"]').should('be.checked');

    cy.get('[data-testid="toggle-all"]').uncheck();
    cy.get('[data-testid="todo-item-toggle"]').should('not.be.checked');
  });
});
