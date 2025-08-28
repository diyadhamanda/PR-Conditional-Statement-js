let student = {
    sid: 9952,
    sname: "Diya Dhamanda",
    scourse: "Master of Front-End-Development",
    Html_marks: 64,
    CSS_marks: 74,
    DSA_marks: 93,
    Mediaquerey_marks: 87,
    Bootstrap_marks: 97,

}
student.total = student.Html_marks + student.CSS_marks + student.DSA_marks + student.Mediaquerey_marks + student.Bootstrap_marks;
student.Avg = student.total / 5;

let grade = "";


if (student.Avg >= 90) {
    grade = "A+"
}
else if (student.Avg >= 80) {
    grade = "A"
}
else if (student.Avg >= 70) {
    grade = "B+"
}
else if (student.Avg >= 60 ) {
    grade = "B"
}
else {
    grade = "YOU ARE NOT ELIGILBLE "
}
console.log();
console.log("***STUDENT MARKSHEET***");
console.log();
console.log("Student ID : " + student.sid);
console.log("Student Name : " + student.sname);
console.log("Student Course : " + student.scourse);
console.log(" ---Student Modulus ---");
console.log("Student Marks in HTML  : " + student.Html_marks);
console.log("Student Marks in CSS  : " + student.CSS_marks);
console.log("Student Marks in DSA~  : " + student.DSA_marks);
console.log("Student Marks in Media Query : " + student.Mediaquerey_marks);
console.log("Student Marks in Bootstrap : " + student.Bootstrap_marks);
console.log();
console.log("Student Total Marks : " + student.total);
console.log("--------------------------------------------");
console.log("Student Total Averge : " + student.Avg);
console.log("Student Grade : " + grade);

