import { describe, it, expect, beforeEach } from "vitest";
import { DescriptionStorage } from "./descriptionStorage";

describe("DescriptionStorage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("saves and retrieves a description", () => {
    DescriptionStorage.saveDescription(1, "Beautiful landscape");

    expect(DescriptionStorage.getDescription(1)).toBe("Beautiful landscape");
  });

  it("returns empty string when description does not exist", () => {
    expect(DescriptionStorage.getDescription(999)).toBe("");
  });
});
