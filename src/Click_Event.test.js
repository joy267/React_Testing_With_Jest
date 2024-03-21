import { fireEvent, render,screen } from "@testing-library/react"
import App from "./App"

test("Click Event Test Case", ()=>{
    render(<App/>)
    let button = screen.getByRole("button")
    fireEvent.click(button)
    expect(screen.getByText("Login Successfully")).toBeInTheDocument()
})