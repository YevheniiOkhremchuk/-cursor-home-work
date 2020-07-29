const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


//1
function coupleOfStudents(list) {
    let girls = [];
    let boys = [];
    let pairs = [];
    for (student of list) {
    	if (student.split("").reverse()[0] === "а") {
   		girls.push(student);
    } else {
      boys.push(student);
    }
  }
    for (let i = 0; i < boys.length; i++) {
	    pairs.push([` ${boys[i]} - ${girls[i]}`] ); 
    }
  return  pairs;
	}
const pair = coupleOfStudents(students);
console.log (pair);

//2
function couplesWithThemes(couple, themes) {
  let couplesWithThemes = [];
  for (let i = 0; i < couple.length; i++) {
    couplesWithThemes.push ([couple[i].join("i"), " (" + themes[i] + ")"]);
  }
  return couplesWithThemes;
}
const couplesThemes = couplesWithThemes(pair, themes);
console.log (couplesThemes);

//3
function StudentAssessment(student, mark) {
  let studentMarks = [];
  for (let i = 0; i < student.length; i++) {
    studentMarks.push([" " + student[i], " " + mark[i]]);
  }
  return studentMarks;
}

const assessment = StudentAssessment(students, marks);
console.log (assessment);

//4
function randomAssessment(pair, themes){
  let scorePair = [];
  for (let i = 0; i < pair.length; i++) {
    scorePair.push([pair[i].join(" i"), " (" + themes[i] + ")",
      " " + (Math.random() * (1 - 5) + 5).toFixed(0),]);
  }
  return scorePair;
}

const random  = randomAssessment(pair, themes);
console.log (random);

let div = document.querySelector(".result");
div.innerHTML = `

<p><b>Students in pairs:</b>${pair};</p>
<p><b>Couples on the topic of projects:</b> ${couplesThemes};</p>
<p><b>Student assessment:</b> ${assessment};</p>
<p><b>Score each pair:</b> ${random};</p>`;