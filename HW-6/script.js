const students = [{
	name: "Tanya",
	course: 3,
	subjects: {
	  math: [4, 4, 3, 4],
	  algorithms: [3, 3, 3, 4, 4, 4],
	  data_science: [5, 5, 3, 4]
	}
  }, {
	name: "Victor",
	course: 4,
	subjects: {
	  physics: [5, 5, 5, 3],
	  economics: [2, 3, 3, 3, 3, 5],
	  geometry: [5, 5, 2, 3, 5]
	}
  }, {
	name: "Anton",
	course: 2,
	subjects: {
	  statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
	  english: [5, 3],
	  cosmology: [5, 5, 5, 5]
	}
  }];
  
  
  //1
  const getSubjects = (students) => {
	  const subjects = Object.keys(students.subjects);
	  return subjects.map(el => el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase().replace('_',' '));
  };
  
  console.log(getSubjects(students[0]));
  console.log(getSubjects(students[1]));
  console.log(getSubjects(students[2]));
  
  //2
  const getAverageMark = (students) => {
	  const average = Object.values(students.subjects).flat();
	  let sum = 0;
		  for(let i = 0; i < average.length; i++){
			sum += average[i];
		  }
		  return +(sum / average.length).toFixed(2);
		};
	
  console.log(getAverageMark(students[0]));
  console.log(getAverageMark(students[1]));
  console.log(getAverageMark(students[2]));
	
  //3
  const getStudentInfo = (students) => {
	  const{name,course} = students
	 return {course, name, avarageMark:getAverageMark(students)}
  };
  
  console.log(getStudentInfo(students[0]));
  console.log(getStudentInfo(students[1]));
  console.log(getStudentInfo(students[2]));
  
  //4
  const getStudentsNames = (students) => {
	   return students.map(el => el.name).sort();
  };
  
  console.log(getStudentsNames(students));
  
  //5
  const getBestStudent = (students) =>{
	  const bestStudent  = students.map(el =>{
		  el.averageMark = getAverageMark(el);
		  return el.averageMark;
	  }).sort((a,b)=>b-a)[0];
	  
	  return students.filter(el => el.averageMark === bestStudent)[0].name
  };
  
  console.log(getBestStudent(students));
  
  //6
  const calculateWordLetters = (test) =>{
	  let word = {};
	  for(el of test){
		  if (word [el]){
			  (word [el]++);
		  }else{
			  word [el] = 1;
		  }
	  }
	  return word;
  };
  
  console.log(calculateWordLetters('test'));
  
  
  let div = document.querySelector(".result");
  div.innerHTML = `
  
  <p><b>Функція №1:</b>${getSubjects(students[0])};</p>
  <p><b>Функція №2:</b>${getAverageMark(students[0])};</p>
  <p><b>Функція №3:</b>${getStudentInfo(students[0])};</p>
  <p><b>Функція №4:</b>${getStudentsNames(students)};</p>
  <p><b>Функція №5:</b>${getBestStudent(students)};</p>
  <p><b>Функція №6 (test):</b>${calculateWordLetters('test')}.</p>`;

