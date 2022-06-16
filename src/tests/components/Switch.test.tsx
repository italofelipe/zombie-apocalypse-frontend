import { fireEvent, render, screen } from "@testing-library/react";
import Switch from "../../components/Switch";

describe("Switch component tests", () => {
  it("Should render the Switch component", () => {
    const wrapper = render(<Switch isChecked={true} onCheck={jest.fn} />);

    expect(wrapper).toBeInTheDocument;
  });

  it("Should fire a callback onSelect whenever the user clicks on a survivor in the list", () => {
    let switchState = false;

    render(<Switch isChecked={switchState} onCheck={jest.fn} />);
    const item = screen.getByTestId("switch-button");
    const clickEvent = fireEvent.click(item);
    expect(clickEvent).toBeTruthy();
  });
});
