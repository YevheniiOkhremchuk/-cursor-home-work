const gener = document.getElementById("gener");
const result = document.getElementById("result");

function* createIdGenerator(){
    let i = 1;
    while(true)
    yield i++;
}

const idGenerator = createIdGenerator();

gener.addEventListener('click',() => {
    result.innerHTML = idGenerator.next().value ;
})