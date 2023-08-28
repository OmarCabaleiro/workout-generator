const bodyweightArray = ["bodyweight squat", "bodyweight pull", "bodyweight push", "back bend", "forward bend", "bodyweight wild card"];
const clubbellArray = ["clubbell carry", "clubbell squat", "clubbell overhead", "clubbell later", "clubbell wild card"];
const kettlebellArray = ["kettlebell carry", "kettlebell squat", "kettlebell hinge", "kettlebell pull", "kettlebell push", "kettlebell wild card"];
const dumbbellArray = ["dumbbell carry", "dumbbell squat", "dumbbell hinge", "dumbbell pull", "dumbbell push", "dumbbell wild card"];
const barbellArray = ["barbell carry", "barbell squat", "barbell hinge", "barbell pull", "barbell push", "barbell wild card"];
let mainArray = [];

function addBodyweight() {
  mainArray = mainArray.concat(bodyweightArray)
};

// draw 1 random movement pattern from array
function draw1() {  
  output.innerHTML = mainArray[Math.floor(Math.random() * mainArray.length)];
};



/*
get checkbox values
https://youtu.be/TjpL8U_vxOo?si=BjFty6VHj4PKkDTi

let mainArray = [];
document.querySelectorAll('[type="checkbox"]').forEach(item => {
  if (item.checked === true) {
    mainArray.push(item.value);
  }
})

*/