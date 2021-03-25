function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
    
    // creates a <table> element and a <tbody> element
    var div = document.createElement("sda");
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
    var table_size = document.getElementById("myInput").value;

    
  
    var div1 = document.getElementsByClassName("main");
    
    var questionRow = Math.floor(Math.random() * table_size)+1;   
    var questionColumn = Math.floor(Math.random() * table_size)+1;   

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
          cell.style.backgroundColor = 'yellow';
        }else if(i==questionRow && j==questionColumn){
          var cellText = document.createElement("input"); 
          cellText.type = "text";
          cellText.id = 'inputAnswer';
          answerChoice = cellText;
          correctAnswer = i*j;
        }else{
          var cellText = document.createTextNode(i*j)
          if ((i+j)%2==0){
            cell.style.backgroundColor = 'green';
          }else{
            cell.style.backgroundColor = 'blue';
          }
        }
        ;
        
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

    var div = document.createElement('div');
    div.id = 'container';
    div.className = 'border pad';
  
    document.body.appendChild(div);

    // 1. Create the button
    var button = document.createElement("button");
    button.innerHTML = "Check Answer";

    // 2. Append somewhere
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);

    // 3. Add event handler
    button.addEventListener ("click", function() {
      button.remove();
      checkIfCorrect(answerChoice.value, correctAnswer, button);
    });

    var time= userInput;
    setInterval(function(){
      if (time < 0){
        var answerChoice = document.getElementById("inputAnswer").value;
        if (answerChoice== correctAnswer){
          document.getElementById("table").innerHTML = '<p style= "color:green">Correct. Good Job!</p>';
        } else{
          document.getElementById("table").innerHTML = '<p style= "color:red">Wrong. Try Again!</p>';
        }
        document.getElementById("countdown").innerHTML = "";
        setInterval('window.location.reload()',3000);
        }else{
          document.getElementById("countdown").innerHTML = + time + "seconds left";
          time--;
        }
    },1000)
    
  }

  function checkIfCorrect(answerChoice, correctAnswer){
    //Correct or Incorrect answer
    var div = document.createElement('div');
    
    if (answerChoice == correctAnswer){
      div.id = 'right';
      div.innerHTML = 'Correct. Good Job!';
    }else{
      div.id = 'wrong';
      div.innerHTML = 'Wrong. Try Again!';
    }
    
    div.className = 'border pad';

    // button.remove();
    document.body.appendChild(div);
    alert(cellText)

  
  }




  