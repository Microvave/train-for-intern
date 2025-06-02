
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


let data = null;
let result = 2 * data;
console.log(result);
if (!data){
    console.log('data is false');
}


//ความแตกต่างระหว่าง null และ undefined
let data;
console.log(typeof data);
data = 10;
console.log(typeof data);
data = null;
console.log(typeof data);
data = "hello";
console.log(typeof data);

//ชนิิดข้อมูลแบบ Biglnt
let myBiglnt = 123456789n;
let youBriglnt = -12345n;
let biBiglnt = 0b11000111000011010;
let octBiglnt = 0o1234567;
let hexBight = 0x123456789abcdefn;
console.log(myBiglnt, youBriglnt, biBiglnt, octBiglnt, hexBight);

*/

let myBigInt = BigInt(123456789);
let yourBigInt = BigInt('-12345');
let resultBigInt = myBigInt + yourBigInt;
//let resultBigInt2 = myBigInt - 10;
console.log(myBigInt, yourBigInt, resultBigInt);


const symA = Symbol();
console.log(typeof symA);

const symB = Symbol.for('id');
const symC = Symbol.for('id');
console.log(symB === symC);

const sysmbolData = Symbol.for('hello');
const key = Symbol.keyFor(sysmbolData);
console.log(key === 'hello');

const newsymbData = Symbol.for('hello');
console.log(sysmbolData === newsymbData);
