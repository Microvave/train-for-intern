function changeText(){
    const p = document.getElementById("mytext");
    p.innerText = "สวัสดีจากฉันอีกคน";
}

function changeBackground(){
    document.body.style.backgroundColor="lightblue";
}

function greet(){
    const name = document.getElementById("nameInput").value;
    const result = document.getElementById("resultText");
    result.innerText = "สวัสดี" + name + "!";
}


function addItem(){
    const input = document.getElementById("itemInput");
    const value = input.value;

    if(value.trim() !==""){
        const li = document.createElement("li");
        li.innerText = value;
        document.getElementById("itemList").appendChild(li);
        input.value="";
    }
}

let count = 0;

function countClick(){
    count++;
    const p = document.getElementById("clickCount");
    p.innerText = `คุณคลิกแล้ว ${count} ครั้ง`;
}