// 1. write 3 variables (number, string, boolean)

let number = 100;
let string = 'bondhan mondal';
let boll = true;



// 2. 2 variables using (let, const)

let price = 151;
const rate = 9;


// 3. Simple Math Operations() +, -, *, /, %)

/* a = 10;
b = 5;
const add = a+b;
const difference = a-b;
const multiply = a*b;
const division = a/b;
const mod = a % b;
console.log('Add: ',add);
console.log('Difference: ',difference);
console.log('Multiply: ',multiply);
console.log('Division: ',division);
console.log('Modulus: ',mod); */


// 4. comparison ()
/*
grater than >
less than <
equal to ==
not equal !=
grater than equal to >=
less thsn equal to <=
and &&
or ||
*/

// 5. two conditions. case-1: fulfill both conditions. case-2: fulfill at least one condition

/* let c = 20;

if (a > b){
    console.log('Grater Number: ', a);
}
else{
    console.log('Grater Number: ', b);
}

if ((a > b) && (a > c)){
    console.log('Highest Number: ', a);
}
else if ((b > a) && (b > c)){
    console.log('Highest Number: ', b);
}
else{
    console.log('Highest Number: ', c);
} */

// 6. if-else

//done in previous task


//7. while loop to display 7 to 19 all numbers. only display odd numbers including 7 to 19
/* let i = 7;
while (i <= 17){
    console.log(i);
    i++;
} */
/* let i = 7;
while (i <= 17){
    if (i % 2 != 0){
        console.log(i);
    }
    i++;
} */


// 8. declare an array. number of elements. update or change 4th position element. add or remove elements.
// check whether a specific value exists in the array

/* let nums = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];
const arrLen = nums.length;
console.log('Array Length: ', arrLen);
nums[3] = 444;
nums.push(11);
nums.pop();

for(const element of nums){
    console.log(element);
}

const index = nums.indexOf(2);
console.log(index); */



// 9. use any for loop to display every elements of an array
/* for (let i = 0; i < nums.length; i++){
    console.log(i);
} */


// 10. you have an array of numbers. display only the numbers bigger than 80
/* let numbers = [100, 95, 10, 15, 12, 112, 9, 98, 7];
for(const element of numbers){
    if(element > 80){
        console.log(element);
    }
} */
// 11. write a function that takes three numbers and returns the multiplication of the three numbers
/* function add(num1, num2, num3){
    const sum = num1 + num2 + num3;
    return sum;
}
const firstSum = add(10, 10, 10);
console.log('Sum: ', firstSum); */
// 12. declare an object and change any property of that object.

const car = {model: 'g2',
color: 'red',
price: 750000,
name: 'flat',
weight: '800KG'
}

car.price = 3000;
car['color'] = 'black';

console.log(car.color);
console.log(car['price']);
const ojon = 'weight';
console.log(car[ojon]);