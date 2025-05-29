
//ตัวอย่างก่ารใช้ var,let และ const
/*var greeting = "hello world";
let status = true;
const pi = 3.14;
console.log(greeting);
console.log(status);
console.log(pi);
*/

/* ตัวอย่างการใช้ ประกาศตัวแปร และแก้ไขค่าตัวแปร
let mynumber = 8;
mynumber = 18;
console.log(mynumber);
*/

/*การประกาศตัวแปรด้วยคีย์เวิร์ด const
const mynumber = 8;
mynumber = 18;
console.log(mynumber);
*/

/* การใช้ typeof ในการตรวจสอบชนิดของตัวแปร
let isLoading = true;
let num = 10.0;
console.log(typeof isLoading);
console.log(typeof num);
*/

/* การใช้ชนิดข้อมูลแบบ string
let letter = '!';
let word = "Hello";
let sentence = ' This is a book';
console.log(word, sentence, letter);
*/


//ชนิดข้อมูลแบบ number
let first = 10;
let second = 20;
let thrid = -0.3;
console.log(typeof first, typeof second, typeof thrid);
console.log(first , second , thrid);
// 

//เครื่องหมายบวก ในสตริงและตัวเลข
let firstNumber = 123;
let secondNumber = 456;
let thridText = "123";
let forthText = "456";
let resultNumber = firstNumber + secondNumber;
let resultText = thridText + forthText;
console.log(resultNumber);
console.log(resultText);

//เปลี่ยนชนิดข้อมูลได้ตามต้องการ dynamic typing 
let studentId = "123456";
console.log(typeof studentId);
studentId = 123456;
console.log(typeof studentId);

/*ชนืดข้อมูลแบบ boolean
let loading = true;
let data = false;
console.log("loading: " + String(loading));
console.log("data: " + String(data));


ชนิดข้อมูลแบบ undefined
let data;
console.log(data); // undefined


let data = "Hello world";
console.log(data[100]);

let data = null;
console.log(data);
console.log(typeof data);
*/

let data = null;
let result = 2 * data;
console.log(result);
if (!data){
    console.log('data is false');
}

