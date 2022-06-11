import { render } from "@testing-library/react";
import SelectedSurvivor from "../../components/SelectedSurvivor";
import { mockSurvivorList } from "../../__mocks__/survivorsList";

describe("Index page tests", () => {
  it("Should render the index page", () => {
    const wrapper = render(<SelectedSurvivor survivor={mockSurvivorList[0]}/>);

    expect(wrapper).toBeInTheDocument;
  });
});
