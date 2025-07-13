// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 22,
  location: 'Kigali',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 25,
  location: 'Musanze',
};

// 3. Store in an array
const studentsList: Student[] = [student1, student2];

// 4. Create a table and add rows dynamically
const table = document.createElement('table');
table.border = '1';

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// 5. Append the table to the DOM
document.body.appendChild(table);
