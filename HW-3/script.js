//1
function getMaxDigit(number) {
  number = String(number).split("");
  let maxDigit= 0;
  for (let i = 0; i < number.length; i++) {
    if (maxDigit< number[i]) {
      maxDigit = number[i];
    }
  }
  return  maxDigit;
}

//3
function firstLetter(name){
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

 //4
function amountAfterTax(salary){
	const tax = 19.5;
    const theAmountOfTax = (salary /100 ) * tax;
  	return salary - theAmountOfTax;
}

//5
function getRandomNumber(n1, n2) {
  const ran = Math.round( Math.random() * (n2 - n1)) + n1;
  
  return ran;
}

 //6
function countLetter(letter, word){
	let count = 0;
	const toLowerLetter = letter.toLowerCase();
	const toLowerWord = word.toLowerCase();
	for(let i = 0; i < toLowerWord.length; i++){
		if(toLowerLetter  === toLowerWord[i]){
		count++;
		} 
	}
	return count;
}

//8
function getRandomPassword(characters){
    if(!isNaN(characters) && characters > 0){
        let password = '';
        for(let і = 0; і < characters; і++){
            password += parseInt(Math.floor(Math.random()*10))
        }
        return password
    }
}

let div = document.querySelector(".result");
div.innerHTML = `

<p>Функція №1: ${getMaxDigit(187654321)};</p>
<p>Функція №3: ${firstLetter('yevhenii')};</p>
<p>Функція №4: ${amountAfterTax(1000)};</p>
<p>Функція №5: ${getRandomNumber(5, 10)};</p>
<p>Функція №6: ${countLetter('r', 'library')};</p>
<p>Функція №8: ${getRandomPassword(8)};</p>`