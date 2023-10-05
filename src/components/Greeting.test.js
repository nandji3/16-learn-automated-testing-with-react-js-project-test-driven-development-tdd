import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting Component --> This is 1st Testing Suites Name', () => { //means one suites with one test
    test('Renders Hello World', () => {
        //Arrange
        render(<Greeting />);

        //Act
        // ...nothing

        //Assert
        const helloWorldElement = screen.getByText('Hello World', { exact: false })
        expect(helloWorldElement).toBeInTheDocument();
    });

    test("Rendering It's good to see you ! if the button was NOT clicked", () => {
        //Arrange
        render(<Greeting />);

        //Assert
        const pFalsyEle = screen.getByText("It's good to see you !");
        expect(pFalsyEle).toBeInTheDocument();
    })

    test('Rendeting "Changed !" if the button was clicked', () => {
        //Arrange - which component want to test render it
        render(<Greeting />);

        //Act - which type of action/event trigger
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert - output
        const pTruthyEle = screen.getByText("Changed !");
        expect(pTruthyEle).toBeInTheDocument();
    })

    test("does not render 'Its good to see you !' if the button was clicked ", () => {
        //Arrange - which component want to test render it
        render(<Greeting />);

        //Act - which type of action/event trigger
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert - output
        const pTruthyEle = screen.queryByText("It's good to see you !", { exact: false });
        expect(pTruthyEle).toBeNull();
    })

})

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
