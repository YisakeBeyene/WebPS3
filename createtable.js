function getInputValue() {
  var inputVal = document.getElementById("myInput").value;
  var table_size = inputVal;
  document.cookie = table_size;
  sessionStorage.setItem("table_size", table_size);
}


function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
    
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
    var table_size = document.getElementById("myInput").value;

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
          if (i==0 && j==0){
            var cellText = document.createTextNode(" ")
          }else if(i==0){
            var cellText = document.createTextNode(j)
          }else{
            var cellText = document.createTextNode(i)
          }
        }else{
          var cellText = document.createTextNode(i*j)
        }
        ;
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
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }


  