import { main } from "../src/main";

describe("Main", () => {
  it("should run", async () => {
    expect(await main()).toBeUndefined();
  });
});
