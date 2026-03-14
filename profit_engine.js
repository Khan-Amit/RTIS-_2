function profitSimulation(qty, sellPrice, salesRate, landingCost){

let soldUnits = qty * salesRate / 100;

let revenue = soldUnits * sellPrice;

let profit = revenue - landingCost;

return profit;

}
