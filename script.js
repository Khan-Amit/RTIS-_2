function calculate(){

let price = Number(document.getElementById("price").value);
let qty = Number(document.getElementById("qty").value);
let freight = Number(document.getElementById("freight").value);
let insurance = Number(document.getElementById("insurance").value);
let tax = Number(document.getElementById("tax").value);

let fuel = Number(document.getElementById("fuel").value);
let delay = Number(document.getElementById("delay").value);
let season = Number(document.getElementById("season").value);

let sell = Number(document.getElementById("sell").value);
let sales = Number(document.getElementById("sales").value);

let baseCost = price * qty;

let taxCost = baseCost * tax / 100;

let landingCost = baseCost + freight + insurance + taxCost;

let risk = riskAdjustment(landingCost,fuel,delay,season);

landingCost = landingCost + risk;

let profit = profitSimulation(qty,sell,sales,landingCost);

let pop = (profit/landingCost)*100;

let tds = (pop + sales)/2;

document.getElementById("landing").innerHTML =
"Landing Cost: $" + landingCost.toFixed(2);

document.getElementById("profit").innerHTML =
"Profit: $" + profit.toFixed(2);

document.getElementById("pop").innerHTML =
"POP Score: " + pop.toFixed(2) + "%";

document.getElementById("tds").innerHTML =
"TDS Score: " + tds.toFixed(2);

  }
