/*const bodyweightArray = ["bodyweight squat", "bodyweight pull", "bodyweight push", "back bend", "forward bend", "bodyweight wild card"];
const clubbellArray = ["clubbell carry", "clubbell squat", "clubbell overhead", "clubbell lateral", "clubbell wild card"];
const kettlebellArray = ["kettlebell carry", "kettlebell squat", "kettlebell hinge", "kettlebell pull", "kettlebell push", "kettlebell wild card"];
const dumbbellArray = ["dumbbell carry", "dumbbell squat", "dumbbell hinge", "dumbbell pull", "dumbbell push", "dumbbell wild card"];
const barbellArray = ["barbell carry", "barbell squat", "barbell hinge", "barbell pull", "barbell push", "barbell wild card"];*/
let mainArray = [];

/*function addBodyweight() {
  mainArray = mainArray.concat(bodyweightArray)
};
function addClubbell() {
  mainArray = mainArray.concat(clubbellArray)
};
function addKettlebell() {
  mainArray = mainArray.concat(kettlebellArray)
};
function addDumbbell() {
  mainArray = mainArray.concat(dumbbellArray)
};
function addBarbell() {
  mainArray = mainArray.concat(barbellArray)
};

// draw 1 random movement pattern from array
function draw1() {  
  output.innerHTML = mainArray[Math.floor(Math.random() * mainArray.length)];
};*/

// draw 1 random movement pattern from array
function draw1() {  
  document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked === true) {
      mainArray.push(item.value);
    }
  })
  output.innerHTML = mainArray[Math.floor(Math.random() * mainArray.length)];
};

// select and deselect all buttons
function selects(){  
  var ele=document.getElementsByName('chk');  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
          ele[i].checked=true;  
  }  
}  
function deSelect(){  
  var ele=document.getElementsByName('chk');  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
          ele[i].checked=false;  
        
  }  
}



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