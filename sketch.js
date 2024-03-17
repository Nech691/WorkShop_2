let counter1 = 0; 
let counter2 = 0;
let counter3 = 0;
let countInterval1 = setInterval(makeStars1, 800);
let countInterval2 = setInterval(makeStars2, 1000);
let countInterval3 = setInterval(makeStars3, 1200);

function setup() {
  createCanvas(700, 700);
  background(4, 9, 45);
}

// Setting makeStars1 function with counter1
// function name(intake values){what to do}
function makeStars1(){
  noStroke()
  //introducing alpha values
  fill(255, 255, 255, 90);
  circle(random(0, 700), random(0, 700), random(0, 4));
  counter1++;
  if (counter1 > 50){
    clearInterval(countInterval1);
    //clear counter
    counter1 = 0;
  }
}

// Setting makeStars2 function with counter2
// function name(intake values){what to do}
function makeStars2(){
  noStroke()
  fill(255, 255, 255, 150);
  circle(random(0, 700), random(0, 700), random(0, 6));
  counter2++;
  if (counter2 > 50){
    clearInterval(countInterval2);
    //clear counter
    counter2 = 0;
  }
}

// Setting makeStars3 function with counter3
// function name(intake values){what to do}
function makeStars3(){
  noStroke()
  fill(255, 255, 255);
  circle(random(0, 700), random(0, 700), random(0, 4));
  counter3++;
  if (counter3 > 50){
    clearInterval(countInterval3);
    //clear counter
    counter3 = 0;
  }
}

// Setting up mousePress to restart interval 
function mousePressed(){
  // * setInterval(makeStars2, 500);
    countInterval1 = setInterval(makeStars1, 800);
    countInterval2 = setInterval(makeStars2, 1000);
    countInterval3 = setInterval(makeStars3, 1200);
  // * = previous code now replaced 
}
