import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const validProps = [{ image: "image1" }];

  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults results={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
