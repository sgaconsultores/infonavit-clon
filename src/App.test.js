import { render, screen } from "@testing-library/react";
import App from "./App";
import { hotjar } from "react-hotjar";

hotjar.initialize({ id: "4936466" });

// Identify the user
// hotjar.identify("USER_ID", { userProperty: "value" });

// // Add an event
// hotjar.event("button-click");

// // Update SPA state
// hotjar.stateChange("/my/page");

// Check if Hotjar has been initialized before calling its methods
// if (hotjar.initialized()) {
//   hotjar.identify("USER_ID", { userProperty: "value" });
// }

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
