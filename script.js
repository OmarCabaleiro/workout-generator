let mainArray = [];

// draw 1 random movement pattern from array
function draw1() {  
  document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked === true) {
      mainArray.push(item.value);
    }
  })
  output.innerHTML = mainArray[Math.floor(Math.random() * mainArray.length)];
};

// draw 2 random movement patterns from array
function draw2() {
  document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked === true) {
      mainArray.push(item.value);
    }
  })
  output.innerHTML = mainArray[Math.floor(Math.random() * mainArray.length)] + ",<br>" +
    mainArray[Math.floor(Math.random() * mainArray.length)];
};

// draw 3 random movement patterns from array
function draw3() {
  document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked === true) {
      mainArray.push(item.value);
    }
  })
  output.innerHTML = mainArray[Math.floor(Math.random() * mainArray.length)] + ",<br>" +
    mainArray[Math.floor(Math.random() * mainArray.length)] + ",<br>" +
    mainArray[Math.floor(Math.random() * mainArray.length)];
};

// randomly draw 4-10 movement patterns from array, numbered
function draw4to10() {
  document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked === true) {
      mainArray.push(item.value);
    }
  })
  mainArray.sort(function(){return 0.5 - Math.random()});
  const arr4 = mainArray.slice(0, 4);
  var result4 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2] + ",<br>" + "4. " + mainArray[3]

  const arr5 = mainArray.slice(0, 5);
  var result5 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2] + ",<br>" + "4. " + mainArray[3] + ",<br>" + "5. " + mainArray[4]
  
  const arr6 = mainArray.slice(0, 6);
  var result6 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2] + ",<br>" + "4. " + mainArray[3] + ",<br>" + "5. " + mainArray[4] + ",<br>" + "6. " + mainArray[5]
  
  const arr7 = mainArray.slice(0, 7);
  var result7 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2] + ",<br>" + "4. " + mainArray[3] + ",<br>" + "5. " + mainArray[4] + ",<br>" + "6. " + mainArray[5] + ",<br>" + "7. " + mainArray[6]
  
  const arr8 = mainArray.slice(0, 8);
  var result8 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2] + ",<br>" + "4. " + mainArray[3] + ",<br>" + "5. " + mainArray[4] + ",<br>" + "6. " + mainArray[5] + ",<br>" + "7. " + mainArray[6] + ",<br>" + "8. " + mainArray[7]
  
  const arr9 = mainArray.slice(0, 9);
  var result9 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2] + ",<br>" + "4. " + mainArray[3] + ",<br>" + "5. " + mainArray[4] + ",<br>" + "6. " + mainArray[5] + ",<br>" + "7. " + mainArray[6] + ",<br>" + "8. " + mainArray[7] + ",<br>" + "9. " + mainArray[8]
  
  const arr10 = mainArray.slice(0, 10);
  var result10 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2] + ",<br>" + "4. " + mainArray[3] + ",<br>" + "5. " + mainArray[4] + ",<br>" + "6. " + mainArray[5] + ",<br>" + "7. " + mainArray[6] + ",<br>" + "8. " + mainArray[7] + ",<br>" + "9. " + mainArray[8] + ",<br>" + "10. " + mainArray[9]
  
  const arr410 = [result4, result5, result6, result7, result8, result9, result10];
  output.innerHTML = arr410[Math.floor(Math.random() * arr410.length)];
};

// randomly draw 1-10 movement patterns from array, numbered
function draw1to10() {
  document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked === true) {
      mainArray.push(item.value);
    }
  })
  mainArray.sort(function(){return 0.5 - Math.random()});
  const arr1 = mainArray.slice(0, 1);
  var result1 = "1. " + mainArray[0]

  const arr2 = mainArray.slice(0, 2);
  var result2 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1]

  const arr3 = mainArray.slice(0, 3);
  var result3 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2]

  const arr4 = mainArray.slice(0, 4);
  var result4 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2] + ",<br>" + "4. " + mainArray[3]

  const arr5 = mainArray.slice(0, 5);
  var result5 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2] + ",<br>" + "4. " + mainArray[3] + ",<br>" + "5. " + mainArray[4]
  
  const arr6 = mainArray.slice(0, 6);
  var result6 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2] + ",<br>" + "4. " + mainArray[3] + ",<br>" + "5. " + mainArray[4] + ",<br>" + "6. " + mainArray[5]
  
  const arr7 = mainArray.slice(0, 7);
  var result7 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2] + ",<br>" + "4. " + mainArray[3] + ",<br>" + "5. " + mainArray[4] + ",<br>" + "6. " + mainArray[5] + ",<br>" + "7. " + mainArray[6]
  
  const arr8 = mainArray.slice(0, 8);
  var result8 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2] + ",<br>" + "4. " + mainArray[3] + ",<br>" + "5. " + mainArray[4] + ",<br>" + "6. " + mainArray[5] + ",<br>" + "7. " + mainArray[6] + ",<br>" + "8. " + mainArray[7]
  
  const arr9 = mainArray.slice(0, 9);
  var result9 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2] + ",<br>" + "4. " + mainArray[3] + ",<br>" + "5. " + mainArray[4] + ",<br>" + "6. " + mainArray[5] + ",<br>" + "7. " + mainArray[6] + ",<br>" + "8. " + mainArray[7] + ",<br>" + "9. " + mainArray[8]
  
  const arr10 = mainArray.slice(0, 10);
  var result10 = "1. " + mainArray[0] + ",<br>" + "2. " + mainArray[1] + ",<br>" + "3. " + mainArray[2] + ",<br>" + "4. " + mainArray[3] + ",<br>" + "5. " + mainArray[4] + ",<br>" + "6. " + mainArray[5] + ",<br>" + "7. " + mainArray[6] + ",<br>" + "8. " + mainArray[7] + ",<br>" + "9. " + mainArray[8] + ",<br>" + "10. " + mainArray[9]
  
  const arr110 = [result1, result2, result3, result4, result5, result6, result7, result8, result9, result10];
  output.innerHTML = arr110[Math.floor(Math.random() * arr110.length)];
};

// select and deselect all buttons
function selects(){  
  var ele=document.getElementsByName('chk');  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
          ele[i].checked=true;  
  }  
};
function deSelect(){  
  var ele=document.getElementsByName('chk');  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
          ele[i].checked=false;  
        
  }  
};