console.log("page");
const fill = document.querySelector(".fill");
const whiteBoxes = document.getElementsByClassName("whiteBox");
const reset = document.getElementsByClassName("reset");

//event listeners for draggable
fill.addEventListener("dragstart", (e) => {
  console.log("drag start");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});
fill.addEventListener("dragend", (e) => {
  console.log("drag end");
  e.target.className = "fill";
});

for (let whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("drag over");
  });
  whiteBox.addEventListener("dragenter", (e) => {
    console.log("drag enter");
    e.target.className += " dashed";
  });
  whiteBox.addEventListener("dragleave", (e) => {
    console.log("drag leave");
    e.target.className = " dashed";
  });
  whiteBox.addEventListener("drop", (e) => {
    alert("item dropped");
    e.target.append(fill);
  });
}


//function for reset button
function alter() {
  const container1 = document.getElementById("container1");
 
  container1.appendChild(fill);
  container1.appendChild(fill);


}
