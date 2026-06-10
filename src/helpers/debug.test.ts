import { describe, it } from "vitest";

describe("debug", () => {
  it("shows environment", () => {
    console.log("window =", typeof window);
    console.log("document =", typeof document);
    console.log("localStorage =", typeof localStorage);
  });
});
