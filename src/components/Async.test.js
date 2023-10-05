import { findAllByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Async from "./Async";

describe('Async Component', () => { //means one suites with one test
    test('Renders Post if request succeeds', async () => {

        window.fetch = jest.fn()  //Moke fn =>jest.fn() 
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }]
        });

        //Arrange
        render(<Async />);

        //Assert
        const listItemElements = await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0);
    });

})

// Mock the fetch function:

// window.fetch = jest.fn() mocks the fetch function globally for the test. It replaces the actual fetch function with a Jest mock function.
// window.fetch.mockResolvedValueOnce is used to mock a resolved response from the fetch function. It simulates a successful network request and provides a JSON response with a single post.


/*

writing a test for an asynchronous component using Jest and the @testing-library/react library. This test is for the "Async" component, specifically for rendering posts when a request succeeds. Let me break down the code and explain what's happening:

Import necessary functions and libraries:

findAllByRole, render, and screen are imported from @testing-library/react. These are utility functions for rendering and querying React components in tests.
userEvent is imported from @testing-library/user-event, which provides utilities for simulating user interactions in tests.
Async is the component being tested.
Define a test suite using describe:

describe is used to group related test cases together. In this case, you're describing the behavior of the "Async" component.
Define a test using test:

test is used to define a single test case. This test case checks whether the component renders posts when a request succeeds.
Mock the fetch function:

window.fetch = jest.fn() mocks the fetch function globally for the test. It replaces the actual fetch function with a Jest mock function.
window.fetch.mockResolvedValueOnce is used to mock a resolved response from the fetch function. It simulates a successful network request and provides a JSON response with a single post.
Arrange:

render(<Async />) renders the "Async" component. This is the step where the component is actually mounted and rendered for testing.
Assert:

await screen.findAllByRole('listitem') queries the rendered component for elements with the role 'listitem'. This is done asynchronously, so it awaits the result.
expect(listItemElements).not.toHaveLength(0) is an assertion that checks whether the list of items (posts) is not empty. If the network request succeeds and the component renders posts, this assertion will pass.
This test case ensures that the "Async" component correctly renders posts when the fetch function is mocked to return a successful response. It's a basic example of testing asynchronous code in a React component.

*/

//Note ---->
//Writing Tests --> The Three "A"s
// A - Arrange - Set up the test data, test conditions and test environment.
// A - Act - Do the things which we will actually want to test. (Run logic that should be tested (eg. execute function).
//     for eg. If we want to simulate the button click so we want to do that on second step.
// A - Assert - Assert the result. Looks the output thats visible in the screen and then see if matches our expectation.
// (Compare execution results with expected results)


//get fn --> throw an error if element is not found.
// query fn -->
//find fn --> return a promise

// Test Suites ---> In our app dozons or thousands of test organized and grouped thos different test into test suites.
// Create testing suites by using global describe function  -->describe()

// getByRole -->will allow me to find out the access of list of Item
//getAllByRole --> we immidiately get all the items on the screen and initially there are empty.
// So Instead of this we use findAllByRole() ---> find and get query return a promise