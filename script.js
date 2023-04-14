const grid = document.querySelector(".grid-square")
const drawButton = document.querySelector(".draw-button");
const sliderLabel = document.querySelector(".slider-label");

let slider = document.querySelector(".slider");
let gridSize = 16;
let selectedColor = "#4c5c68";
const boardColor = "#eee";

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `calc(100% / ${size})`;
        cell.style.height = `calc(100% / ${size})`;
        cell.style.border = "1px solid #e2e2e2";

        grid.appendChild(cell);
    }
}

function changeGridSize(size) {
    grid.innerHTML = "";
    gridSize = size;
    createGrid(gridSize);
  }

  function updateSliderLabel() {
    sliderLabel.innerText = `${slider.value} x ${slider.value}`;
  }

function draw() {
    const cells = document.querySelectorAll(".cell");
    if (selectedColor !== boardColor) {
      cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
          cell.style.backgroundColor = selectedColor;
        });
      });
    }
}

drawButton.addEventListener("click", draw);
slider.addEventListener("mousemove", (e) => updateSliderLabel(e.target.value));
slider.addEventListener("change", (e) => changeGridSize(e.target.value));

window.onload = () => {
    createGrid(gridSize);
  };
