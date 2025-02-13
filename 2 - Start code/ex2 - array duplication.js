// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", age: 20},
  { firstName: "Bình", age: 22 },
  { firstName: "Cẩm", age: 21 },
  { firstName: "An", age: 19 }, // Duplicate first name but different last name and batch
];

//TODO: Algorithm specific



/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {age} newAge  - the student new age
 * @param {string} lastName - the student last name
 * @param {number} batch - the student batch
 */
function updateStudentAge(firstName, newAge, lastName, batch) {
  //Find all students with firstname
  const matched = STUDENTS_DATA.map((students, index) => ({
    ...students,
    index,
  })).filter((students) => students.firstName === firstName);

  if(matched.length === 0) {
    console.log(`No student found with the name '${firstName}'.`);
    return;
  }

  if(matched.length === 1) {
    STUDENTS_DATA[matched[0].index].age = newAge;
    STUDENTS_DATA[matched[0].index].lastName = lastName;
    STUDENTS_DATA[matched[0].index].batch = batch;
    console.log(`Updated ${firstName}'s age to ${newAge}.`);
    return;
  }else{
    console.log(`Found multiple students with the name '${firstName}'. Please provide additional details.`);
    matched.forEach((student, index) => 
    console.log(`Found ${index + 1}: ${student.firstName} ${student.lastName} - Batch ${student.batch} - Age ${student.age}.`)
    );

    let selected = 0;

    // Update the selected student
    const studentIndex = matched[selected].index;
    STUDENTS_DATA[studentIndex].age = newAge;
    STUDENTS_DATA[studentIndex].lastName = lastName; // Add lastName dynamically
    STUDENTS_DATA[studentIndex].batch = batch;
    console.log(`Updated ${firstName}'s age to ${newAge} for student at index ${matched[selected].index}, ${batch}.`); 
  }
    

}

// 1 - Update An age to 30
updateStudentAge("An", 30, "Nguyen", 2023);
updateStudentAge("Bình", 25, "Tran", "2022");

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA) );


