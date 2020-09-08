function firstLetter(name){
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

export function firstLetterExp(){
  console.log("HW-3:", firstLetter('yevhenii'));
}
