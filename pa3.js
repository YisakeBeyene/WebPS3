//Melissa Alexander, Isaac Beyene, Yeabkal Biru
//3/25/2021
//This program will make the multiplication game where a user will type
//in any number and it will generate a table with that amount of rows and columns
//so they can practice their multiplication. The program will generate a random
//box in the square and they will have to type the answer in under a certain amount 
//of time in order to get the answer correct.


function generate_table() {
    // get the reference for the body
    //this will remove the image displayed in the original page so the table is the only thing left on the page
    var img = document.getElementById("img");
    img.remove();
    //calls the body element of the html file
    var body = document.getElementsByTagName("body")[0];
    
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    tbl.id = 'something';
    var tblBody = document.createElement("tbody");
    
    //makes the table size based on the user input and checks what the input is
    var table_size = document.getElementById("myInput").value;
    var inputCheck = document.createElement('div');
    inputCheck.id = 'wrong';
    inputCheck.innerHTML = '';
    document.body.appendChild(inputCheck);

    //this will tell the user to input a number between 0  and 20 if they use a number too
    //small or too large or is not an integer
    if(isNaN(table_size) || table_size>20 || table_size<1){
      
      
      inputCheck.innerHTML = 'Input should be an integer between 0 and 20';
      document.body.appendChild(inputCheck);
      return;
    }

    //creates the variable div1 to use the main class 
    var div1 = document.getElementsByClassName("main");
    
    //this will randomly choose a box for the user to find an answer to
    var questionRow = Math.floor(Math.random() * table_size)+1;   
    var questionColumn = Math.floor(Math.random() * table_size)+1;   

    //creates the variables answerchoice and correctanswer
    var answerChoice;
    var correctAnswer;

    // creating all cells
    for (var i = 0; i <= table_size; i++) {
      // creates a table row
      var row = document.createElement("tr");
      
      for (var j = 0; j <= table_size; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        //makes the checkboard pattern with the colors
        
        var cell = document.createElement("td");
        
        if (i*j==0){
          var cellText;
          if (i==0 && j==0){
            cellText = document.createTextNode(" ");
          }else if(i==0){
            cellText = document.createTextNode(j);
          }else{
            cellText = document.createTextNode(i);
          }
          cell.style.backgroundColor = 'lightgray';
        }else if(i==questionRow && j==questionColumn){
          var cellText = document.createElement("input"); 
          cellText.type = "text";
          cellText.id = 'inputAnswer';
          answerChoice = cellText;
          correctAnswer = i*j;
        }else{
          var cellText = document.createTextNode(i*j)
          if ((i+j)%2==0){
            cell.style.backgroundColor = 'lightblue';
          }else{
            cell.style.backgroundColor = 'pink';
          }
        }
        ;
        //keeps the cells the same size then appends the cells
        cell.style.width = '30px';
        cell.style.height = '30px';
        cell.appendChild(cellText);
        row.appendChild(cell);

        
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }


    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");

    //creates a div container and a border pad in the class
    var div = document.createElement('div');
    div.id = 'container';
    div.className = 'border pad';
    //appends the div into the document body
    document.body.appendChild(div);

    
    // var divcountDownDiv = document.createElement('div');
    // divcountDownDiv.innerHTML = 'sdfa';
    // document.body.appendChild(divcountDownDiv);
    

    //creates the variable time and countdowndiv for the timer
    var time= table_size;
    var countDownDiv = document.createElement('div');
    countDownDiv.id = 'timerDiv';

    //uses the setinterval function to gage whether the time is higher than 0
    //then will print out whether or not the answer is right or wrong when the
    //timer runs out
    setInterval(function(){

      if (time < 0){
        if (answerChoice.value == correctAnswer){
          div.id = 'right';
          div.innerHTML = 'Correct. Good Job!';
        }else{
          div.id = 'wrong';
          div.innerHTML = 'Wrong. Try Again!';
        }
        countDownDiv.innerHTML = '';
        tbl.remove();
        //removes the table when the timer is out

      }else{

        countDownDiv.innerHTML = time + ' seconds left';
        time--;
          
      }
    
    document.body.appendChild(countDownDiv);
    },1000);
    
  }

  //function for whether or not the answer the user types is correct
  function checkIfCorrect(answerChoice, correctAnswer, button){
    
    //creates a div element
    var div = document.createElement('div');

    //this if statement will print out whether the users answers are
    //right or wrong 
    if (answerChoice == correctAnswer){
      div.id = 'right';
      button.remove();
      div.innerHTML = 'Correct. Good Job!';
    }else{
      div.id = 'wrong';
      button.innerHTML = "Try Again";
      div.innerHTML = 'Wrong. Try Again!';
    }
    
    div.className = 'border pad';

    
    document.body.appendChild(div);
    alert(cellText)

  
  }




  