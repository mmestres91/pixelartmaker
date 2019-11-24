const color = document.getElementById('colorPicker'); //Declares Color as a Global Variable
const height = document.getElementById('inputHeight'); //Declares Table Height as a Global Variable
const width = document.getElementById('inputWidth'); //Declares Table Width as a Global Variable
const button = document.getElementById('submitbutton'); //Declares Submit buttom as a Global Variable

    button.addEventListener("click", //Creates Event where clicking Submit Buttons starts function 
      function makeGrid(){  //Begins function to create new grid
        pixelCanvas.innerHTML = null; //Clears out grid 
        for (var boxHeight = 1; boxHeight <= height.value; boxHeight++){ //starts For Loop to create row of boxes
            const tr = document.createElement('tr'); //creates Box Height
            pixelCanvas.appendChild(tr); //Adds box height to the DOM
            for (var boxWidth = 1; boxWidth <= width.value; boxWidth++){ //starts Nested For Loop to create column of boxes
                const gridBox = document.createElement('td'); //creates Box Width
                tr.appendChild(gridBox); //Adds box width to the DOM
                gridBox.addEventListener('click', (e) => { // creates Event to add color to Pixel 
                gridBox.style.backgroundColor = color.value;  //adds color to selected Pixel 
                });
            }
        }    
    });