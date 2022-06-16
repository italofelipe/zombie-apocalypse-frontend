import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "../../components/Modal/";

describe("Index page tests", () => {
  it("Should render the index page", () => {
    const wrapper = render(
      <Modal context="success" handleDisplay={jest.fn} isOpen={true} />
    );

    expect(wrapper).toBeInTheDocument;
  });

  it("Should fire a callback onSelect whenever the user clicks on a survivor in the list", () => {

    const modal = render(<Modal context="success" handleDisplay={jest.fn} isOpen={true} />);
    const item = screen.getByTestId("close-modal-button");
    fireEvent.click(item);
    expect(modal).not.toBeInTheDocument;
  });
});
