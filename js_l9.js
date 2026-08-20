//* LECTURE 0009
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true;//player O
let ng = document.querySelector("#ng");
let msgc = document.querySelector(".msg");
let msg = document.querySelector("#msg");


//2d array
const wp = [ // winning patterns
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];    
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
});
const db = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const eb = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText=""
    }
    
}
const showWinner = (win => {
    msg.innerText = `Winner:Player${win}`;
    msgc.classList.remove("hide");
    db();
    
})
const checkwinner = () => {
    for (let pattern of wp) {
        
        let pos1 = boxes[pattern[0]].innerText;//pos1
        let pos2 = boxes[pattern[1]].innerText;//pos2
        let pos3 = boxes[pattern[2]].innerText;//pos3
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
  
                showWinner(pos1);
            }
        }
    }
}

const rg = () => {
    turnO = true;
    eb();
    msgc.classList.add("hide");
}

ng.addEventListener("click", rg);
reset.addEventListener("click", rg);















