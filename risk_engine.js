function riskAdjustment(baseCost, fuel, delay, season){

let fuelRisk = baseCost * fuel / 100;

let delayRisk = delay;

let seasonalRisk = baseCost * season / 100;

let totalRisk = fuelRisk + delayRisk + seasonalRisk;

return totalRisk;

  }
