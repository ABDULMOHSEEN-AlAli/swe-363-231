window.addEventListener("load", () => {
  const cav = document.querySelector("canvas");
  let cox = cav.getContext("2d");

  let painting = false;

  function startPainting() {
    painting = true;
  }

  function endPainting() {
    painting = false;
  }

  function draw(e) {
    if (painting) {
      cox.lineWidth = 5;
      cox.lineCap = "round";
      cox.lineTo(e.clientX, e.clientY - 679);
      cox.stroke();
    }
  }

  // lessners
  cav.addEventListener("mousedown", startPainting);
  cav.addEventListener("mouseup", endPainting);
  cav.addEventListener("mousemove", draw);
});
