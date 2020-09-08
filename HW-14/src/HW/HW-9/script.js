export const getRandomColor = () =>  {
  let setColor = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += setColor[Math.floor(Math.random() * 16)];
  }
  return  console.log("HW-9:", color);;
}

