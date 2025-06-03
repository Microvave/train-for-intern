
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

//ชนิดข้อมูลแบบ string
let firstName = "micro";
let secondName = 'wave';
let thridName = `wave`;
let myspace = " ";
let fullname = "micro"+"wave";
console.log(firstName, secondName, thridName);
console.log(firstName + secondName);
console.log(fullname);

//กำหนดสตริงแบบหลายบรรทัด
let a = `w
a
v
e`;
console.log(a);

//การใช้ Escape charecter
var sentence = "she said : \" Love me love my dog.\"";
var sentence2 = 'I\'ve been to the stote.';
console.log(sentence);
console.log(sentence2);

//อินเด็กซ์ของสตริง
let hi = "Hello world";
let hi2 = "wave".length;
let first_a = hi[0];
let first_b = hi[11];

console.log(hi);
console.log(first_a);
console.log(first_b);

//นับความยาวของสตริง
console.log(hi.length);
console.log(hi2);

//นับความยาวของสตริงที่มีช่องว่าง
let hi3 = "wave ".length;
console.log(hi3);

//อักษรตัวสุดท้่ายของสตริง
let text = "wave";
let lasttext = text[text.length -1];
console.log(lasttext);

//แสดงค่าตัวแปรกร่วมกับสตริง
let name = "wave";
let age = 24;
let myData  = 'my name is ' + name + ' my age is ' + age;
console.log(myData);

//แสดงผลลัพธ์จากการคำนวณร่วมกับสตริง
let mydog = 'mydog age is ' + (age * 5);
console.log(mydog);

//แสดงค่า $ ในสตริง
let mymoney = 100;
let mymoneyText = `my money is $${mymoney}`;
console.log(mymoneyText);


//ตัวเลขและค่าความจริง 
let myText = "123";
let myNumber = 123;
let myBoolean = 'true';
let myBoolean2 = true;
console.log(typeof myText);
console.log(typeof myNumber);           
console.log(typeof myBoolean);
console.log(typeof myBoolean2);

//การใช้ parseInt() และ parseFloat()
let data1 = "123";
let data2 = "123.hi";
let data3 = "hi.123";
let data4 = "123.456";
console.log(parseInt(data1)); // 123
console.log(parseInt(data2)); // 123
console.log(parseInt(data3)); // NaN
console.log(parseFloat(data4)); // 123


let inputTextNumber = prompt("\กรอกข้อมูลตัวเลข");
let inputNumber = parseInt(inputTextNumber);
let result = inputNumber * 2;
alert("ผลลัพธ์คือ: " + result);




//แก้ไขสตริงโดยใ้ช้เมธอด จากออบเจ็กต์ String
let myText = "Hello world";
let myTextUpper = myText.toUpperCase();
let myTextLower = myText.toLowerCase();
console.log(myText);
console.log(myTextUpper);
console.log(myTextLower);


//ความแตกต่างระหว่าง empty และ space
let my_empty_string = "";
let my_space = " ";

console.log(my_empty_string,my_empty_string.length);
console.log(my_space,my_space.length);

//ตัดช่องว่างที่ดด้านหน้าและด้านหลังของสตริง
let myMesage = "  Hello world ";
let result = myMesage.trim();
console.log(myMesage);
console.log(result);

let myText2 = "\t Goodbye world\n";
let result2 = myText2.trim();
console.log('-------');
console.log(result2);
console.log('-------');
console.log(myText2);


//เลือกเฉพาะตัวอักษรในสตริงโดยใช้ slice()
let myText = "Hello world".slice(6);
let mtText2 = "Hello world".slice(0, 5);
console.log(myText);
console.log(mtText2);

//ค้นหาข้อความในสตริง
let myText3 = "Hello world";
let result =  myText3.indexOf("w");
let result2 = myText3.indexOf("z");
console.log(result);
console.log(result2); // -1 หมายถึงไม่พบตัวอักษรที่ค้นหา

*/


//ค้นหาและแทนที่ข้อความในสตริง
let myText = "Go go go";
let result = myText.replace("go", "hi");
let result2 = myText.replaceAll("x", "hi");
console.log(result);
console.log(result2);
