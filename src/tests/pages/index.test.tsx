import { render } from "@testing-library/react";
import Home from "../../pages";

describe("Index page tests", () => {
  it("Should render the index page", () => {
    const wrapper = render(<Home />);

    expect(wrapper).toBeInTheDocument;
  });
});
