const gener = document.getElementById("gener");
const result = document.getElementById("result");
const size = document.getElementById("size");
const button = document.getElementById("button");
const down = document.getElementById("down");
const up = document.getElementById("up");

function* createIdGenerator(){
    let i = 1;
    while(true)
    yield i++;
}

const idGenerator = createIdGenerator();

gener.addEventListener('click',() => {
    result.innerHTML = idGenerator.next().value ;
})

let fontSize = 14;
let regulate;


function* regulateFontSize () {
  while(true){
  	 if (regulate === true) {
            yield (fontSize += 2);
        } else {
            yield (fontSize -= 2);
        }
    } 
}
const change = regulateFontSize();

down.addEventListener("click", () => {
    regulate = true;
    size.style.fontSize = `${change.next().value}px`;
});
up.addEventListener("click", () => {
    regulate = false;
    size.style.fontSize = `${change.next().value}px`;
});