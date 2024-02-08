
# React Todo App Test Plan

## Introduction
This document outlines the testing strategy for the Todo React App using Cypress. Cypress is a modern end-to-end testing framework for web applications. The goal is to ensure that all components and features of the Todo App are thoroughly tested to maintain quality and functionality.

## Test Structure
Tests will be organized into test suites corresponding to the different components and functionalities of the Todo App. Each test suite will contain multiple test cases covering various scenarios.

## Test Cases

1. **Focus Input on Load**
   - **Type of Test:** UI Test
   - **Cases:**
     - Verify that the input field is focused when the page loads.
  
2. **Accepts Input**
   - **Type of Test:** UI Test
   - **Cases:**
     - Verify that the input field accepts user input correctly.

3. **Adds a New Todo**
   - **Type of Test:** UI Test
   - **Cases:**
     - Verify that a new todo is added when submitted.

4. **Marks a Todo as Completed**
   - **Type of Test:** UI Test
   - **Cases:**
     - Verify that a todo can be marked as completed.

5. **Deletes a Todo**
   - **Type of Test:** UI Test
   - **Cases:**
     - Verify that a todo can be deleted.

6. **Edits a Todo**
   - **Type of Test:** UI Test
   - **Cases:**
     - Verify that a todo can be edited.

7. **Filters Todos**
   - **Type of Test:** UI Test
   - **Cases:**
     - Verify that todos can be filtered based on completion status.

8. **Clears Completed Todos**
   - **Type of Test:** UI Test
   - **Cases:**
     - Verify that completed todos can be cleared.

9. **Toggles All Todos**
   - **Type of Test:** UI Test
   - **Cases:**
     - Verify that all todos can be toggled between completed and active states.

## Conclusion

This test plan provides a comprehensive overview of the test cases for each component of the todo list application. By following these test cases, we ensure that the application functions as expected and meets the specified requirements.


## Running React App and Tests

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn cypress`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
