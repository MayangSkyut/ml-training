/**
 * Write a function that computes the average marks of the following students: Then this average is used to determine the corresponding grade.
 * - John: 90
 * - Jane: 85
 * - Joe: 95
 * - Tom: 65
 * - Nancy: 75
 *
 * Grade computed as follows:
 * < 60 : F
 * 60-69 : D
 * 70-79 : C
 * 80-89 : B
 * >= 90 : A
 * @return {number} The average marks of the students.
 */

// const students = [
//   { name: "John", mark: 90 },
//   { name: "Jane", mark: 85 },
//   { name: "Joe", mark: 95 },
//   { name: "Tom", mark: 65 },
//   { name: "Nancy", mark: 75 },
// ];


function Average(){
const studentMarks = [
  { name: "John", mark: 90 },
  { name: "Jane", mark: 85 },
  { name: "Joe", mark: 95 },
  { name: "Tom", mark: 65 },
  { name: "Nancy", mark: 75 },
];


for (const index of studentMarks) {
  let grade;
  if(index.mark < 60){
    grade = 'F'
  } else if (index.mark >= 60 && index.mark <= 69){
    grade = 'D'
  }else if (index.mark >= 70 && index.mark <= 79){
    grade = 'C'
  }else if (index.mark >= 80 && index.mark <= 89){
    grade = 'B'
  }else {
    grade ='A'
  }
console.log(`Name of student: ${index.name}, Grade: ${grade}`);
  
}

}
Average();
