function chreckGrade(score){
    if(score >= 80){
        return"A";
    }else if(score >= 70){
        return "B";
    }else if(score >= 60){
        return "c";
    }else{
        return"F";
    }
}

console.log(chreckGrade(85));

for(let i=1; i<=10; i++){
    console.log(i);
}

function isEven(number){
    return number %2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

function add(a, b){
    return a + b;
}

console.log(add(5,3));
console.log(add(10, -2));

function isLeapYear(year){
    if (year % 400 === 0){
        return true;
    }else if(year % 100 === 0){
        return false;
    }else if(year % 4 === 0 ){
        return true;
    }else{
        return false;
    }
}

console.log(isLeapYear(2020));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));

function getWeatherMessage(temp){
    if(temp < 0){
        return "หนาวจัด";
    }else if(temp <= 20){
        return"อากาศเย็น";
    }else if(temp <=30){
        return"อากาศกำลังดี";
    }else {
        return "ร้อนมาก";
    }
}

console.log(getWeatherMessage(-5));
console.log(getWeatherMessage(15));
console.log(getWeatherMessage(25));
console.log(getWeatherMessage(35));

for(let i =2; i <= 4; i++){
    for(let j =1; j <=9; j++){
        console.log(`${i} * ${j}= ${i*j}`);
    }
}

  