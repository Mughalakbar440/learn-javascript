let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let true0 = true;

let winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

let resetGame = () => {
    true0 = true;
    anbledBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (true0) {
      box.innerText = "X";
      box.style.color = 'red' 
      true0 = false;
    } else {
      box.innerText = "O";
      box.style.color = 'green' 

      true0 = true;
    }
    box.disabled = true;
    chechkwinner();
    checkDraw();
  });
});

const disabledBoxes = () => {
    for (const box of boxes) {
      box.disabled = true;
    }
};

const anbledBoxes = () => {
    for (const box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, the ${winner} is the winner!`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const showDraw = () => {
  msg.innerText = `It's a draw!`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const chechkwinner = () => {
  for (const patterns of winpatterns) {
    let pos1 = boxes[patterns[0]].innerText;
    let pos2 = boxes[patterns[1]].innerText;
    let pos3 = boxes[patterns[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showWinner(pos1);
        return;
      }
    }
  }
};

const checkDraw = () => {
  // Check if all boxes are filled
  let allFilled = true;
  for (const box of boxes) {
    if (box.innerText === "") {
      allFilled = false;
      break;
    }
  }

  if (allFilled && !msgContainer.classList.contains("hide")) {
    return; 
  }
  if (allFilled) {
    showDraw();
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
