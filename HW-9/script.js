let interval = null;

const renderBlock = (rows, cells) => {
    const blockCells = new Array(cells)
        .fill(null)
        .map(() => '<div class="block__cell"></div>')
        .join('');

    const blockRows = new Array(rows)
        .fill(null)
        .map(() =>  `<div class="block__row"> ${blockCells} </div>`)
        .join('');

    return blockRows
}

const getRandomColor = () =>  {
  let setColor = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += setColor[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colorOfCells = () =>  {
    let block = document.querySelectorAll('.block__cell'); 
        for (let i = 0; i < block.length; i++) {
            block[i].style.background = `${getRandomColor()}`;
        }
}

const generateBlocks = () => {
    clearInterval(interval);
    block.innerHTML = renderBlock(5,5);
    colorOfCells();
}

const generateBlocksInterval = () => {
    generateBlocks();
    interval = setTimeout(colorOfCells, 1000);
}