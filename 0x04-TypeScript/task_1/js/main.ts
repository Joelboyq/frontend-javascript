// 1. Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // for additional attributes like contract, etc.
}

// Extend Teacher with Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create example object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);



// 2. Example usage
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);


// Task 3: Define interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the function using the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Test the function
console.log(printTeacher("John", "Doe")); // Output: J. Doe


// Task 4: Writing a class

// Interface describing the class structure
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface describing the constructor signature
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Class implementation
class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName());       // Output: Alice
console.log(student.workOnHomework());   // Output: Currently working


