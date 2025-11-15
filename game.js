// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newgameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turnO = true; //PlayerX,PlayerO

// const winPattern = [
//   [0,1,2],
//   [0,3,6],
//   [0,4,8],
//   [1,4,7],
//   [2,5,8],
//   [2,4,6],
//   [3,4,5],
//   [6,7,8],
// ];

// let resetGame = () => {
//   turnO = true;
//   enableBoxes();
//   msgContainer.classList.add("hide");
// };

// let disabledBOxes = () => {
//   for( let box of boxes){
//     box.disabled = true;
//   }
// };

// let enableBoxes = () => {
//   for(let box of boxes){
//     box.disabled = false;
//     box.innerHTML = "";
//   }
// };

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     // console.log("box Was Clciked");
//     // box.innerHTML = "Abc"
//     if(turnO){
//       box.innerHTML = "O";
//       turnO = false;
//     }
//     else{
//       box.innerHTML = "X";
//       turnO = true;
//     }
//     box.disabled = true; // if this is not used then one box can be clicked many times which can cause a problem

//     checkWinner();
//   });
// });

// const showWiner = (Winner) => {
//   msg.innerHTML = `Congrulations, Winner is ${Winner}`;
//   msgContainer.classList.remove("hide");
//   disabledBOxes();
// }

// const checkWinner = () => {
//   for( i of winPattern){
//     // console.log(i[0],i[1],i[2]);
//     // console.log(boxes[i[0]].innerHTML,boxes[i[1]].innerHTML,boxes[i[2]].innerHTML);

//     let pos1 = boxes[i[0]].innerHTML;
//     let pos2 = boxes[i[1]].innerHTML;
//     let pos3 = boxes[i[2]].innerHTML;

//     if(pos1 !="" && pos2 !="" && pos3 !=""){
//       if(pos1 === pos2 && pos2 === pos3){
//         console.log("Winner",pos1);
//         showWiner(pos1);
//       }
//     }
//   }
// };


// newgameBtn.addEventListener("click",resetGame);
// resetBtn.addEventListener("click",resetGame);















let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let startBtn = document.querySelector("#start-btn");

let turnO = true;
let moves = 0;
let p1Name = "";
let p2Name = "";

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

startBtn.addEventListener("click", () => {
  if (player1.value.trim() === "" || player2.value.trim() === "") {
    alert("Please enter both player names!");
    return;
  }

  p1Name = player1.value;
  p2Name = player2.value;

  document.querySelector(".player-inputs").style.display = "none";
});

let resetGame = () => {
  turnO = true;
  moves = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

let disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

let enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (p1Name === "" || p2Name === "") {
      alert("Enter player names and click Start Game!");
      return;
    }

    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }

    box.disabled = true;
    moves++;

    checkWinner();
  });
});

const showWinner = (winnerSymbol) => {
  let winnerName = winnerSymbol === "O" ? p1Name : p2Name;

  msg.innerHTML = `Congratulations 🥳 <br> Winner: <b>${winnerName}</b>`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const showDraw = () => {
  msg.innerHTML = `It's a Draw! 🤝`;
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerHTML;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        return;
      }
    }
  }

  // Draw condition
  if (moves === 9) {
    showDraw();
  }
};

newgameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


