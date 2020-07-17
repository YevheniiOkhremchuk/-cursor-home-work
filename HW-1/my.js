let cruise = 15.678;
let mirta = 123.965;
let timex = 90.2345;

let maxNumber = (Math.max(cruise, mirta, timex));
console.log(maxNumber);
 
let minNumber = (Math.min(cruise, mirta, timex));
console.log(minNumber);

let theCostOfAllGoods = (cruise + mirta + timex);
console.log(theCostOfAllGoods);

let withoutCents = Math.floor(theCostOfAllGoods);
console.log(withoutCents);

let rounded = (Math.round(theCostOfAllGoods / 100) * 100);
console.log(rounded);

let evenOrOdd = Math.floor(theCostOfAllGoods) % 2 === 0 ? "true" : "false";
console.log(evenOrOdd);

let rest = 500 - theCostOfAllGoods;
console.log(rest);

let averagePrice = (theCostOfAllGoods / 3).toFixed(2);
console.log(averagePrice);

let randomDiscount = (Math.random() * 100).toFixed(0);
console.log(randomDiscount);

let amountToBePaid = (theCostOfAllGoods - theCostOfAllGoods * randomDiscount / 100).toFixed(2);
console.log(amountToBePaid);

let netProfit = (theCostOfAllGoods / 2 - (theCostOfAllGoods - amountToBePaid)).toFixed(2);
console.log(netProfit);
  
let div = document.querySelector("div")
div.innerHTML = `

<p>Максимальне число: ${maxNumber};</p>
<p>Мінімальне число: ${minNumber};</p>
<p>Вартість всіх товарів: ${theCostOfAllGoods};</p>
<p>Округлення в меньшу сторону: ${withoutCents};</p>
<p>Сума товарів округлена до сотень: ${rounded};</p>
<p>Сума всіх товарів: ${evenOrOdd };</p>
<p>Сума решти: ${rest};</p> 
<p>Середня ціна після коми: ${averagePrice};</p>
<p>Випадкова знижка: ${randomDiscount};</p>
<p>Суму, яку потрібно сплатити: ${amountToBePaid};</p>
<p>Чистий дохід: ${netProfit};</p>`