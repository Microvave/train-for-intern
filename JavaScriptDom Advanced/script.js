function highlight(){
    const first = document.querySelector(".message");
    first.style.color = "red";

    const all = document.querySelectorAll(".message");
    all.forEach((p) => {
        p.style.backgroundColor = "yellow";
    });
}

function toggleHighlight(){
    const text = document.getElementById("text");
    text.classList.toggle("highlighted");
}

function changeText(){
    const msg = document.getElementById("message");
    msg.innerText = "ข้อความใหม่ที่เปลี่ยนแล้ว";
}

function addMessage(){
    const container = document.getElementById("container");
    const newMessage = document.createElement("p");
    newMessage.innerText = "ข้อความใหม่ที่ถูกเพิ่ม";
    container.appendChild(newMessage);
}

function removeMessage(){
    const container = document.getElementById("container");
    if (container.lastChild){
        container.removeChild(container.lastChild);
    }
}

            const button = document.getElementById("hoverbtn");
            const status = document.getElementById("status");

            button.addEventListener("mouseover", () => {
                status.innerText = "เอาเมาส์มาวางแล้ว!";
              });
            
              button.addEventListener("mouseout", () => {
                status.innerText = "เอาเมาส์ออกไปแล้ว!";
              });
            
              button.addEventListener("click", () => {
                status.innerText = "คลิกไปแล้ว!";
              });