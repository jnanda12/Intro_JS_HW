// from data.js
var tableData = data;


// YOUR CODE HERE!

var tbody = d3.select("tbody");

function createTable(data){
    data.forEach(function(ufo) {
    //console.log(ufo);
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
        //console.log(key, value);
        // Append a cell to the row for each value
        // in the ufo  object
        var cell = row.append("td");
        cell.text(value);
    });
    })
};

createTable(tableData);

var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  //console.log(inputValue);

  var filteredData = tableData.filter(row => row.datetime == inputValue);

  console.log(filteredData);

  d3.selectAll('tr').remove();

  createTable(filteredData);
});
