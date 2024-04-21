//task #1
let num1 = 75;

if (num1 > 90) { console.log("Grade: A");

 } else if (num1 > 80) { console.log("Grade: B");

  } else if (num1 > 70) { console.log("Grade: C");

   } else if (num1 > 60) { console.log("Grade: D");

    } else if (num1 > 50) { console.log("Grade: E");

     } else { console.log("Grade: F"); 
    }
// answer = Grade : c


//task #1 convert this code into switch statement

let num: number = 75;
let grade: string;

switch (true) {
    case num > 90:
        grade = "Grade: A";
        break;
    case num > 80:
        grade = "Grade: B";
        break;
    case num > 70:
        grade = "Grade: C";
        break;
    case num > 60:
        grade = "Grade: D";
        break;
    case num > 50:
        grade = "Grade: E";
        break;
    default:
        grade = "Grade: F";
}

console.log(grade); // Output: Grade: C
