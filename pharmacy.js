export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      if (drug.name !== "Magic Pill") {
        this.updateExpiration(drug);
        this.updateBenefit(drug);
      }
    });
    return this.drugs;
  }

  updateExpiration(drug) {
    drug.expiresIn -= 1;
  }

  updateBenefit(drug) {
    switch (drug.name) {
      case "Herbal Tea":
        this.updateHerbalTeaBenefit(drug);
        break;
      case "Fervex":
        this.updateFervexBenefit(drug);
        break;
      case "Dafalgan":
        this.updateDafalganBenefit(drug);
        break;
      default:
        this.updateNormalDrugBenefit(drug);
    }
  }

  updateHerbalTeaBenefit(drug) {
    this.increaseBenefit(drug, drug.expiresIn < 0 ? 2 : 1);
  }

  updateFervexBenefit(drug) {
    if (drug.expiresIn < 0) drug.benefit = 0;
    else if (drug.expiresIn < 5) this.increaseBenefit(drug, 3);
    else if (drug.expiresIn < 10) this.increaseBenefit(drug, 2);
    else this.increaseBenefit(drug, 1);
  }

  updateDafalganBenefit(drug) {
    this.decreaseBenefit(drug, drug.expiresIn < 0 ? 4 : 2);
  }

  updateNormalDrugBenefit(drug) {
    this.decreaseBenefit(drug, drug.expiresIn < 0 ? 2 : 1);
  }

  increaseBenefit(drug, amount) {
    drug.benefit = Math.min(drug.benefit + amount, 50);
  }

  decreaseBenefit(drug, amount) {
    drug.benefit = Math.max(drug.benefit - amount, 0);
  }
}
