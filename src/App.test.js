import { render, screen } from "@testing-library/react";
import App from "./App";


test("Testing the app component", () => {
  render(<App />)
  const text = screen.getByText(/my first react test case/i);  // for disable  case sensitivity we use /i
  const title = screen.getByTitle("Dog");

  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();

})

test("Test the input boxes", () => {
  render(<App />)
  const inputbox = screen.getByRole("textbox");
  const input_place_holdername = screen.getByPlaceholderText("Enter username")

  expect(inputbox).toBeInTheDocument();
  expect(input_place_holdername).toBeInTheDocument();
  expect(inputbox).toHaveAttribute('name', 'username')
  expect(inputbox).toHaveAttribute('id', 'userId')
  expect(inputbox).toHaveAttribute('value', 'user_input')

})


// Describe Functions

describe("Input box test group 1", () => {

  test("Input box name testing 1", () => {

    render(<App />)
    let input = screen.getByRole("textbox")

    expect(input).toHaveAttribute('name', 'username')


  })

})

  describe.only("Input box test group 2", () => {   // .only is used for the  single test to run in a group.

    test("Input box name testing 2", () => {

      render(<App />)
      let input = screen.getByRole("textbox")

      expect(input).toHaveAttribute('name', 'username')


    })

  })

  describe.skip("Input box test group 3", () => {   // .skip is  used if you want to skip running the specific test.

    test("Input box name testing 3", () => {

        render(<App />)
        let input = screen.getByRole("textbox")

        expect(input).toHaveAttribute('name', 'username')

    })


    // Nested Group(Inner groups)

    describe("Inner group", () =>{

      test("Input box name testing 3", () => {

        render(<App />)
        let input = screen.getByRole("textbox")

        expect(input).toHaveAttribute('name', 'username')
    })

    })

  })
