function sortStudents(students) {
  students.sort((a, b) => {
    // Rule 1: Sort by total marks in descending order
    if (a.totalMarks > b.totalMarks) return -1;
    if (a.totalMarks < b.totalMarks) return 1;

    // Rule 2: Sort by biology marks in descending order
    if (a.biologyMarks > b.biologyMarks) return -1;
    if (a.biologyMarks < b.biologyMarks) return 1;

    // Rule 3: Sort by date of birth in ascending order
    const dateA = new Date(a.dateOfBirth.split('-').reverse().join('-'));
    const dateB = new Date(b.dateOfBirth.split('-').reverse().join('-'));
    if (dateA > dateB) return 1;
    if (dateA < dateB) return -1;

    return 0;
  });

  return students;
}

// Test cases
const students = [
  {
    name: 'John',
    chemistryMarks: 80,
    biologyMarks: 70,
    dateOfBirth: '01-01-2000',
  },
  {
    name: 'Jane',
    chemistryMarks: 70,
    biologyMarks: 70,
    dateOfBirth: '02-01-2000',
  },
  {
    name: 'Alice',
    chemistryMarks: 80,
    biologyMarks: 80,
    dateOfBirth: '01-01-2000',
  },
  {
    name: 'Bob',
    chemistryMarks: 70,
    biologyMarks: 60,
    dateOfBirth: '01-01-2001',
  },
];

console.log(sortStudents(students));
