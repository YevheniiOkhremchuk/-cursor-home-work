const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const marks = [4, 5, 5, 3, 4, 5];

function StudentAssessment(student, mark) {
  let studentMarks = [];
  for (let i = 0; i < student.length; i++) {
    studentMarks.push([" " + student[i], " " + mark[i]]);
  }
  return studentMarks;
}
const assessment = StudentAssessment(students, marks);

export function StudentAssessmentExp(){
  console.log("HW-4:", assessment);
}
