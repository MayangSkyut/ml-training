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
 * 60-70 : D
 * 70-80 : C
 * 80-90 : B
 * > 90 : A
 * @return {number} The average marks of the students.
 */

// const students = [
//   { name: "John", mark: 90 },
//   { name: "Jane", mark: 85 },
//   { name: "Joe", mark: 95 },
//   { name: "Tom", mark: 65 },
//   { name: "Nancy", mark: 75 },
// ];



function getStudentMarks(): { name: string; mark: number }[] {
  return [
    { name: "John", mark: 90 },
    { name: "Jane", mark: 85 },
    { name: "Joe", mark: 95 },
    { name: "Tom", mark: 65 },
    { name: "Nancy", mark: 75 },
  ];
}

function getGrade(mark: number): string {
  if (mark < 60) {
    return "F";
  } else if (mark >= 60 && mark <= 69) {
    return "D";
  } else if (mark >= 70 && mark <= 79) {
    return "C";
  } else if (mark >= 80 && mark <= 89) {
    return "B";
  } else {
    return "A";
  }
}

function calculateAverage(): number {
  let totalMarks = 0;
  const studentMarks = getStudentMarks();
  for (const student of studentMarks) {
    totalMarks += student.mark;
  }
  return totalMarks / studentMarks.length;
}

function printGrades(): void {
  getStudentMarks().forEach(({ name, mark }) => {
    console.log(`Name of student: ${name}, Grade: ${getGrade(mark)}`);
  });
}


console.log(`The average marks of the students is: ${calculateAverage()}`);
printGrades();
  