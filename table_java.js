
// This function clear all the values
function clearScreen() {
    
  document.getElementById("result").value = " ";
  
}
   

// This function displays values using "value" as a parameter
function display(value) {
    
  document.getElementById("result").value += value;//apending,merging
  
}


// This function evaluates the expression and return result
function calculate() {
    
 let p =document.getElementById("result").value;
  
   
 document.getElementById("result").value = eval(document.getElementById("result").value);
      
}