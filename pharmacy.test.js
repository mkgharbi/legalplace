import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });

  it("should decrease the benefit twice as fast when expired", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Dafalgan", 1, 1)]);
  });
  it("should increase the benefit of Herbal Tea", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });
});
