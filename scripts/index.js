var isON = false;

start.addEventListener("mouseover", function () {
  gameStatus.innerHTML = "Watch out!! Don't touch the boundaries.";
  isON = true;
  boundaries.forEach(function (boundary) {
    boundary.classList.remove("highlighted")
  })
  console.log("isON", isON);
});

end.addEventListener("mouseover", function () {
  if (isON) {
    gameStatus.innerHTML = "Good Job. You made it!!";
    isON = false;
    console.log("isON", isON);
  }
});
boundaries.forEach(function (boundary) {
  boundary.addEventListener("mouseover", function () {
    if (isON) {
      gameStatus.innerHTML = "You Died!! Try Again";
      isON = false;
      boundaries.forEach(function (boundary) {
        boundary.classList.add("highlighted")
      })
    }
  });
});
