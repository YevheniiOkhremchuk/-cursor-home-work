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

export function getRandomArrayExp(){
	console.log("HW-5:", random);
}

