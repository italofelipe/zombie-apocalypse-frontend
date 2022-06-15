import { fireEvent, render, screen } from "@testing-library/react";
import SurvivorsList from "../../components/SurvivorsList";
import { mockSurvivorList } from "../../__mocks__/survivorsList";

describe("SurvivorsList component tests", () => {
  it("Should render the SurvivorsList component", () => {
    const wrapper = render(
      <SurvivorsList onSelect={jest.fn} survivors={mockSurvivorList} />
    );

    expect(wrapper).toBeInTheDocument;
  });

  it("Should fire a callback onSelect whenever the user clicks on a survivor in the list", () => {
    render(<SurvivorsList onSelect={jest.fn} survivors={mockSurvivorList} />);
    const item = screen.getByTestId("survivor-item-1234");
    const clickEvent = fireEvent.click(item);
    expect(clickEvent).toBeTruthy();
  });
});
