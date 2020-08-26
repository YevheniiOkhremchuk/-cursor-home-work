const button = document.querySelector(".get");
const div = document.querySelector(".result");
const input = document.querySelector(".numeric");

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

button.addEventListener("click", () => {
  getRandomChinese(input.value).then((res) => {
      div.innerHTML = res;
      });
});