function getRandomChinese(length) {
  return new Promise(function(resolve) {
    let sign = Number(Date.now().toString().slice(-5));
    let result = [];
    for (let i = 0; i < length; i++) {
      sign += i;
      result.push(String.fromCharCode(sign));
    }
    setTimeout(() => resolve(result.join("")), length * 50);
  });
}
export function getRandomChineseExp(){
	console.log ("HW-11:", getRandomChinese(5));
}