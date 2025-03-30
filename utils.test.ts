import { formatDate } from "./utils";

describe("utils", () => {
  describe("formatDate", () => {
    it("should format the date correctly", () => {
      const date = "2023-10-01T12:00:00Z";
      const expectedDate = new Date(date).toLocaleDateString("pl-PL", {});
      expect(formatDate(new Date(date))).toBe(expectedDate);
    });
  });
});
