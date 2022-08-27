import { render, screen } from "@testing-library/react";
import DataHandler from "./dataHandler";

test("check if data is pulled", () => {
  render(<DataHandler />);
  const pulledData = screen.getBy;
});
