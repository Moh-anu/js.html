 let marks=35;
let grade;
if(marks>=90 && marks <=100) {
    grade ='A';
} else if(marks>=75 && +marks<=89) {
    grade='B';
} else if(marks>=60 && marks<=74) {
    grade='C';
} else if(marks>=50 && marks<=59) {
    grade='D';
} else if(marks>=0 && marks<=49) {
    grade='Fail';
} else {
    grade='Invalid marks';
}
console.log('marks:', marks);
console.log('grade:', grade);

