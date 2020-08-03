const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

//1
const getRandomArray = (length, min, max) => {
	let getArr = [];
	for (let i = 0; i < numbers.length; i++){
		getArr[i] = Math.floor(Math.random() * (max - min +1) + max);
	}
	return getArr;
}
const random  = getRandomArray(15, 1, 100);
console.log (random);

//3
const getAverage = (...numbers) => {
	let filtNum = numbers.filter(item => item % 1 === 0);
	return filtNum.reduce((a, b) => a + b) / filtNum.length
}
const average  = getAverage(...numbers);
console.log (average);

//5
const filterEvenNumbers = (...numbers) => {
    return numbers.filter((numbers) => numbers % 1 === 0 && numbers % 2);
  }
const notEveNumbers = filterEvenNumbers(...numbers);
console.log (notEveNumbers);

//6
const countPositiveNumbers = (...numbers) =>{
    let count = 0;
    numbers.filter(item => {
        if (item > 0) {
            count++;
        }
    });
    return count;
}
const countPositive = countPositiveNumbers(...numbers);
console.log (countPositive);

//7
const getDividedByFive = (...numbers) =>{
	  return numbers.filter(item => item % 5 === 0);
}
const getDivided = getDividedByFive(...numbers);
console.log (getDivided);

//9
const divByThree = (word) =>{
	let wordd = [];
	for(let i = 0; i < word.length; i+=3){
		wordd.push(word.slice(i, i+3));
	}
	return wordd;
}
const threeLet = divByThree('Commander');
console.log (threeLet);


let div = document.querySelector(".result");
div.innerHTML = `

<p><b>Функція №1:</b>${random};</p>
<p><b>Функція №3:</b>${average};</p>
<p><b>Функція №5:</b>${notEveNumbers};</p>
<p><b>Функція №6:</b>${countPositive};</p>
<p><b>Функція №7:</b>${getDivided};</p>
<p><b>Функція №9:</b>${threeLet}.</p>`;

