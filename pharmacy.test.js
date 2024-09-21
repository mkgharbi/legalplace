import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("Case Magic Pill : should not decrease the benefit and expiresIn of Magic Pill", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Magic Pill", 2, 3)]);
  });
  it("Case Magic Pill : should not decrease the benefit and expiresIn of Magic Pill", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 0, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Magic Pill", 0, 3)]);
  });
  it("Case Default drug: should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });
  it("Case Default drug : should decrease the benefit twice as fast when day 0 arrived", () => {
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)],
    );
  });
  it("Case Default drug : should descrease the benefit twice as fast when expired", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 2)]).updateBenefitValue(),
    ).toEqual([new Drug("test", -2, 0)]);
  });
  it("Case Herbal Tea : should increase the benefit and decrease expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });
  it("Case Herbal Tea : should increase the benefit twice as fast when expired", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Herbal Tea", -1, 5)]);
  });
  it("Case Herbal Tea: should not increase the benefit more than 50 before expiration", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue(),
    ).toEqual([new Drug("Herbal Tea", 1, 50)]);
  });
  it("Case Herbal Tea: should not increase the benefit more than 50 after expiration", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -1, 50)]).updateBenefitValue(),
    ).toEqual([new Drug("Herbal Tea", -2, 50)]);
  });
  it("Case Fervex: should increase the benefit by 1 when expiresIn is more than 10 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 20, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 19, 4)]);
  });
  it("Case Fervex: should not increase the benefit more than 50 when expiresIn is more than 10 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 20, 50)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 19, 50)]);
  });
  it("Case Fervex: should increase the benefit by 2 when expiresIn is 10 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 9, 5)]);
  });
  it("Case Fervex: should increase the benefit by 2 when expiresIn is 6 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 6, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 5, 5)]);
  });
  it("Case Fervex: should not increase the benefit more than 50 when expiresIn is 6 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 6, 49)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 5, 50)]);
  });
  it("Case Fervex: should not increase the benefit more than 50 when expiresIn is 6 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 6, 50)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 5, 50)]);
  });
  it("Case Fervex: should increase the benefit by 3 when expiresIn is 5 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 4, 6)]);
  });
  it("Case Fervex: should increase the benefit by 3 when expiresIn is 1 day", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 1, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 0, 6)]);
  });
  it("Case Fervex: should not increase the benefit more than 50 when expiresIn is 1 day", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 1, 49)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 0, 50)]);
  });
  it("Case Fervex: should not increase the benefit more than 50 when expiresIn is 0 day", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 1, 50)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 0, 50)]);
  });
  it("Case Fervex: should set the benefit to 0 when expiresIn is 0 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
  it("Case Fervex: should set the benefit to 0 when expiresIn is -1 days", () => {
    expect(
      new Pharmacy([new Drug("Fervex", -1, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", -2, 0)]);
  });
  it("Case Dafalgan: should decrease the benefit by 2", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Dafalgan", 1, 1)]);
  });
  it("Case Dafalgan: should decrease the benefit by 4 when expired", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", -1, 5)]).updateBenefitValue(),
    ).toEqual([new Drug("Dafalgan", -2, 1)]);
  });
  it("Case Dafalgan: should not decrease the benefit below 0", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 1)]).updateBenefitValue(),
    ).toEqual([new Drug("Dafalgan", 1, 0)]);
  });
  it("Case Dafalgan: should not decrease the benefit below 0 when expired", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", -1, 1)]).updateBenefitValue(),
    ).toEqual([new Drug("Dafalgan", -2, 0)]);
  });
});
