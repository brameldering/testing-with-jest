import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders good to see you if button was not clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const outputElement = screen.getByText(`It's good to see you!`, { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test(`renders "Changed!" after button was clicked`, async () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    // const buttonElement = screen.getByText("Change Text");
    act(() => {
      userEvent.click(buttonElement);
    });

    // Assert
    const outputElement = await screen.findByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });
  test(`No longer old text after button was clicked`, () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    // const buttonElement = screen.getByText("Change Text");
    act(() => {
      userEvent.click(buttonElement);
    });

    // Assert
    const outputElement = screen.queryByText(`good to see you!`, { exact: false });
    expect(outputElement).not.toBeInTheDocument();
  });
});
