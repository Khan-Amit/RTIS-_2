function calculate(){

price = Number(document.getElementById("price").value);
qty = Number(document.getElementById("qty").value);
freight = Number(document.getElementById("freight").value);
insurance = Number(document.getElementById("insurance").value);
tax = Number(document.getElementById("tax").value);

fuel = Number(document.getElementById("fuel").value);
delay = Number(document.getElementById("delay").value);
season = Number(document.getElementById("season").value);

sell = Number(document.getElementById("sell").value);
sales = Number(document.getElementById("sales").value);

baseCost = price * qty;

taxCost = baseCost * tax / 100;

landingCost = baseCost + freight + insurance + taxCost + fuel + delay;

seasonRisk = landingCost * season / 100;

landingCost = landingCost + seasonRisk;

soldUnits = qty * sales / 100;

revenue = soldUnits * sell;

profit = revenue - landingCost;

pop = (profit / landingCost) * 100;

tds = (pop + sales) / 2;

document.getElementById("landing").innerHTML =
"Landing Cost: $" + landingCost.toFixed(2);

document.getElementById("profit").innerHTML =
"Profit: $" + profit.toFixed(2);

document.getElementById("pop").innerHTML =
"POP Score: " + pop.toFixed(2) + "%";

document.getElementById("tds").innerHTML =
"TDS Score: " + tds.toFixed(2);

}
