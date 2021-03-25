function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
    
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    tbl.id = 'something';
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

    
    // var divcountDownDiv = document.createElement('div');
    // divcountDownDiv.innerHTML = 'sdfa';
    // document.body.appendChild(divcountDownDiv);
    

    var time= table_size;
    
    var countDownDiv = document.createElement('div');
    countDownDiv.id = 'timerDiv';

    setInterval(function(){

      if (time < 0){
        if (answerChoice.value == correctAnswer){
          div.id = 'right';
          div.innerHTML = 'Correct. Good Job!';
          // alert('correct is: '+ correctAnswer);
          // alert('answer is: '+ answerChoice);
        }else{
          div.id = 'wrong';
          div.innerHTML = 'Wrong. Try Again!';
          // alert('correct: '+correctAnswer);
          // alert('answer: '+answerChoice);
        }
        countDownDiv.innerHTML = '';
        // setInterval('window.location.reload()',1000);
      }else{

        countDownDiv.innerHTML = time + ' seconds left';
        time--;
          
      }
    
    document.body.appendChild(countDownDiv);
    },1000);
    
    // // 1. Create the button
    // var button = document.createElement("button");
    // button.innerHTML = "Check Answer";

    // // 2. Append somewhere
    // var body = document.getElementsByTagName("body")[0];
    // body.appendChild(button);

    // // 3. Add event handler
    // button.addEventListener ("click", function() {
    //   // button.remove();
    //   checkIfCorrect(answerChoice.value, correctAnswer, button);
    // })
  }

  function checkIfCorrect(answerChoice, correctAnswer, button){

    

    //Old function
    //Correct or Incorrect answer

    var div = document.createElement('div');

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




  