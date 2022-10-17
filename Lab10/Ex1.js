var year = 2002;
var month = 6;
var day = 22;
step1 = 2;
step2 = parseInt(step1/4);
step3 = step1 + step2;
step4 = 4;
step6 = step4 + step3;
step7 = day + step6;
step8 = step7 - 1;
step9 = step8%7;
dob = "Saturday";

console.log(step9);