
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




//ค้นหาและแทนที่ข้อความในสตริง
let myText = "Go go go";
let result = myText.replace("go", "hi");
let result2 = myText.replaceAll("x", "hi");
console.log(result);
console.log(result2);



//ชนิดข้อมูลแบบ number
let number1 = -10;
let number2 = 10;
let number3 = 0;
console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);

//number จะเป็นตัวเลขทศนิยมเสมอ
let number4 = 10.;
let number5 = 10.00;
console.log(number4 == number5); 

//แสดงตัวเลขที่มีค่ามาก หรือ น้้อยมากๆ 
let number6 = 1.23e5; 
let number7 = 1.987e-4;
console.log(number6);
console.log(number7);

//การเขียนตัวเลขที่มีหลายหลัก
let number8 = 1e6; 
let number9 = 1.257e7;
console.log(number8);
console.log(number9);

//การบวกเครื่องคณิตศาสตร์ 
let result1 = 10 + 0.1;
let result2 = 10 - 0.1;
console.log(result1);
console.log(result2);

//การนำสตริงมาบวกกับตัวเลข
let result = "wave" + 10;
console.log(result); 
console.log(typeof result); 

let myText = "wave" * 10;
console.log(myText); // NaN


//ช่องว่างในนิพจน์
let result3 = 10 + 20;
let result4 = 10+20;
let result5 = 10 + 
5;
console.log(result3);
console.log(result4);
console.log(result5); 

//การคูณและหาร
let result6 = 10;
let result7 = 20;
let result8 = (result6 * result7);
let result9 = (result6 / result7);
console.log(result8);
console.log(result9);

//nan
let number10 = "wave" * 10;
let number11 = "wave" + 10;
console.log(number10); // NaN
console.log(number11); // wave10

//infinity
let number12 = 0 / 0;
let number13 = 10 / 0;
let number14 = -10 / 0;
console.log(number12); // NaN
console.log(number13); // Infinity
console.log(number14); // -Infinity

//การยกกำลัง  
let base = 2;
let result10 = base ** 3; // 2 * 2 * 2
console.log(result10); // 8

//หารเอาเครื่องหมาย %
let result11 = 10 % 3; // 10 หาร 3 เหลือเศษ 1
let result12 = 10 % 2; // 10 หาร 2 เหลือเศษ 0
let result13 = -10 % 3; // -10 หาร 3 เหลือเศษ -1
console.log(result11); // 1
console.log(result12); // 0
console.log(result13); // -1

//สลับค่าตัวเลข
let a = 10;
let b = -a;
console.log(a); // 10
console.log(b); // -10

//ชนิดของโอเปอเรเตอร์ 
//ternary operator
let randomData = Math.floor(Math.random() * 10) + 1;
<<<<<<< HEAD
// ของฝั่ง GitHub
console.log("อันนี้จาก remote");
=======
console.log("อันนี้จากเครื่องคุณ");
>>>>>>> ae3a38c แก้ไข script.js ก่อน pull


//โอเปอเรอเตอร์สำหรับลดค่า
let myData3 = 10;
myData3--;
console.log(myData3); // 9
//ถ้านำ -- ไปวางหน้าตัวแปรจะได้ผลลัพธ์ที่แตกต่างกัน

//การใช้ Assignment operator
let first = 1;
let second = 2;
let third = 3;
let forsth = 4;
let fifth = 5;
console.log(first +=1);
console.log(second /= 1);
console.log(third *= 2);
console.log(forsth -= 1);
console.log(fifth ** 2); 

//หารากที่สอง 
let myNumber = Math.sqrt(16);
console.log(myNumber); // 4

//ปัดเศษทศนิยม
let myNumber2 = Math.round (10.5);
console.log(myNumber2); // 11

//ปัดเศษลง 
let myNumber3 = Math.floor(10.9);   
console.log(myNumber3); // 10

//สุ่มตัวเลข
let random = Math.random(); // สุ่มตัวเลขระหว่าง 0 ถึง 1
let random2 = Math.random() * 10; // สุ่มตัวเลขระหว่าง 0 ถึง 10
let random3 = Math.floor(Math.random() * 10)+1; // สุ่มตัวเลขระหว่าง 1 ถึง 10

console.log(random);
console.log(random2);
console.log(random3); // 1 ถึง 10
*/

function greeting(){
    console.log("Hello, welcome to my JavaScript project!");
}

greeting();

function say(text){
    console.log(text);    
}

say("Hello world");
say("Good bye ");

//ลำดับพารามิเตอร์ 
function subtract(a,b){
    console.log(a-b);
}

subtract(10,15);
subtract(20,10);

//นำค่าอาร์กิวเมนต์มาคำนวณ
function add(x,y){
    console.log(x + y);
}

add(3,4);
add(3);

//หารตัวเลขด้วยศูนย์ 
function devide(x,y){
    console.log(x / y);
}

devide(10,2);
devide(10,0); // จะเกิดข้อผิดพลาด NaN
devide(10); // จะเกิดข้อผิดพลาด NaN

//ผ่านค่าอาร์กิวเมนต์มากกว่าหนึ่งค่า 

function youfunction(a,b,c){
    console.log(a + b + c);
}
youfunction(1,2,);
youfunction(1,2,3);

//ฟังก์ชันจะสิ้นสุดการทำงานเมื่อเจอคำสั่ง return
function myFunction(a,b){
    let data = 10;
    return data;
    console.log(`your data is : ${text}`);
    data = 20;
}

let result = myFunction("Hello");
console.log(result); // 10
  
