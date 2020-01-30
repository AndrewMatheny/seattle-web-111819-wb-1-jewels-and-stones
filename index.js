document.addEventListener("DOMContentLoaded", () => {
  console.log("hey look, some code!");
  jewelsAndStones("aB", "aBBAABBBAASKFDSL");
});

jewelsAndStones = (jewels, stones) => {
  console.log("checking which stones are jewels...");
  let jewelArray = jewels.split("")
  let stoneArray = stones.split("")
  let counter = 0
  for(i = 0; i<stoneArray.length; i++) {
    for(j = 0; j<jewelArray.length; j++) {
      if(stoneArray[i] === jewelArray[j]) {
        counter++
      }
    }
  }
  console.log(counter)
  return(counter)
};
